import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import AdminSideNav from '../sidenav/AdminSideNav';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { MdDelete } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/ApiConfig';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillEye } from 'react-icons/ai'

const AdminHelpingForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // The useState Use for the All HelpingForm Show 
    const [HelpingForm, setHelpingForm] = useState([]);

    // The useState Use for the All HelpingForm Show By ID
    const [HelpingFormById, setHelpingFormById] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetHelpingForm();
        GetHelpingFormById(_id);
    }, [_id])

    // This Get Api Methods for the HelpingForm
    const GetHelpingForm = async () => {
        await axios.get(`${API_BASE_URL}/HelpingForm/get`).then((response) => {
            setHelpingForm(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    // This Delete Api Methods for the Delete Slider
    const DeleteHelpingForm = async (_id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/HelpingForm/delete/${_id}`);
            console.log(response.data);
            GetHelpingForm();
        } catch (error) {
            console.error(error);
        }
    }

    // This Methods show the Data By ID
    const GetHelpingFormById = async (_id) => {
        await axios.get(`${API_BASE_URL}/HelpingForm/getById/${_id}`).then((response) => {
            setHelpingFormById(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log("Get HelpingFormGetById", HelpingFormById)
    useEffect(() => {
        // Fetch data for editing
        GetHelpingFormById(_id);
        GetHelpingForm();
        // Initialize edit form data if available
        if (HelpingFormById) {

        }
    }, [_id, HelpingFormById]);
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
                            {/* This Offcanvas for the Add HelpingForm Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="HelpingFormDetails">
                                <Offcanvas.Header className=' bg-primary text-white' closeButton>
                                    <Offcanvas.Title>HelpingForm Details</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className='HelpingFormDetailsDetailsMain'>
                                        <div className='HelpingFormDetailsDetails'>
                                            <div>
                                                <span className='p-2'><strong>Name:</strong></span>
                                                <span>{HelpingFormById?.name}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'><strong>Email:</strong></span>
                                                <span>{HelpingFormById?.email}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'><strong>Phone:</strong></span>
                                                <span>{HelpingFormById?.phone}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'>
                                                    <strong>OnlineAdvertising:</strong></span><span>{HelpingFormById?.OnlineAdvertising}</span>
                                            </div>
                                        </div>
                                        <div className='HelpingFormDetailsDetails'>
                                            <div>
                                                <span className='p-2'>
                                                    <strong>Country:</strong></span><span>{HelpingFormById?.country}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'><strong>Websitedesign:</strong></span>
                                                <span>{HelpingFormById?.Websitedesign}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'><strong>Company:</strong></span>
                                                <span>{HelpingFormById?.company}</span>
                                            </div>
                                            <div>
                                                <span className='p-2'><strong>MobileApp:</strong></span>
                                                <span>{HelpingFormById?.MobileApp}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='HelpingFormDetailsDetails'>
                                        <div>
                                            <span className='p-2'>
                                                <strong>Message:</strong></span><span>{HelpingFormById?.message}</span>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <div>
                            <span><strong className='mb-5'><h3>Helping Form Details</h3></strong></span>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th style={{ padding: "1rem 3rem" }}>Name</th>
                                    <th style={{ padding: "1rem 5rem" }}>Email</th>
                                    <th style={{ padding: "1rem 5rem" }}>Phone</th>
                                    <th style={{ padding: "1rem 5rem" }}>Company</th>
                                    <th>Country</th>
                                    <th style={{ padding: "1rem 10rem" }}>Message</th>
                                    <th>Websitedesign</th>
                                    <th>OnlineAdvertising</th>
                                    <th>MobileApp</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {HelpingForm?.map((HelpingFormResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <td>{HelpingFormResult?.name}</td>
                                                <td>{HelpingFormResult?.email}</td>
                                                <td>{HelpingFormResult?.phone}</td>
                                                <td>{HelpingFormResult?.company}</td>
                                                <td>{HelpingFormResult?.country}</td>
                                                <td>{HelpingFormResult?.message}</td>
                                                <td>{HelpingFormResult?.Websitedesign}</td>
                                                <td>{HelpingFormResult?.OnlineAdvertising}</td>
                                                <td>{HelpingFormResult?.MobileApp}</td>
                                                <td>
                                                    <MdDelete style={{
                                                        cursor: "pointer", fontSize: '25px'
                                                        , color: "red", margin: "10px auto"
                                                    }}
                                                        onClick={() =>
                                                            DeleteHelpingForm(HelpingFormResult?._id)} />
                                                </td>
                                                <td>
                                                    <AiFillEye variant="primary" onHide={handleClose}
                                                        className='mb-4' onClick={() => {
                                                            handleShow();
                                                            GetHelpingFormById(HelpingFormResult?._id);
                                                        }} style={{
                                                            cursor: "pointer", fontSize: '25px'
                                                            , color: "green", margin: "10px auto"
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

export default AdminHelpingForm