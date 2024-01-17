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
import 'react-quill/dist/quill.snow.css';

const AdminWebDevelopment = () => {
    // This Offcanvas for the Add web Development 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit web Development
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The web Development Data 
    const [images, setImages] = useState("");
    const [main_title, setTitle] = useState("");
    const [short_description, setDescription] = useState("");
    // The useState Use for the All web Development Show 
    const [WebDevelopment, setWebDevelopment] = useState([]);

    // The useState Use for the All web Development Show By ID
    const [WebDevelopmentById, setWebDevelopmentById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetWebDevelopment();
        GetWebDevelopmentById(_id);
    }, [_id])

    // This Get Methods for the web Development
    const GetWebDevelopment = async () => {
        await axios.get(`${API_BASE_URL}/DevelopmentServices/get`).then((response) => {
            setWebDevelopment(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Methods for the Create web Development
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("main_title", main_title);
        formData.append("short_description", short_description);
        axios.post(`${API_BASE_URL}/DevelopmentServices/post`, formData).then((response => {
            console.log(response.data)
            GetWebDevelopment();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setTitle("");
            setDescription("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Methods for the Delete web Development
    const deleteSEOS = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/DevelopmentServices/delete/${_id}`);
            console.log(response.data);
            GetWebDevelopment();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the web Development By ID
    const GetWebDevelopmentById = async (_id) => {
        await axios.get(`${API_BASE_URL}/DevelopmentServices/getById/${_id}`).then((response) => {
            setWebDevelopmentById(response.data.data)
        }).catch((error) => {
            console.log(error);

        }
        )
    }

    // This methods for the Update the WebDevelopment
    const [editFormData, setEditFormData] = useState({
        images: "",
        main_title: "",
        short_description: "",
    });
    //  This function use for the Edit the web Development
    const EditWebDevelopment = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.main_title || editFormData.short_description) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("main_title", editFormData.main_title);
            formData.append("short_description", editFormData.short_description);
            try {
                const response = await axios.put(`${API_BASE_URL}/DevelopmentServices/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the web Development data
                GetWebDevelopment();
            } catch (error) {
                console.error(error);
            }
        }

        // Close the edit form or perform other actions
        handleCloseEdit();

        // Optionally, reset the state to initial values
        setEditFormData({
            images: "",
            main_title: "",
            short_description: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetWebDevelopmentById(_id);
        GetWebDevelopment();
        // Initialize edit form data if available
        if (WebDevelopmentById) {
            setEditFormData({
                images: WebDevelopmentById.images || "",
                main_title: WebDevelopmentById.main_title || "",
                short_description: WebDevelopmentById.short_description || "",
            });
        }
    }, [_id, WebDevelopmentById]);
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
                            <Button variant="primary" onHide={handleClose}
                                className='mb-4 AdminButton' onClick={handleShow}>
                                + Add Web Development
                            </Button>
                            {/* This Offcanvas for the Add web Development Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSEOSection">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Web Development</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>

                                        <input className='form-control mb-3' type="text"
                                            name='main_title'
                                            value={main_title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder='Title....' />

                                        <textarea className='form-control mb-3'
                                            type="text" name='short_description'
                                            value={short_description}
                                             onChange={(e) => setDescription(e.target.value)}
                                            placeholder='Description....' />

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />

                                        <button className='btn btn AdminUploads mt-5' onHide={handleClose}
                                            type='submit'>Upload our Web Development</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit web Development Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditSEOSection"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit our Web Development</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (WebDevelopmentById && WebDevelopmentById._id) {
                                                EditWebDevelopment(WebDevelopmentById._id);
                                            } else {
                                                console.error("Missing _id");
                                            }
                                        }}
                                        method='post'
                                        encType='multipart/form-data'
                                        className='mb-3'
                                    >
                                        {/* Display existing image or other data here */}
                                      
                                                <img
                                                    src={`${IMG_BASE_URL}${editFormData.images || WebDevelopmentById?.images}`}
                                                    alt='Slider'
                                                    style={{
                                                        width: "180px",
                                                        height: "100px",
                                                        border: "1px solid grey",
                                                        borderRadius: "10px",
                                                        marginBottom: "20px",
                                                    }}
                                                />
                                                <div>
                                                    <input
                                                        className='form-control mb-3'
                                                        type="text"
                                                        name='main_title'
                                                        value={editFormData?.main_title}
                                                        onChange={(e) =>
                                                            setEditFormData({ ...editFormData, title: e.target.value })}
                                                        placeholder='Title...'
                                                    />
                                                </div>
                                                <div>
                                                    <div>

                                                        <input
                                                            className='form-control mb-3'
                                                            type="text"
                                                            name='short_description'
                                                            value={editFormData.short_description}
                                                            onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                                                            placeholder='Description...'
                                                        />
                                                    </div>
                                                </div>
                                                <div>
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

                                                </div>
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Web Development
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
                                    <th style={{ padding: "1rem 5rem" }}>Desripation</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WebDevelopment?.map((WebDevelopmentResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${WebDevelopmentResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{WebDevelopmentResult?.main_title}</td>
                                                <td>{WebDevelopmentResult?.short_description?.slice(0, 70)}...</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteSEOS(WebDevelopmentResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetWebDevelopmentById(WebDevelopmentResult?._id);
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

export default AdminWebDevelopment