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
import { API_BASE_URL} from '../../../config/ApiConfig';
import 'react-quill/dist/quill.snow.css';

const AdminSocialMediaLink = () => {
    // This Offcanvas for the Add Social Media Link 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // This Offcanvas for the Edit Social Media Link
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // This Usestate use for the Add The Social Media Data 
    const [facebook_link, setFacebook_link] = useState("");
    const [tiwtter_link, setTiwtter_link] = useState("");
    const [instagram_link, setInstagram_link] = useState("");
    const [youtube_link, setYoutube_link] = useState("");
    const [linkdin_link, setLinkdin_link] = useState("");
    const [behance_link, setBehance_link] = useState("");
    // The useState Use for the All SocialMedia Iamges Show 
    const [SocialMedia, setSocialMedia] = useState([]);

    // The useState Use for the All SocialMedia Iamges Show By ID
    const [SocialMediaById, setSocialMediaById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetSocialMedia();
        GetSocialMediaById(_id);
    }, [_id])

    // This Get Api Methods for the Get Social Media Link
    const GetSocialMedia = async () => {
        await axios.get(`${API_BASE_URL}/socialmedia/get`).then((response) => {
            setSocialMedia(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    //   This Post Api Methods for the Create Social Media Link
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/socialmedia/post`, {
            facebook_link,
            tiwtter_link,
            instagram_link,
            youtube_link,
            linkdin_link,
            behance_link
        }).then((response => {
            console.log(response.data)
            GetSocialMedia();
            // Close the Offcanvas
            handleClose();
            setFacebook_link("");
            setTiwtter_link("");
            setInstagram_link("");
            setYoutube_link("");
            setLinkdin_link("");
            setBehance_link("");
        })
        ).catch((error) => {
            console.log(error);
        })

    }

    // This Delete Api Methods for the Delete Social Media Link
    const deleteSocialMedia = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/socialmedia/delete/${_id}`);
            console.log(response.data);
            GetSocialMedia();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Social Media Link By ID
    const GetSocialMediaById = async (_id) => {
        await axios.get(`${API_BASE_URL}/socialmedia/getById/${_id}`).then((response) => {
            setSocialMediaById(response.data.data)
        }).catch((error) => {
            console.log(error);

        }
        )
    }
    // This methods for the Update the Social Media
    const [editFormData, setEditFormData] = useState({
        facebook_link: "",
        tiwtter_link: "",
        instagram_link: "",
        youtube_link: "",
        linkdin_link: "",
        behance_link: "",
    });
    //  This function use for the Edit the Social Media Link
    const EditSocialMedia = async (_id) => {
        // Check if any changes are made
        if (editFormData.facebook_link
            || editFormData.tiwtter_link
            || editFormData.instagram_link
            || editFormData.youtube_link || editFormData.linkdin_link || editFormData.behance_link) {
            try {
                const response = await axios.put(`${API_BASE_URL}/socialmedia/update/${_id}`, editFormData);
                console.log(response.data);

                // After successfully editing, update the Social Media Link data
                GetSocialMedia();
            } catch (error) {
                console.error(error);
            }
        }

        // Close the edit form or perform other actions
        handleCloseEdit();
        // Optionally, reset the state to initial values
        setEditFormData({
            facebook_link: "",
            tiwtter_link: "",
            instagram_link: "",
            youtube_link: "",
            linkdin_link: "",
            behance_link: "",
        });
    };
    useEffect(() => {
        // Fetch data for editing
        GetSocialMediaById(_id);
        GetSocialMedia();
        // Initialize edit form data if available
        if (SocialMediaById) {
            setEditFormData({
                facebook_link: SocialMediaById.facebook_link || "",
                tiwtter_link: SocialMediaById.tiwtter_link || "",
                instagram_link: SocialMediaById.instagram_link || "",
                youtube_link: SocialMediaById.youtube_link || "",
                linkdin_link: SocialMediaById.linkdin_link || "",
                behance_link: SocialMediaById.behance_link || "",
            });
        }
    }, [_id, SocialMediaById]);
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
                                + Social Media
                            </Button>
                            {/* This Offcanvas for the Add Social Media Link Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddSEOSection">
                                <Offcanvas.Header className='AdminOffcanvas' closeButton>
                                    <Offcanvas.Title>Add Social Media</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form onSubmit={HandleSubmit} method='post'
                                        encType='multipart/form-data'
                                        className='mb-3'>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3' type="text"
                                                    name='facebook_link'
                                                    value={facebook_link}
                                                    onChange={(e) => setFacebook_link(e.target.value)}
                                                    placeholder='FaceBook link....' />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3'
                                                    type="text" name='tiwtter_link'
                                                    value={tiwtter_link}
                                                    onChange={(e) => setTiwtter_link(e.target.value)}
                                                    placeholder='Tiwtter Link....' />
                                            </div>
                                        </div>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3'
                                                    type="text" name='instagram_link'
                                                    value={instagram_link}
                                                    onChange={(e) => setInstagram_link(e.target.value)}
                                                    placeholder='Instagram Link....' />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <input className='form-control mb-3'
                                                    type="text" name='youtube_link'
                                                    value={youtube_link}
                                                    onChange={(e) => setYoutube_link(e.target.value)}
                                                    placeholder='Youtube Link....' />
                                            </div>
                                        </div>
                                        <input className='form-control mb-3'
                                            type="text" name='linkdin_link'
                                            value={linkdin_link}
                                            onChange={(e) => setLinkdin_link(e.target.value)}
                                            placeholder='Linkdin Link....' />

                                        <input className='form-control mb-3'
                                            type="text" name='behance_link'
                                            value={behance_link}
                                            onChange={(e) => setBehance_link(e.target.value)}
                                            placeholder='Behance Link....' />

                                        <button className='btn btn AdminUploads mt-5' onHide={handleClose}
                                            type='submit'>Social Media</button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>
                            {/* This OffCanvas for the Edit Social Media Link Section here  */}
                            <Offcanvas show={showEdit} onHide={handleCloseEdit} className="EditSEOSection"
                                backdrop="static">
                                <Offcanvas.Header className='bg AdminOffcanvas text-white' closeButton>
                                    <Offcanvas.Title >Edit Social Media</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (SocialMediaById && SocialMediaById?._id) {
                                                EditSocialMedia(SocialMediaById?._id);
                                            } else {
                                                console.error("Missing _id");
                                            }
                                        }}
                                        method='post'
                                        encType='multipart/form-data'
                                        className='mb-3'
                                    >
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='facebook_link'
                                                    value={editFormData?.facebook_link}
                                                    onChange={(e) =>
                                                        setEditFormData({ ...editFormData, facebook_link: e.target.value })}
                                                    placeholder='FaceBook Link...'
                                                />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='tiwtter_link'
                                                    value={editFormData.tiwtter_link}
                                                    onChange={(e) => setEditFormData({ ...editFormData, tiwtter_link: e.target.value })}
                                                    placeholder='Tiwtter Link...'
                                                />
                                            </div>
                                        </div>
                                        <div className='AllPortFoliosInput'>
                                            <div className='AllPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='instagram_link'
                                                    value={editFormData.instagram_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        instagram_link: e.target.value
                                                    })}
                                                    placeholder='Instagram Link...'
                                                />
                                            </div>
                                            <div className='AllPortFoliosInputInput'>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='youtube_link'
                                                    value={editFormData.youtube_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        youtube_link: e.target.value
                                                    })}
                                                    placeholder='Youtube Link...'
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='linkdin_link'
                                                    value={editFormData.linkdin_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        linkdin_link: e.target.value
                                                    })}
                                                    placeholder='linkdin Link...'
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className='form-control mb-3'
                                                    type="text"
                                                    name='behance_link'
                                                    value={editFormData.behance_link}
                                                    onChange={(e) => setEditFormData({
                                                        ...editFormData,
                                                        behance_link: e.target.value
                                                    })}
                                                    placeholder='Behance Link...'
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className='btn btn AdminButton mt-3'
                                            onClick={handleCloseEdit}
                                            type='submit'
                                        >
                                            Edit Social Media
                                        </button>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Facebook</th>
                                    <th>Twitter</th>
                                    <th style={{ padding: "1rem 5rem" }}>Instagram</th>
                                    <th style={{ padding: "1rem 5rem" }}>Linkdin</th>
                                    <th style={{ padding: "1rem 5rem" }}>Youtube</th>
                                    <th style={{ padding: "1rem 5rem" }}>Behance</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SocialMedia?.map((SocialMediaResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <td>{SocialMediaResult?.facebook_link}</td>
                                                <td>{SocialMediaResult?.tiwtter_link}</td>
                                                <td>{SocialMediaResult?.instagram_link}</td>
                                                <td>{SocialMediaResult?.linkdin_link}</td>
                                                <td>{SocialMediaResult?.youtube_link}</td>
                                                <td>{SocialMediaResult?.behance_link}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() => deleteSocialMedia(SocialMediaResult?._id)} /></td>
                                                <td>
                                                    <LiaEdit variant="primary" onHide={handleCloseEdit}
                                                        className='mb-4'
                                                        onClick={() => {
                                                            handleShowEdit();
                                                            GetSocialMediaById(SocialMediaResult?._id);
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

export default AdminSocialMediaLink