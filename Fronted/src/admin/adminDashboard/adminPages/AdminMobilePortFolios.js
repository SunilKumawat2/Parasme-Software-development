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
import "../adminPages/AdminPages.css"

const AdminMobilePortFolios = () => {
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
      const [description, setDescription] = useState("");
      const [ andriod_link, setAndriod_link] = useState("");
      const [ios_link, setIos_link] = useState("");
  
      // The useState Use for the All Awards Iamges Show 
      const [MobilePortFolios, setMobilePortFolios] = useState([]);
  
      // The useState Use for the All Awards Iamges Show By ID
      const [MobilePortFoliosById, setMobilePortFoliosById] = useState({});
      const { _id } = useParams();
      useEffect(() => {
          GetMobilePortFolios();
          GetMobilePortFoliosById(_id);
      }, [_id])
  
      // This Get Api Methods for the GetImages Slider
      const GetMobilePortFolios = async () => {
          await axios.get(`${API_BASE_URL}/MobilePortFolios/get`).then((response) => {
              setMobilePortFolios(response.data.data);
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
          formData.append("description", description);
          formData.append("andriod_link", andriod_link);
          formData.append("ios_link", ios_link);
          axios.post(`${API_BASE_URL}/MobilePortFolios/post`, formData).then((response => {
              console.log(response.data)
              GetMobilePortFolios();
              // Close the Offcanvas
              handleClose();
              setImages("");
              setTitle("");
              setDescription("");
              setAndriod_link("");
              setIos_link("");
          })
          ).catch((error) => {
              console.log(error);
          })
  
      }
  
      // This Delete Api Methods for the Delete Slider
      const DeleteMobilePortFolios = async (_id) => {
          try {
              const response = await axios.delete(`${API_BASE_URL}/MobilePortFolios/delete/${_id}`);
              console.log(response.data);
              GetMobilePortFolios();
          } catch (error) {
              console.error(error);
          }
      }
  
      // This Methods show the Data By ID
      const GetMobilePortFoliosById = async (_id) => {
          await axios.get(`${API_BASE_URL}/MobilePortFolios/getById/${_id}`).then((response) => {
              setMobilePortFoliosById(response.data.data);
          }).catch((error)=>{
              console.log(error)
          })
      }
  
      // This methods for the Update the Slider
      const [editFormData, setEditFormData] = useState({
          title: "",
          description: "",
          andriod_link: "",
          ios_link: "",
          images: "",
      });
      //  This function use for the Edit the Awards
      const EditMobilePortFolios = async (_id) => {
          // Check if any changes are made
          if (editFormData.images || editFormData.title || editFormData.description || editFormData.andriod_link || editFormData.ios_link) {
              const formData = new FormData();
              formData.append("images", editFormData.images);
              formData.append("title", editFormData.title);
              formData.append("description", editFormData.description);
              formData.append("andriod_link", editFormData.andriod_link);
              formData.append("ios_link", editFormData.ios_link);
  
              try {
                  const response = await axios.put(`${API_BASE_URL}/MobilePortFolios/update/${_id}`, formData);
                  console.log(response.data);
  
                  // After successfully editing, update the Awards data
                  GetMobilePortFolios();
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
          GetMobilePortFoliosById(_id);
          GetMobilePortFolios();
          // Initialize edit form data if available
          if (MobilePortFoliosById) {
              setEditFormData({
                  images: MobilePortFoliosById.images || "",
                  title: MobilePortFoliosById.title || "",
                  description: MobilePortFoliosById.description || "",
                  andriod_link: MobilePortFoliosById.andriod_link || "",
                  ios_link: MobilePortFoliosById.ios_link || "",
              });
          }
      }, [_id, MobilePortFoliosById]);
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
                                + Add Mobile PortFolios
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddMobilePortFolios">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Mobile PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post' encType='multipart/form-data'
                                        className='mb-3'>
                                        <div className='MobilePortFoliosInput'>
                                            <div className='MobilePortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='title'
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder='Title....' />
                                            </div>
                                            <div className='MobilePortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='description'
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder='Description....' />
                                            </div>
                                        </div>

                                        <div className='MobilePortFoliosInput'>
                                            <div className='MobilePortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='andriod_link'
                                                    value={andriod_link}
                                                    onChange={(e) => setAndriod_link(e.target.value)}
                                                    placeholder='Andriod Link....' />
                                            </div>
                                            <div className='MobilePortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text" name='ios_link'
                                                    value={ios_link} onChange={(e) => setIos_link(e.target.value)}
                                                    placeholder='IOS Link....' />
                                            </div>
                                        </div>

                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <button className='btn btn AdminUploads mt-3' onHide={handleClose}
                                            type='submit'>Upload Mobile PortFolios</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit Award Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditMobilePortFolios"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Mobile PortFolios</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (MobilePortFoliosById && MobilePortFoliosById._id) {
                                                EditMobilePortFolios(MobilePortFoliosById._id);
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
                                                src={`${IMG_BASE_URL}${editFormData.images || MobilePortFoliosById?.images}`}
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
                                        <div className='EditMobilePortFoliosInput'>
                                           <div className='EditMobilePortFoliosInputInput'>
                                           <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='title'
                                            value={editFormData.title}
                                            onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                                            placeholder='Title...'
                                        />
                                            </div> 
                                            <div className='EditMobilePortFoliosInputInput'>
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
                                        <div className='EditMobilePortFoliosInput'>
                                           <div className='EditMobilePortFoliosInputInput'>
                                           <input
                                            className='form-control mb-3'
                                            type="text"
                                            name='andriod_link'
                                            value={editFormData.andriod_link}
                                            onChange={(e) => setEditFormData({ ...editFormData, andriod_link: e.target.value })}
                                            placeholder='Andriod Link...'
                                        />
                                            </div> 
                                            <div className='EditMobilePortFoliosInputInput'>
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
                                            Edit Mobile Portfolio
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
                                    <th style={{ padding: "1rem 10rem" }}>Description</th>
                                    <th>Android Link</th>
                                    <th>IOS Link</th>
                                    <th>Edit</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MobilePortFolios?.map((MobilePortFoliosResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${MobilePortFoliosResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{MobilePortFoliosResult?.title}</td>
                                                <td>{MobilePortFoliosResult?.description}</td>
                                                <td>{MobilePortFoliosResult?.andriod_link}</td>
                                                <td>{MobilePortFoliosResult?.ios_link}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => DeleteMobilePortFolios(MobilePortFoliosResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetMobilePortFoliosById(MobilePortFoliosResult?._id);
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

export default AdminMobilePortFolios