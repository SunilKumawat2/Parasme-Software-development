import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import AdminSideNav from '../sidenav/AdminSideNav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { MdDelete } from 'react-icons/md'
import { LiaEdit } from 'react-icons/lia'
import { useParams } from 'react-router-dom';
import { API_BASE_URL, IMG_BASE_URL } from '../../../config/ApiConfig';

const AdminPartners = () => {
    // This Offcanvas for the Add Partner 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Partner
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Awards Data 
    const [images, setImages] = useState("");
    const [name, setName] = useState("");

    // The useState Use for the All Awards Iamges Show 
    const [Partners, setPartners] = useState([]);

    // The useState Use for the All Awards Iamges Show By ID
    const [PartnersById, setPartnersById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetPartners();
    }, [_id])

    // This Get Api Methods for the GetImages Slider
    const GetPartners = async () => {
        await axios.get(`${API_BASE_URL}/partner/get`).then((response) => {
            setPartners(response.data.partner);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Slider
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("name", name);
        axios.post(`${API_BASE_URL}/partner/post`, formData).then((response => {
            console.log(response.data)
            GetPartners();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setName("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Api Methods for the Delete Slider
    const deletePartners = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/partner/delete/${_id}`);
            console.log("delete partner", response.data);
            GetPartners();
        } catch (error) {
            console.error(error);
        }
    }


    // This Methods show the Data By ID
    const GetPartnersById = async (_id) => {
        await axios.get(`${API_BASE_URL}/partner/getById/${_id}`).then((response) => {
            setPartnersById(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log("PartnersById", PartnersById)

    // This methods for the Update the Slider
    const [editFormData, setEditFormData] = useState({
        images: "",
        name: "",
    });
    //  This function use for the Edit the Awards
    const EditAward = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.name || editFormData.paragraph) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("name", editFormData.name);
            formData.append("paragraph", editFormData.paragraph);

            try {
                const response = await axios.put(`${API_BASE_URL}/partner/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Awards data
                GetPartners();
            } catch (error) {
                console.error(error);
            }
        }

        // Close the edit form or perform other actions
        handleCloseEdit();

        // Optionally, reset the state to initial values
        setEditFormData({
            images: "",
            name: "",
            paragraph: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetPartnersById(_id);
        GetPartners();
        // Initialize edit form data if available
        if (PartnersById) {
            setEditFormData({
                images: PartnersById.images || "",
                name: PartnersById.name || "",
            });
        }
    }, [_id, PartnersById]);
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
                                + Add Partner
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddAwardOffcanvas">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Partner</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="text" name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='name....' />

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Partner</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Award Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditliderOffcanvas"
                                backdrop="static">
                                <Offcanvas.Header className='AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Partner</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (PartnersById && PartnersById._id) {
                                                EditAward(PartnersById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || PartnersById?.images}`}
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
                                            type="text"
                                            name='name'
                                            value={editFormData.name}
                                            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                                            placeholder='name...'
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type="file"
                                            name='images'
                                            onChange={(e) => setEditFormData({
                                                ...editFormData,
                                                images: e.target.files[0]
                                            })}
                                            placeholder='Slider Name'
                                        />
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Partner
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
                                    <th>Title</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Partners?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${SliderResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{SliderResult?.name}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deletePartners(SliderResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetPartnersById(SliderResult?._id);
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

export default AdminPartners