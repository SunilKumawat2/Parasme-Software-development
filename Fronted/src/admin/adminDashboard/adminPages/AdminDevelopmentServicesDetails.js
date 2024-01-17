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
const AdminDevelopmentServicesDetails = () => {
    // This Offcanvas for the Add Development Services Details 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Development Services Details
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Development Services Details Data 
    const [images, setImages] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [developmentService, setDevelopmentService] = useState("");
    // The useState Use for the All Development Services  Show 
    const [WebDevelopment, setWebDevelopment] = useState([]);
    // The useState Use for the All Development Services Details Show 
    const [WebDevelopmentServices, setWebDevelopmentServices] = useState([]);

    // The useState Use for the All Development Services  Show By ID
    const [WebDevelopmentById, setWebDevelopmentById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetWebDevelopment();
        GetWebDevelopmentServices();
        GetWebDevelopmentById(_id);
    }, [_id])

    // This Get Api Methods for the Development Services 
    const GetWebDevelopment = async () => {
        await axios.get(`${API_BASE_URL}/DevelopmentServicesDeatils/get`).then((response) => {
            setWebDevelopment(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    // This Get Api Methods for the Development Services Details
    const GetWebDevelopmentServices = async () => {
        await axios.get(`${API_BASE_URL}/DevelopmentServices/get`).then((response) => {
            setWebDevelopmentServices(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Development Services Details
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("developmentService",developmentService);
        axios.post(`${API_BASE_URL}/DevelopmentServicesDeatils/post`, formData).then((response => {
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

    // This Delete Api Methods for the Delete Development Services Details
    const deleteWebDevelopment = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/DevelopmentServicesDeatils/delete/${_id}`);
            console.log(response.data);
            GetWebDevelopment();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Development Services Details By ID
    const GetWebDevelopmentById = async (_id) => {
        await axios.get(`${API_BASE_URL}/DevelopmentServicesDeatils/getById/${_id}`).then((response) => {
            setWebDevelopmentById(response.data.data)
        }).catch((error) => {
            console.log(error);
        }
        )
    }
    console.log("DevelopmentServicesDeatilsGetById",WebDevelopmentById)

    // This methods for the Update the Development Services Details
    const [editFormData, setEditFormData] = useState({
        images: "",
        title: "",
        description: "",
    });
    //  This function use for the Edit the Development Services Details
    const EditWebDevelopment = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.title || editFormData.description) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("title", editFormData.title);
            formData.append("description", editFormData.description);
            formData.append("developmentService", editFormData.developmentService);
            try {
                const response = await axios.put(`${API_BASE_URL}/DevelopmentServicesDeatils/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Development Services Details data
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
            title: "",
            description: "",
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
                title: WebDevelopmentById.title || "",
                description: WebDevelopmentById.description || "",
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
                                + Development Details
                            </Button>
                            {/* This Offcanvas for the Add Development Services Details Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSEOSection">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Development Details</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' 
                                    encType='multipart/form-data'
                                        className='mb-3'>

                                        <select
                                            className='form-control mb-3'
                                            name='developmentService'
                                            value={developmentService}
                                            onChange={(e) => {
                                                setDevelopmentService(e.target.value);
                                                console.log('Selected Development Service ID:', e.target.value);
                                              }}
                                        >
                                            <option value='' disabled>Select Technology...</option>
                                            {
                                                WebDevelopmentServices.map((WebDevelopmentServicesResult)=>{
                                                    return(
                                                        <>
                                                         <option key={WebDevelopmentServicesResult._id}
                                                          value={WebDevelopmentServicesResult._id}>
                                                            {WebDevelopmentServicesResult?.main_title}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                           
                                            {/* Add more options as needed */}
                                        </select>

                                        <input className='form-control mb-3' type="text"
                                            name='title'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder='Title....' />


                                        <textarea className='form-control mb-3'
                                            type="text" name='description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder='Description....' />

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />

                                        <button className='btn btn AdminUploads mt-5' onHide={handleClose}
                                            type='submit'>Development Details</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Development Services Details Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditSEOSection"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Development Details</Offcanvas.Title>
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
                                                name='title'
                                                value={editFormData?.title}
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
                                                    name='description'
                                                    value={editFormData.description}
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
                                            Edit Development Details
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
                                                <td>{WebDevelopmentResult?.title}</td>
                                                <td>{WebDevelopmentResult?.description?.slice(0, 70)}...</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteWebDevelopment(WebDevelopmentResult?._id)} /></td>
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

export default AdminDevelopmentServicesDetails