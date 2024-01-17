import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import AdminSideNav from '../sidenav/AdminSideNav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { MdDelete } from 'react-icons/md';
import { LiaEdit } from 'react-icons/lia';
import { API_BASE_URL,IMG_BASE_URL } from '../../../config/ApiConfig';
import { useParams } from 'react-router-dom'; 

const AdminTechnology = () => {
    // This Offcanvas for the Add Technology 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Technology
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [images, setImages] = useState("");
    const [TechnologyName, setTechnologyName] = useState([]);
    const [TechnologyNameById, setTechnologyNameById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetImagesTechnology();
        GetImageTechnologyById();
        EditTechnology();
    }, [])
    // This Get Api Methods for the GetImages Technology
    const GetImagesTechnology = async () => {
        await axios.get(`${API_BASE_URL}/technology/get`).then((response) => {
            setTechnologyName(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Technology
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        axios.post(`${API_BASE_URL}/technology/post`, formData).then((response => {
            console.log(response.data)
            GetImagesTechnology();
            // Close the Offcanvas
            handleClose();
            setImages("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }
    // This Delete Api Methods for the Delete Technology
    const deleteSlider = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/technology/delete/${_id}`);
            console.log(response.data);
            GetImagesTechnology();
        } catch (error) {
            console.error(error);
        }
    }
    // This Methods show the Technology By ID
    const GetImageTechnologyById = async (_id) => {
        await axios.get(`${API_BASE_URL}/technology/getById/${_id}`).then((response) => {
            setTechnologyNameById(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    // This methods for the Update the Technology 
    const EditTechnology = async (_id) => {
        try {
            const formData = new FormData();
            formData.append("images", images);

            const response = await axios.put(`${API_BASE_URL}/technology/update/${_id}`, formData);
            console.log(response.data.data);

            // After successfully editing, update the Technology 
            GetImageTechnologyById(_id);

            // Close the edit form or perform other actions
            handleCloseEdit();

            // Optionally, you can also update the list of Technology
            GetImagesTechnology();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <AdminSideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{
                    marginTop: "70px",
                    marginLeft: "30px"
                }}>
                    <div>
                        <div>
                            <Button  onHide={handleClose}
                                className='mb-4 AdminButton' onClick={handleShow}>
                                + Add Technology
                            </Button>
                            {/* This Offcanvas for the Add Technology */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSliderOffcanvas">
                                <Offcanvas.Header closeButton className='AdminOffcanvas'>
                                    <Offcanvas.Title>Add Technology</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Technology</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Technology  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditliderOffcanvas" backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Technology</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (TechnologyNameById && TechnologyNameById?._id) {
                                                EditTechnology(TechnologyNameById?._id);
                                            } else {
                                                console.error("Missing _id");
                                            }
                                        }}
                                        method='post'
                                        encType='multipart/form-data'
                                        className='mb-3'
                                    >
                                        {/* Display existing image or other data here */}
                                        <div className='text-center'>
                                            <img
                                                src={`${IMG_BASE_URL}${TechnologyNameById?.images}`}
                                                alt='Slider'
                                                style={{
                                                    width: "180px",
                                                    height: "100px",
                                                    border: "1px solid grey",
                                                    borderRadius: "10px",
                                                    marginBottom: "20px",
                                                }}
                                            />
                                        </div>
                                        <input
                                            className='form-control mb-3'
                                            type="file"
                                            name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name'
                                        />
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Technology
                                        </button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Images</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TechnologyName?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${SliderResult?.images}`} alt='' style={{ width: "100px", height: "70px" }} />
                                                <td><MdDelete style={{
                                                    cursor: "pointer", fontSize: '25px'
                                                    , color: "red", margin: "10px auto"
                                                }}
                                                    onClick={() => deleteSlider(SliderResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetImageTechnologyById(SliderResult?._id);
                                                        }}
                                                        style={{
                                                            cursor: "pointer", fontSize: '25px'
                                                            , color: "blue", margin: "10px auto"
                                                        }} />
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default AdminTechnology