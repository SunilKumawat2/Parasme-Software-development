import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import AdminSideNav from '../sidenav/AdminSideNav';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import { AiFillEye } from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/ApiConfig';

const AdminEnquiry = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // The useState Use for the All Enquiry Show 
    const [Enquiry, setEnquiry] = useState([]);

    // The useState Use for the All Enquiry Show By ID
    const [EnquiryDetails, setEnquiryDetails] = useState({});
    const { _id } = useParams();
    useEffect(() => {
        GetEnquiry();
        GetEnquiryDetails();
    }, [_id])

    // This Get Methods for the Enquiry
    const GetEnquiry = async () => {
        await axios.get(`${API_BASE_URL}/mandatory/get`).then((response) => {
            setEnquiry(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    // This Get Methods for the Enquiry By Id
    const GetEnquiryDetails = async (_id) => {
        axios.get(`${API_BASE_URL}/mandatory/getById/${_id}`).then((response) => {
            setEnquiryDetails(response.data.data);
            handleShow();
        }).catch((error) => {
            console.log(error);
        })
    }

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
                            {/* This Offcanvas for the Add Enquiry Section here  */}
                            <Offcanvas show={show} onHide={handleClose} className="AddAwardOffcanvas">
                                <Offcanvas.Header className=' bg-primary text-white' closeButton>
                                    <Offcanvas.Title>Enquiry Details</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className='EnquiryFormDetails'>
                                        <div>
                                            <span className='p-2'>
                                                <strong>Name:</strong>
                                                </span><span>{EnquiryDetails?.name}</span>
                                        </div>
                                        <div>
                                            <span className='p-2'>
                                                <strong>Email:</strong></span><span>{EnquiryDetails?.email}</span>
                                        </div>
                                    </div>
                                    <div className='EnquiryFormDetails'>
                                        <div>
                                            <span className='p-2'>
                                                <strong>Phone:</strong></span><span>{EnquiryDetails?.phone}</span>
                                        </div>
                                        <div>
                                            <span className='p-2'>
                                                <strong>Budget:</strong></span><span>{EnquiryDetails?.budget}</span>
                                        </div>
                                    </div>
                                    <div className='EnquiryFormDetails'>
                                        <div>
                                            <span className='p-2'>
                                                <strong>message:</strong></span><span>{EnquiryDetails?.message}</span>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        {/*<-------------------- The the Enquiry Details-----------------> */}
                        <div>
                            <span><storng><h3>Enquiry Details</h3></storng></span>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Budget</th>
                                    <th>Message</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Enquiry?.map((EnquiryResult, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <td>{EnquiryResult?.name}</td>
                                                <td>{EnquiryResult?.email}</td>
                                                <td>{EnquiryResult?.phone}</td>
                                                <td>{EnquiryResult?.budget}</td>
                                                <td>{EnquiryResult?.message}</td>
                                                <td>
                                                    <AiFillEye variant="primary" onHide={handleClose}
                                                        className='mb-4' onClick={() => {
                                                            handleShow();
                                                            GetEnquiryDetails(EnquiryResult?._id);
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

export default AdminEnquiry