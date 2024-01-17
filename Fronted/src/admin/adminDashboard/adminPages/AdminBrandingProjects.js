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

const AdminBrandingProjects = () => {
    // This Offcanvas for the Add Branding Projects 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Branding Projects
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Branding Projects Data 
    const [images, setImages] = useState("");
    const [name, setName] = useState("");

    // The useState Use for the All Branding Projects Iamges Show 
    const [WebPortFolios, setWebPortFolios] = useState([]);

    // The useState Use for the All Branding Projects Iamges Show By ID
    const [WebPortFoliosById, setWebPortFoliosById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetWebPortFolios();
        GetWebPortFoliosById(_id);
    }, [_id])

    // This Get Api Methods for the Branding Projects 
    const GetWebPortFolios = async () => {
        await axios.get(`${API_BASE_URL}/brandingproject/get`).then((response) => {
            setWebPortFolios(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }


    //   This Post Methods for the Branding Projects
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("name", name);
        axios.post(`${API_BASE_URL}/brandingproject/post`, formData).then((response => {
            console.log(response.data)
            GetWebPortFolios();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setName("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Methods for the Branding Projects
    const DeleteWebPortFolios = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/brandingproject/delete/${_id}`);
            console.log(response.data);
            GetWebPortFolios();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Branding Projects By ID
    const GetWebPortFoliosById = async (_id) => {
        await axios.get(`${API_BASE_URL}/brandingproject/getById/${_id}`).then((response) => {
            setWebPortFoliosById(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log("Get WebPortFoliosById", WebPortFoliosById)

    // This methods for the Update the Branding Projects
    const [editFormData, setEditFormData] = useState({
        name: "",
        images: "",
    });
    //  This function use for the Edit the Branding Projects
    const EditWebPortFolios = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.name) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("name", editFormData.name);
            try {
                const response = await axios.put(`${API_BASE_URL}/brandingproject/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Branding Projects data
                GetWebPortFolios();
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
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetWebPortFoliosById(_id);
        GetWebPortFolios();
        // Initialize edit form data if available
        if (WebPortFoliosById) {
            setEditFormData({
                images: WebPortFoliosById.images || "",
                name: WebPortFoliosById.name || "",
            });
        }
    }, [_id, WebPortFoliosById]);
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
                            <Button onHide={handleClose}
                                className='mb-4 AdminButton' onClick={handleShow}>
                                + Add Web PortFolios
                            </Button>
                            {/* This Offcanvas for the Branding Projects here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddWebPortFolios">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Web PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="text"
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Name....' />

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Web PortFolios</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Branding Projects here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditWebPortFolios"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Web PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (WebPortFoliosById && WebPortFoliosById._id) {
                                                EditWebPortFolios(WebPortFoliosById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || WebPortFoliosById?.images}`}
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
                                        <div className='EditWebPortFoliosInput'>
                                            <div className='EditWebPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='name'
                                                    value={editFormData.name}
                                                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                                                    placeholder='Title...'
                                                />
                                            </div>

                                        </div>
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
                                            Edit Web Portfolio
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
                                    <th>Project Name</th>
                                    <th>Edit</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WebPortFolios?.map((WebPortFoliosResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${WebPortFoliosResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{WebPortFoliosResult?.name}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => DeleteWebPortFolios(WebPortFoliosResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetWebPortFoliosById(WebPortFoliosResult?._id);
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

export default AdminBrandingProjects