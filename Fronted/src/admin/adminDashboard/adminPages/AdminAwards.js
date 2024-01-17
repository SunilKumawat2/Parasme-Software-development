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
import {API_BASE_URL,IMG_BASE_URL} from '../../../config/ApiConfig';
const AdminAwards = () => {

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
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");

    // The useState Use for the All Awards Iamges Show 
    const [AwardImage, setAwardImage] = useState([]);

    // The useState Use for the All Awards Iamges Show By ID
    const [AwardImageById, setAwardImageById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetImagesAwards();
        GetAwardById(_id);
    }, [_id])

    // This Get Api Methods for the GetImages Award
    const GetImagesAwards = async () => {
        await axios.get(`${API_BASE_URL}/award/get`).then((response) => {
            setAwardImage(response.data.images);
        }).catch((error) => {
            console.log(error);
        })
    }

    //   This Post Api Methods for the Create Award
    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", images);
        formData.append("heading", heading);
        formData.append("paragraph", paragraph);
        axios.post(`${API_BASE_URL}/award/post`, formData).then((response => {
            console.log(response.data)
            GetImagesAwards();
            // Close the Offcanvas
            handleClose();
            setImages("");
            setHeading("");
            setParagraph("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Api Methods for the Delete Award
    const deleteSlider = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/award/delete/${_id}`);
            console.log(response.data);
            GetImagesAwards();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Data By ID
    const GetAwardById = async (_id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/award/getById/${_id}`);
            const responseData = response.data;

            if (responseData.status === 200) {
                setAwardImageById(responseData.data);
            } else {
                console.error(responseData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // This methods for the Update the Award
    const [editFormData, setEditFormData] = useState({
        images: "",
        heading: "",
        paragraph: "",
    });
//  This function use for the Edit the Awards
    const EditAward = async (_id) => {
        // Check if any changes are made
        if (editFormData.images || editFormData.heading || editFormData.paragraph) {
            const formData = new FormData();
            formData.append("images", editFormData.images);
            formData.append("heading", editFormData.heading);
            formData.append("paragraph", editFormData.paragraph);

            try {
                const response = await axios.put(`${API_BASE_URL}/award/update/${_id}`, formData);
                console.log(response.data);

                // After successfully editing, update the Awards data
                GetImagesAwards();
            } catch (error) {
                console.error(error);
            }
        }

        // Close the edit form or perform other actions
        handleCloseEdit();

        // Optionally, reset the state to initial values
        setEditFormData({
            images: "",
            heading: "",
            paragraph: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetAwardById(_id);
        GetImagesAwards();
        // Initialize edit form data if available
        if (AwardImageById) {
            setEditFormData({
                images: AwardImageById.images || "",
                heading: AwardImageById.heading || "",
                paragraph: AwardImageById.paragraph || "",
            });
        }
    }, [_id, AwardImageById]);
    

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
                                + Add Awards
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddAwardOffcanvas">
                                <Offcanvas.Header className='AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title>Add Award</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <input className='form-control mb-3' type="text" name='heading'
                                            value={heading}
                                            onChange={(e) => setHeading(e.target.value)}
                                            placeholder='Heading....' />
                                        <input className='form-control mb-3' type="text" name='paragraph'
                                            value={paragraph} onChange={(e) => setParagraph(e.target.value)}
                                            placeholder='Paragraph....' />
                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Awards</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Award Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} 
                             className="EditliderOffcanvas"
                                backdrop="static">
                                <Offcanvas.Header className='AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Award</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (AwardImageById && AwardImageById._id) {
                                                EditAward(AwardImageById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || AwardImageById?.images}`}
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
                                            name='heading'
                                            value={editFormData.heading}
                                            onChange={(e) =>
                                                 setEditFormData({ ...editFormData, heading: e.target.value })}
                                            placeholder='Heading...'
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='paragraph'
                                            value={editFormData.paragraph}
                                            onChange={(e) => setEditFormData({ ...editFormData, paragraph: e.target.value })}
                                            placeholder='Paragraph...'
                                        />
                                        <input
                                            className='form-control mb-3'
                                            type="file"
                                            name='images'
                                            onChange={(e) => setEditFormData({ ...editFormData,
                                                 images: e.target.files[0] })}
                                            placeholder='Slider Name'
                                        />
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Award
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
                                    <th>Heading</th>
                                    <th>Paragraph</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AwardImage?.map((SliderResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${SliderResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{SliderResult?.heading}</td>
                                                <td>{SliderResult?.paragraph}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px', margin: "auto"
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteSlider(SliderResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetAwardById(SliderResult?._id);
                                                        }}
                                                        style={{
                                                            cursor: "pointer", fontSize: '25px', margin: "auto"
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

export default AdminAwards