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
const AdminCaseStudy = () => {
    // This Offcanvas for the Add Case Study section 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Case Study section
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Case Study section 
    const [images, setImages] = useState("");
    const [app_title, setApp_Title] = useState("");
    const [app_type, setApp_Type] = useState("");
    const [android_link, setAndriod_link] = useState("");
    const [ios_link, setIos_link] = useState("");
    const [about_app, setAbout_app] = useState("");

    // The useState Use for the All CaseStudy Iamges Show 
    const [WebPortFolios, setWebPortFolios] = useState([]);

    // The useState Use for the All Awards Iamges Show By ID
    const [WebPortFoliosById, setWebPortFoliosById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetWebPortFolios();
        GetWebPortFoliosById(_id);
    }, [_id])

    // This Get Methods for the Case Study section
    const GetWebPortFolios = async () => {
        await axios.get(`${API_BASE_URL}/CaseStudy/get`).then((response) => {
            setWebPortFolios(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    //   This Post Methods for the Create Case Study section
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("app_title", app_title);
        formData.append("app_type", app_type);
        formData.append("android_link", android_link);
        formData.append("ios_link", ios_link);
        formData.append("about_app", about_app);
        axios.post(`${API_BASE_URL}/CaseStudy/post`, formData).then((response => {
            console.log(response.data)
            GetWebPortFolios();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setApp_Title("");
            setApp_Type("");
            setAbout_app("");
            setAndriod_link("");
            setIos_link("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Methods for the Delete Case Study section
    const DeleteWebPortFolios = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/CaseStudy/delete/${_id}`);
            console.log(response.data);
            GetWebPortFolios();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Case Study section By ID
    const GetWebPortFoliosById = async (_id) => {
        await axios.get(`${API_BASE_URL}/CaseStudy/getById/${_id}`).then((response) => {
            setWebPortFoliosById(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    // This methods for the Update the Case Study section
    const [editFormData, setEditFormData] = useState({
        app_title: "",
        app_type: "",
        about_app: "",
        android_link: "",
        ios_link: "",
        images: "",
    });
    //  This function use for the Edit the Case Study section
    const EditWebPortFolios = async (_id) => {
        // Check if any changes are made
        if (editFormData.images ||
            editFormData.app_title || editFormData.app_type ||
            editFormData.about_app || editFormData.android_link || editFormData.ios_link) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("app_title", editFormData.app_title);
            formData.append("app_type", editFormData.app_type);
            formData.append("about_app", editFormData.about_app);
            formData.append("android_link", editFormData.android_link);
            formData.append("ios_link", editFormData.ios_link);

            try {
                const response = await axios.put(`${API_BASE_URL}/CaseStudy/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Case Study section data
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
            app_title: "",
            app_type: "",
            about_app: "",
            android_link: "",
            ios_link: "",
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
                app_title: WebPortFoliosById.app_title || "",
                app_type: WebPortFoliosById.app_type || "",
                about_app: WebPortFoliosById.about_app || "",
                android_link: WebPortFoliosById.android_link || "",
                ios_link: WebPortFoliosById.ios_link || "",
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
                                + Add Case Study
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddCaseStudyForm">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Case Study</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <div className='WebPortFoliosInput'>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='app_title'
                                                    value={app_title}
                                                    onChange={(e) => setApp_Title(e.target.value)}
                                                    placeholder='Title....' />
                                            </div>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='app_type'
                                                    value={app_type}
                                                    onChange={(e) => setApp_Type(e.target.value)}
                                                    placeholder='App Type....' />
                                            </div>
                                        </div>

                                        <div className='WebPortFoliosInput'>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='android_link'
                                                    value={android_link}
                                                    onChange={(e) => setAndriod_link(e.target.value)}
                                                    placeholder='Andriod Link....' />
                                            </div>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text" name='ios_link'
                                                    value={ios_link} onChange={(e) => setIos_link(e.target.value)}
                                                    placeholder='IOS Link....' />
                                            </div>
                                        </div>


                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <div>
                                            <div >
                                                <textarea
                                                    className='form-control mb-3'
                                                    name='about_app'
                                                    value={about_app}
                                                    onChange={(e) => setAbout_app(e.target.value)}
                                                    placeholder='About App....'
                                                />
                                            </div>
                                        </div>
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Case Study</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Case Study section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditWebPortFolios"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Case Study</Offcanvas.Title>
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
                                                    name='app_title'
                                                    value={editFormData.app_title}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        app_title: e.target.value
                                                    })}
                                                    placeholder='Title...'
                                                />
                                            </div>
                                            <div className='EditWebPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='app_type'
                                                    value={editFormData.app_type}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        app_type: e.target.value
                                                    })}
                                                    placeholder='App TYpe...'
                                                />
                                            </div>
                                        </div>
                                        <div className='EditWebPortFoliosInput'>
                                            <div className='EditWebPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='android_link'
                                                    value={editFormData.android_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        android_link: e.target.value
                                                    })}
                                                    placeholder='Andriod Link...'
                                                />
                                            </div>
                                            <div className='EditWebPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='ios_link'
                                                    value={editFormData.ios_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        ios_link: e.target.value
                                                    })}
                                                    placeholder='IOS Link...'
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
                                        <div >
                                            <textarea
                                                className='form-control mb-3'
                                                name='about_app'
                                                value={editFormData.about_app}
                                                onChange={(e) => setEditFormData({ ...editFormData, about_app: e.target.value })}
                                                placeholder='About App....'
                                            />
                                        </div>
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Case Study
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
                                    <th style={{ padding: "1rem 4rem" }}>Title</th>
                                    <th style={{ padding: "1rem 1rem" }}>App Type</th>
                                    <th style={{ padding: "1rem 8rem" }}>About App</th>
                                    <th>Android Link</th>
                                    <th>IOS Link</th>
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
                                                <td>{WebPortFoliosResult?.app_title}</td>
                                                <td>{WebPortFoliosResult?.app_type}</td>
                                                <td>{WebPortFoliosResult?.about_app}</td>
                                                <td>{WebPortFoliosResult?.android_link}</td>
                                                <td>{WebPortFoliosResult?.ios_link}</td>
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

export default AdminCaseStudy