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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminOurServicesEcommerce = () => {
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
          const [sub_title, setSub_Title] = useState("");
          const [sub_description, setSub_Description] = useState("");
          const [about_page, setAbout_Page] = useState('');
      
          // The useState Use for the All Awards Iamges Show 
          const [OurServicesEcommerce, setOurServicesEcommerce] = useState([]);
      
          // The useState Use for the All Awards Iamges Show By ID
          const [OurServicesEcommerceById, setOurServicesEcommerceById] = useState({});
          const { _id } = useParams();
          useEffect(() => {
              GetOurServicesEcommerce();
              GetOurServicesEcommerceById(_id);
          }, [_id])
      
          // This Get Api Methods for the GetImages Slider
          const GetOurServicesEcommerce = async () => {
              await axios.get(`${API_BASE_URL}/OurServicesEcommerce/get`).then((response) => {
                  setOurServicesEcommerce(response.data.data);
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
              formData.append("sub_title", sub_title);
              formData.append("sub_description", sub_description);
              formData.append("about_page", about_page);
              axios.post(`${API_BASE_URL}/OurServicesEcommerce/post`, formData).then((response => {
                  console.log(response.data)
                  GetOurServicesEcommerce();
                  // Close the Offcanvas
                  handleClose();
                  setImages("");
                  setTitle("");
                  setDescription("");
                  setSub_Description("");
                  setSub_Title("");
                  setAbout_Page("");
              })
              ).catch((error) => {
                  console.log(error);
              })
      
          }
      
          // This Delete Api Methods for the Delete Slider
          const deleteSEOS = async (_id) => {
              try {
                  const response = await axios.delete(`${API_BASE_URL}/OurServicesEcommerce/delete/${_id}`);
                  console.log(response.data);
                  GetOurServicesEcommerce();
              } catch (error) {
                  console.error(error);
              }
          }
      
          // This Methods show the Data By ID
          const GetOurServicesEcommerceById = async (_id) => {
             await axios.get(`${API_BASE_URL}/OurServicesEcommerce/getById/${_id}`).then((response) => {
                  setOurServicesEcommerceById(response.data.data)
              }).catch((error) => {
                  console.log(error);
      
              }
              )
          }
      
          // This methods for the Update the OurServicesEcommerce
          const [editFormData, setEditFormData] = useState({
              images: "",
              title: "",
              description: "",
              sub_description: "",
              sub_title: "",
              about_page: "",
          });
          //  This function use for the Edit the Awards
          const EditOurServicesEcommerce = async (_id) => {
              // Check if any changes are made
              if (editFormData.images || editFormData.title || editFormData.description
                  || editFormData.sub_description || editFormData.about_page || editFormData.sub_title) {
                  const formData = new FormData();
                  formData.append("images", editFormData.images);
                  formData.append("title", editFormData.title);
                  formData.append("description", editFormData.description);
                  formData.append("sub_title", editFormData.sub_title);
                  formData.append("sub_description", editFormData.sub_description);
                  formData.append("about_page", editFormData.about_page);
      
                  try {
                      const response = await axios.put(`${API_BASE_URL}/OurServicesEcommerce/update/${_id}`, formData);
                      console.log(response.data);
      
                      // After successfully editing, update the Awards data
                      GetOurServicesEcommerce();
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
                  sub_description: "",
                  sub_title: "",
                  about_page: "",
              });
          };
          useEffect(() => {
              // Fetch data for editing
              GetOurServicesEcommerceById(_id);
              GetOurServicesEcommerce();
              // Initialize edit form data if available
              if (OurServicesEcommerceById) {
                  setEditFormData({
                      images: OurServicesEcommerceById.images || "",
                      title: OurServicesEcommerceById.title || "",
                      description: OurServicesEcommerceById.description || "",
                      sub_description: OurServicesEcommerceById.sub_description || "",
                      sub_title: OurServicesEcommerceById.sub_title || "",
                      about_page: OurServicesEcommerceById.about_page || "",
                  });
              }
          }, [_id, OurServicesEcommerceById]);
      
      
      
          const handleEditorChange = (content) => {
           setEditFormData((prevFormData) => ({
               ...prevFormData,
               about_page: content,
           }));
       };
       const handleAddEditorChange = (content) => {
           setAbout_Page(content);
         };
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
                                + Add our E-Commerce
                            </Button>
                            {/* This Offcanvas for the Add Award Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSEOSection">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add our Services E-Commerce</Offcanvas.Title>
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
                                                <input className='form-control mb-3' type="text"
                                                    name='sub_title'
                                                    value={sub_title}
                                                    onChange={(e) => setSub_Title(e.target.value)}
                                                    placeholder='Sub Title....' />
                                            </div>

                                        </div>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <textarea className='form-control mb-3'
                                                    type="text" name='description'
                                                    value={description} onChange={(e) => setDescription(e.target.value)}
                                                    placeholder='Description....' />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <textarea className='form-control mb-3' type="text"
                                                    name='sub_description'
                                                    value={sub_description}
                                                    onChange={(e) => setSub_Description(e.target.value)}
                                                    placeholder='Sub Description....' />
                                            </div>

                                        </div>
                                        <input className='form-control mb-3' type="file" name='images'
                                            onChange={(e) => setImages(e.target.files[0])}
                                            placeholder='Slider Name' />
                                        <div >
                                            <label>About Page:</label>
                                            <ReactQuill className="aboutPageEditorContainer" value={about_page}
                                                onChange={handleAddEditorChange} />
                                        </div>


                                        <button className='btn btn AdminUploads mt-5' onHide={handleClose}
                                            type='submit'>Upload our E-Commerce</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>

                            {/* This OffCanvas for the Edit All PortFolios Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditSEOSection"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit our Services E-Commerce</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (OurServicesEcommerceById && OurServicesEcommerceById._id) {
                                                EditOurServicesEcommerce(OurServicesEcommerceById._id);
                                            } else {
                                                console.error("Missing _id");
                                            }
                                        }}
                                        method='post'
                                        encType='multipart/form-data'
                                        className='mb-3'
                                    >
                                        {/* Display existing image or other data here */}
                                        <div className='EditAllPortFoliosInput'>
                                            <div className='EditAllPortFoliosInputInput'>
                                                <img
                                                    src={`${IMG_BASE_URL}${editFormData.images || OurServicesEcommerceById?.images}`}
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
                                                        placeholder='Title....'
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
                                                            placeholder='Description....'
                                                        />
                                                    </div>
                                                    <input
                                                        className='form-control mb-3'
                                                        type="text"
                                                        name='sub_title'
                                                        value={editFormData?.sub_title}
                                                        onChange={(e) =>
                                                            setEditFormData({ ...editFormData, sub_title: e.target.value })}
                                                        placeholder='Sub Title....'
                                                    />
                                                </div>
                                            </div>
                                            <div className='EditAllPortFoliosInputInput'>
                                                <div>
                                                    <input
                                                        className='form-control mb-3'
                                                        type="text"
                                                        name='sub_title'
                                                        value={editFormData.sub_title}
                                                        onChange={(e) => setEditFormData({ ...editFormData, sub_title: e.target.value })}
                                                        placeholder='Sub Title....'
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className='form-control mb-3'
                                                        type="text"
                                                        name='sub_description'
                                                        value={editFormData.sub_description}
                                                        onChange={(e) => setEditFormData({ ...editFormData, sub_description: e.target.value })}
                                                        placeholder='Sub Description...'
                                                    />
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
                                                <div>
                                                    <label>About Page:</label>
                                                    <ReactQuill
                                                        className="aboutPageEditorContainer"
                                                        value={editFormData.about_page}
                                                        onChange={(content) => handleEditorChange(content)}
                                                    />


                                                </div>

                                            </div>
                                        </div>

                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit E-Commerce
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
                                    <th style={{ padding: "1rem 5rem" }}>Sub Title</th>
                                    <th style={{ padding: "1rem 7rem" }}>Sub Desripation</th>
                                    <th style={{ padding: "1rem 5rem" }}>About Page</th>
                                    <th>Delete</th>
                                    <th>Edit</th>   
                                </tr>
                            </thead>
                            <tbody>
                                {OurServicesEcommerce?.map((OurServicesEcommerceResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <img src={`${IMG_BASE_URL}${OurServicesEcommerceResult?.images}`}
                                                    alt='' style={{ width: "100px", height: "70px" }} />
                                                <td>{OurServicesEcommerceResult?.title}</td>
                                                <td>{OurServicesEcommerceResult?.description?.slice(0, 70)}...</td>
                                                <td>{OurServicesEcommerceResult?.sub_title}</td>
                                                <td>{OurServicesEcommerceResult?.sub_description?.slice(0, 50)}...</td>
                                                <td dangerouslySetInnerHTML={{ __html: `${OurServicesEcommerceResult?.about_page?.slice(0, 50)}...` }} />
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteSEOS(OurServicesEcommerceResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetOurServicesEcommerceById(OurServicesEcommerceResult?._id);
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

export default AdminOurServicesEcommerce