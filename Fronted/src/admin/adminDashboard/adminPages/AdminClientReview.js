import React, { useState, useEffect } from 'react'
import AdminSideNav from '../sidenav/AdminSideNav';
import "../adminPages/AdminPages.css";
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { API_BASE_URL } from '../../../config/ApiConfig';
import { MdDelete } from 'react-icons/md'
import { LiaEdit } from 'react-icons/lia'
import { useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../../../config/ApiConfig';

const AdminClientReview = () => {
    // This Offcanvas for the Add Client Review 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Client Review
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Client Review Data 
    const [name, setName] = useState("");
    const [technology, setTechnology] = useState("");
    const [paragraph, setParagraph] = useState("");

    // The useState Use for the All Client Review Show 
    const [ClientReview, setClientReview] = useState([]);

    // The useState Use for the Client Review Show By ID
    const [ClientReviewById, setClientReviewById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetClientReview();
        GetClientById(_id);
    }, [_id])

    // This Get Api Methods for the Client Review
    const GetClientReview = async () => {
        await axios.get(`${API_BASE_URL}/client/get`).then((response) => {
            setClientReview(response.data.clients);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Methods for the Client Review
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/client/post`, { name, technology, paragraph }).then((response) => {
            console.log(response.data)
            handleClose();
            GetClientReview();
        }).catch((error => {
            console.log(error)
        }))
    }
    
    //   This Delete Methods for the Client Review
    const deleteReview = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/client/delete/${_id}`);
            console.log("deleteReview", response.data);
            GetClientReview();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Client Review By ID
    const GetClientById = async (_id) => {
        await axios.get(`${API_BASE_URL}/client/getById/${_id}`).then((response) => {
            setClientReviewById(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    // This methods for the Update the Client Review
    const [editFormData, setEditFormData] = useState({
        name: "",
        technology: "",
        paragraph: "",
    });
    //  This function use for the Edit the Client Review
    const EditAward = async (_id) => {
        // Check if any changes are made
        if (editFormData.name || editFormData.technology || editFormData.paragraph) {
            try {
                const response = await axios.put(`${API_BASE_URL}/client/update/${_id}`, editFormData);
                console.log(response.data);
                // After successfully editing, update the Client Review data
                GetClientReview();
            } catch (error) {
                console.error(error);
            }
        }
        // Close the edit form or perform other actions
        handleCloseEdit();
        // Optionally, reset the state to initial values
        setEditFormData({
            name: "",
            technology: "",
            paragraph: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetClientById(_id);
        GetClientReview();
        // Initialize edit form data if available
        if (ClientReviewById) {
            setEditFormData({
                name: ClientReviewById.name || "",
                technology: ClientReviewById.technology || "",
                paragraph: ClientReviewById.paragraph || "",
            });
        }
    }, [_id, ClientReviewById]);
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <AdminSideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ marginTop: "70px", marginLeft: "30px" }}>
                    <div>
                        <div>
                            <Button  onHide={handleClose}
                                className='mb-4 AdminButton' onClick={handleShow}>
                                + Add Client Review
                            </Button>
                            {/* This Offcanvas for the Add Client Review  Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddAwardOffcanvas">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Client Review </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="text" name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Name....' />
                                        <input className='form-control mb-3' type="text" name='technology'
                                            value={technology} onChange={(e) => setTechnology(e.target.value)}
                                            placeholder='Technology....' />
                                        <input className='form-control mb-3' type="text" name='paragraph'
                                            value={paragraph}
                                            onChange={(e) => setParagraph(e.target.value)}
                                            placeholder='paragraph...' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Client Review </button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Client Review  Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditliderOffcanvas"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Client Review </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (ClientReviewById && ClientReviewById._id) {
                                                EditAward(ClientReviewById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || ClientReviewById?.images}`}
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
                                            name='technology'
                                            value={editFormData.technology}
                                            onChange={(e) => setEditFormData({ ...editFormData,
                                                 technology: e.target.value })}
                                            placeholder='Technology...'
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='name'
                                            value={editFormData.name}
                                            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                                            placeholder='Name...'
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='paragraph'
                                            value={editFormData.paragraph}
                                            onChange={(e) => setEditFormData({ ...editFormData, paragraph: e.target.value })}
                                            placeholder='Paragraph...'
                                        />
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Client Review
                                        </button>
                                    </form>

                                </Offcanvas.Body>
                            </Offcanvas>

                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th >client Name</th>
                                    <th>Technology</th>
                                    <th>Paragraph</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ClientReview?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <td>{SliderResult?.name}</td>
                                                <td>{SliderResult?.technology}</td>
                                                <td>{SliderResult?.paragraph}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteReview(SliderResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetClientById(SliderResult?._id);
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

export default AdminClientReview