import React, { useEffect } from 'react'
import AdminSideNav from '../sidenav/AdminSideNav';
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../adminPages/AdminPages.css'
import axios from 'axios';
import { MdDelete } from 'react-icons/md'
import { LiaEdit } from 'react-icons/lia'
import { IMG_BASE_URL, API_BASE_URL } from '../../../config/ApiConfig';
// import { useParams } from 'react-router-dom';
const AdminSlider = () => {
    // This Offcanvas for the Add Slider 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Slider
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [images, setImages] = useState("");
    const [sliderName, setSliderName] = useState([]);
    const [sliderNameById, setSliderNameById] = useState({});
    // const { _id } = useParams();
    useEffect(() => {
        GetImagesSlider();
        GetImageSliderById();
        EditSlider();
    }, [])
    // This Get Api Methods for the GetImages Slider
    const GetImagesSlider = async () => {
        await axios.get(`${API_BASE_URL}/slider/get`).then((response) => {
            setSliderName(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Slider
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        axios.post(`${API_BASE_URL}/slider/post`, formData).then((response => {
            console.log(response.data)
            GetImagesSlider();
            // Close the Offcanvas
            handleClose();
            setImages("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }
    // This Delete Api Methods for the Delete Slider
    const deleteSlider = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/slider/delete/${_id}`);
            console.log(response.data);
            GetImagesSlider();
        } catch (error) {
            console.error(error);
        }
    }
    // This Methods show the Data By ID
    const GetImageSliderById = async (_id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/slider/getById/${_id}`);
            const responseData = response.data;

            if (responseData.status === 200) {
                setSliderNameById(responseData.data);
            } else {
                console.error(responseData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    // This methods for the Update the Slider 
    const EditSlider = async (_id) => {
        try {
            const formData = new FormData();
            formData.append("images", images);

            const response = await axios.put(`${API_BASE_URL}/slider/update/${_id}`, formData);
            console.log(response.data);

            // After successfully editing, update the slider data
            GetImageSliderById(_id);

            // Close the edit form or perform other actions
            handleCloseEdit();

            // Optionally, you can also update the list of sliders
            GetImagesSlider();
        } catch (error) {
            console.error(error);
        }
    };


    // console.log("EditSlider",sliderNameById)
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
                                className='mb-4 AdminButton ' onClick={handleShow}>
                                + Add Slider
                            </Button>
                            {/* This Offcanvas for the Add Images Slider  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSliderOffcanvas">
                                <Offcanvas.Header closeButton className='AdminOffcanvas'>
                                    <Offcanvas.Title >Add Slider</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn mt-3 AdminUploads' onHide={handleClose}
                                            type='submit'>Upload Slider</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Images Slider  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditliderOffcanvas" backdrop="static">
                                <Offcanvas.Header  className='AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Slider</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (sliderNameById && sliderNameById._id) {
                                                EditSlider(sliderNameById._id);
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
                                                src={`${IMG_BASE_URL}${sliderNameById?.images}`}
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
                                            Edit Slider
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
                                {sliderName?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}/${SliderResult?.images}`} alt='' style={{ width: "100px", height: "70px" }} />
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
                                                            GetImageSliderById(SliderResult?._id);
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

export default AdminSlider