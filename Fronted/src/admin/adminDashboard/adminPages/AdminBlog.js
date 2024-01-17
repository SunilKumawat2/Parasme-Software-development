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

const AdminBlog = () => {
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
     const [content, setContent] = useState("");
 
     // The useState Use for the All Awards Iamges Show 
     const [WebPortFolios, setWebPortFolios] = useState([]);
 
     // The useState Use for the All Awards Iamges Show By ID
     const [WebPortFoliosById, setWebPortFoliosById] = useState({});
     const { _id } = useParams();
     useEffect(() => {
         GetBlog();
         GetBlodDetails(_id);
     }, [_id])
 
     // This Get Api Methods for the GetImages Slider
     const GetBlog = async () => {
         await axios.get(`${API_BASE_URL}/Blog/get`).then((response) => {
             setWebPortFolios(response.data.data);
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
         formData.append("content", content);
         axios.post(`${API_BASE_URL}/Blog/post`, formData).then((response => {
             console.log(response.data.data)
             GetBlog();
             // Close the Offcanvas
             handleClose();
             setImages("");
             setTitle("");
             setContent("");
         })
         ).catch((error) => {
             console.log(error);
         })
 
     }
 
     // This Delete Api Methods for the Delete Slider
     const DeleteBlodDetails = async (_id) => {
         try {
             const response = await axios.delete(`${API_BASE_URL}/Blog/delete/${_id}`);
             console.log(response.data);
             GetBlog();
         } catch (error) {
             console.error(error);
         }
     }
 
     // This Methods show the Data By ID
     const GetBlodDetails = async (_id) => {
         await axios.get(`${API_BASE_URL}/Blog/getBlogDetails/${_id}`).then((response) => {
             setWebPortFoliosById(response.data.data);
         }).catch((error)=>{
             console.log(error)
         })
     }
 
     // This methods for the Update the Slider
     const [editFormData, setEditFormData] = useState({
         title: "",
         content: "",
         images: "",
     });
     //  This function use for the Edit the Awards
     const EditWebPortFolios = async (_id) => {
         // Check if any changes are made
         if (editFormData.images || editFormData.title || 
            editFormData.content ) {
             const formData = new FormData();
             formData.append("images", editFormData.images);
             formData.append("title", editFormData.title);
             formData.append("content", editFormData.content);
 
             try {
                 const response = await axios.put(`${API_BASE_URL}/Blog/update/${_id}`, formData);
                 console.log(response.data);
 
                 // After successfully editing, update the Awards data
                 GetBlog();
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
             content: "",
         });
     };
     useEffect(() => {
         // Fetch data for editing
         GetBlodDetails(_id);
         GetBlog();
         // Initialize edit form data if available
         if (WebPortFoliosById) {
             setEditFormData({
                 images: WebPortFoliosById.images || "",
                 title: WebPortFoliosById.title || "",
                 content: WebPortFoliosById.content || "",
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
                            <Button  onHide={handleClose}
                                className='mb-4 AdminButton' onClick={handleShow}>
                                + Add Blog
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddWebPortFolios">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Blog</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <div className='WebPortFoliosInput'>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='title'
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder='Title....' />
                                            </div>
                                            <div className='WebPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='content'
                                                    value={content}
                                                    onChange={(e) => setContent(e.target.value)}
                                                    placeholder='Content....' />
                                            </div>
                                        </div>
                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Blog</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Award Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditWebPortFolios"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Blog</Offcanvas.Title>
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
                                            name='title'
                                            value={editFormData.title}
                                            onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                                            placeholder='Title...'
                                        />
                                            </div> 
                                            <div className='EditWebPortFoliosInputInput'>
                                            <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='content'
                                            value={editFormData.content}
                                            onChange={(e) => setEditFormData({ ...editFormData, content: e.target.value })}
                                            placeholder='Content...'
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
                                            Edit Blog
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
                                    <th style={{ padding: "1rem 3rem" }}>Title</th>
                                    <th style={{ padding: "1rem 6rem" }}>Content</th>
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
                                                <td>{WebPortFoliosResult?.title}</td>
                                                <td>{WebPortFoliosResult?.content}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px', margin: "auto"
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => DeleteBlodDetails(WebPortFoliosResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetBlodDetails(WebPortFoliosResult?._id);
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

export default AdminBlog