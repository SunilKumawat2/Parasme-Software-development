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
import { API_BASE_URL,IMG_BASE_URL } from '../../../config/ApiConfig';

const AdminPortFolio = () => {
    // This Offcanvas for the Add Portfolio 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Slider
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The PortFolio Data 
    const [images, setImages] = useState("");
    const [title, setTitle] = useState("");
    const [decription, setDecription] = useState("");
    const [web_link, setWeb_link] = useState("");
    const [ios_link, setIos_link] = useState("");
    const [android_link, setAndroid_link] = useState("");

    // The useState Use for the All Awards Iamges Show 
    const [PortFolios, setPortFolios] = useState([]);

    // The useState Use for the All Awards Iamges Show By ID
    const [PortFoliosById, setPortFoliosById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetPortFolios();
        GetPortFoliosById(_id);
    }, [_id])

    // This Get Api Methods for the GetImages Slider
    const GetPortFolios = async () => {
        await axios.get(`${API_BASE_URL}/portfolios/get`).then((response) => {
            setPortFolios(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create PortFolios
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("title", title);
        formData.append("decription", decription);
        formData.append("web_link", web_link);
        formData.append("ios_link", ios_link);
        formData.append("android_link", android_link);
        axios.post(`${API_BASE_URL}/portfolios/post`, formData).then((response => {
            console.log(response.data.data)
            GetPortFolios();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setTitle("");
            setDecription("");
            setWeb_link("");
            setIos_link("");
            setAndroid_link("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Api Methods for the Delete PortFolios
    const deletePortFolio = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/portfolios/delete/${_id}`);
            console.log(response.data.data);
            GetPortFolios();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Data By ID
    const GetPortFoliosById = async (_id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/portfolios/getById/${_id}`);
            const responseData = response.data;

            if (responseData.status === 200) {
                setPortFoliosById(responseData.data);
            } else {
                console.error(responseData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // This methods for the Update the Slider
    const [editFormData, setEditFormData] = useState({
        images: "",
        title: "",
        decription: "",
        web_link: "",
        ios_link: "",
        android_link: "",
    });

    //  This function use for the Edit the Awards
    const EditAward = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.title || editFormData.decription || editFormData.web_link
            || editFormData.ios_link || editFormData.android_link) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("title", editFormData.title);
            formData.append("decription", editFormData.decription);
            formData.append("web_link", editFormData.web_link);
            formData.append("ios_link", editFormData.ios_link);
            formData.append("android_link", editFormData.android_link);

            try {
                const response = await axios.put(`${API_BASE_URL}/portfolios/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Awards data
                GetPortFolios();
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
            decription: "",
            web_link: "",
            ios_link: "",
            android_link: "",
        });
    };
    
        useEffect(() => {
        // Fetch data for editing
        GetPortFoliosById(_id);
        GetPortFolios();
        // Initialize edit form data if available
        if (PortFoliosById) {
            setEditFormData({
                images: PortFoliosById.images || "",
                title: PortFoliosById.title || "",
                decription: PortFoliosById.decription || "",
                web_link: PortFoliosById.web_link || "",
                ios_link: PortFoliosById.ios_link || "",
                android_link: PortFoliosById.ios_link || "",
            });
        }
    }, [_id, PortFoliosById]);

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
                                + Add Portfolio
                            </Button>
                            {/* This Offcanvas for the Add Portfolio Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddPortFolio">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Portfolio</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="text" name='title'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder='Title....' />

                                        <input className='form-control mb-3' type="text"
                                            name='decription'
                                            value={decription} onChange={(e) => setDecription(e.target.value)}
                                            placeholder='Decription....' />

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />

                                        <input className='form-control mb-3' type="text" name='web_link'
                                            onChange={(e) => setWeb_link(e.target.value)} value={web_link}
                                            placeholder='Web Link' />

                                        <input className='form-control mb-3' type="text" name='ios_link'
                                            onChange={(e) => setIos_link(e.target.value)} value={ios_link}
                                            placeholder='Ios Link' />

                                        <input className='form-control mb-3' type="text" name='android_link'
                                            onChange={(e) => setAndroid_link(e.target.value)} value={android_link}
                                            placeholder='Android Link' />

                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload PortFolio</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Portfolio Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditPortFolios"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Portfolio</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (PortFoliosById && PortFoliosById._id) {
                                                EditAward(PortFoliosById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData?.images || PortFoliosById?.images}`}
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
                                        <div className='PortFoliosInput'>
                                            <div className='PortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='title'
                                                    value={editFormData.title}
                                                    onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                                                    placeholder='Title...'
                                                />
                                            </div>
                                            <div className='PortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='decription'
                                                    value={editFormData.decription}
                                                    onChange={(e) => setEditFormData({ ...editFormData, decription: e.target.value })}
                                                    placeholder='Decription...'
                                                />
                                            </div>
                                        </div>

                                        <div className='PortFoliosInput'>
                                            <div className='PortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='web_link'
                                                    value={editFormData.web_link}
                                                    onChange={(e) => setEditFormData({ ...editFormData, web_link: e.target.value })}
                                                    placeholder='Web Link...'
                                                />
                                            </div>
                                            <div className='PortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='ios_link'
                                                    value={editFormData.ios_link}
                                                    onChange={(e) => setEditFormData({ ...editFormData, ios_link: e.target.value })}
                                                    placeholder='IOS Link...'
                                                />
                                            </div>
                                        </div>

                                        <div className='PortFoliosInput'>
                                            <div className='PortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='android_link'
                                                    value={editFormData.android_link}
                                                    onChange={(e) => setEditFormData({ ...editFormData, android_link: e.target.value })}
                                                    placeholder='Android Link...'
                                                />
                                            </div>
                                            <div className='PortFoliosInputInput'>
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
                                        </div>


                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Portfolio
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
                                    <th>Decription</th>
                                    <th>Web Link</th>
                                    <th>Ios Link</th>
                                    <th>Android Link</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PortFolios?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${SliderResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{SliderResult?.title}</td>
                                                <td>{SliderResult?.decription}</td>
                                                <td>{SliderResult?.web_link}</td>
                                                <td>{SliderResult?.ios_link}</td>
                                                <td>{SliderResult?.android_link}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deletePortFolio(SliderResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetPortFoliosById(SliderResult?._id);
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

export default AdminPortFolio