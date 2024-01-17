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
const AdminAllPortFolios = () => {
    // This Offcanvas for the Add Slider 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Slider
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Awards Data 
    const [images, setImages] = useState("");
    const [title, setTitle] = useState("");
    const [decripation, setDecripation] = useState("");
    const [andriod_link, setAndriod_Link] = useState("");
    const [ios_link, setIos_Link] = useState("");

    // The useState Use for the All Awards Iamges Show 
    const [AllPortFolios, setAllPortFolios] = useState([]);

    // The useState Use for the All Awards Iamges Show By ID
    const [AllPortFoliosById, setAllPortFoliosById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetAllPortFolios();
        GetAllPortFoliosById(_id);
    }, [_id])

    // This Get Api Methods for the GetImages Slider
    const GetAllPortFolios = async () => {
        await axios.get(`${API_BASE_URL}/allportfolios/get`).then((response) => {
            setAllPortFolios(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Slider
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("title", title);
        formData.append("decripation", decripation);
        formData.append("andriod_link", andriod_link);
        formData.append("ios_link", ios_link);
        axios.post(`${API_BASE_URL}/allportfolios/post`, formData).then((response => {
            console.log(response.data)
            GetAllPortFolios();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setTitle("");
            setDecripation("");
            setAndriod_Link("");
            setIos_Link("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Api Methods for the Delete Slider
    const deleteAllPortFolios = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/allportfolios/delete/${_id}`);
            console.log(response.data);
            GetAllPortFolios();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Data By ID
    const GetAllPortFoliosById = async (_id)=>{
        axios.get(`${API_BASE_URL}/allportfolios/getById/${_id}`).then((response)=>{
            setAllPortFoliosById(response.data.data)
        }).catch((error)=>{
            console.log(error);

        }
        )
    }

    // This methods for the Update the AllPortFolios
    const [editFormData, setEditFormData] = useState({
        images: "",
        title: "",
        decripation: "",
        ios_link: "",
        andriod_link: "",
    });
    //  This function use for the Edit the Awards
    const EditAward = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.title || editFormData.decripation || editFormData.andriod_link || editFormData.ios_link) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("title", editFormData.title);
            formData.append("decripation", editFormData.decripation);
            formData.append("andriod_link", editFormData.andriod_link);
            formData.append("ios_link", editFormData.ios_link);

            try {
                const response = await axios.put(`${API_BASE_URL}/allportfolios/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Awards data
                GetAllPortFolios();
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
            decripation: "",
            andriod_link: "",
            ios_link: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetAllPortFoliosById(_id);
        GetAllPortFolios();
        // Initialize edit form data if available
        if (AllPortFoliosById) {
            setEditFormData({
                images: AllPortFoliosById.images || "",
                title: AllPortFoliosById.title || "",
                decripation: AllPortFoliosById.decripation || "",
                andriod_link: AllPortFoliosById.andriod_link || "",
                ios_link: AllPortFoliosById.ios_link || "",
            });
        }
    }, [_id, AllPortFoliosById]);

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
                                + Add All PortFolios
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddAllPortFolios">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add All PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='title'
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder='Title....' />
                                            </div>

                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3'
                                                    type="text" name='ios_link'
                                                    value={ios_link} onChange={(e) => setIos_Link(e.target.value)}
                                                    placeholder='IOS Link....' />
                                            </div>
                                        </div>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='andriod_link'
                                                    value={andriod_link}
                                                    onChange={(e) => setAndriod_Link(e.target.value)}
                                                    placeholder='Andriod Link....' />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="file" name='images'
                                                    onChange={(e) => setImages(e.target.files[0])}
                                                    placeholder='Slider Name' />
                                            </div>
                                        </div>

                                        <div className='AllPortFoliosInput'>
                                            <textarea
                                                className='form-control mb-3' name='decripation'
                                                value={decripation} onChange={(e) => setDecripation(e.target.value)}
                                                placeholder='Description....'
                                            />
                                        </div>

                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload All PortFolios</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit All PortFolios Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditAllPortFoliosForm"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit All PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (AllPortFoliosById && AllPortFoliosById._id) {
                                                EditAward(AllPortFoliosById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || AllPortFoliosById?.images}`}
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
                                        <div className='EditAllPortFoliosInput'>
                                            <div className='EditAllPortFoliosInputInput'>
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
                                            <div className='EditAllPortFoliosInputInput'>

                                            <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='decripation'
                                            value={editFormData.decripation}
                                            onChange={(e) => setEditFormData({ ...editFormData, decripation: e.target.value })}
                                            placeholder='Decripation...'
                                        />
                                            </div>
                                        </div>
                                        <div className='EditAllPortFoliosInput'>
                                            <div className='EditAllPortFoliosInputInput'>
                                            <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='andriod_link'
                                            value={editFormData.andriod_link}
                                            onChange={(e) => setEditFormData({ ...editFormData, andriod_link: e.target.value })}
                                            placeholder='Andriod Link...'
                                        />
                                            </div>
                                            <div className='EditAllPortFoliosInputInput'>
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
                                            Edit All PortFolios
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
                                    <th style={{ padding: "1rem 10rem" }}>Decripation</th>
                                    <th>Andriod Link</th>
                                    <th>IOS Link</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllPortFolios?.map((AllPortFoliosResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${AllPortFoliosResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{AllPortFoliosResult?.title}</td>
                                                <td>{AllPortFoliosResult?.decripation}</td>
                                                <td>{AllPortFoliosResult?.andriod_link}</td>
                                                <td>{AllPortFoliosResult?.ios_link}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => 
                                                        deleteAllPortFolios(AllPortFoliosResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetAllPortFoliosById(AllPortFoliosResult?._id);
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

export default AdminAllPortFolios