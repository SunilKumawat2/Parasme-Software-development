import React, { useEffect } from 'react'
import "../adminLogin/AdminLogin.css";
import AdminLoginImages from "../../assets/images/adminLogin.png"
import { useState } from 'react';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {API_BASE_URL} from "../../config/ApiConfig"
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const HandleLogin = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/adminlogin/login`, {email,password}).then((response)=>{
            console.log(response.data.message)
            setEmail("")
            setPassword("")
            toast.success(response.data.message);
            navigate("/AdminDashBoard")
            localStorage.setItem("login", true)
        }).catch((err)=>{
            console.log(err)
            toast.error("Admin Login Failed");
        })
        console.log({email, password});
    }
    useEffect(()=>{
        let login = localStorage.getItem("login")
        if(login){
            navigate("/AdminDashBoard")
        }
    })
    return (
        <div className='AdminLoginPage col-md-8 ml-3'>
            <div className='col-md-6 text-center AdminLoginPageLeft'>
                <h1 className='AdminLoginPageLeftHeading'>Admin Login</h1>
                <form onSubmit={HandleLogin} method='post'>
                    <input type="text" value={email} name='email'
                     onChange={(e) => setEmail(e.target.value)}
                      className='form-control mt-4' placeholder="Enter Email" /> 
                     
                    <input type="password" value={password} name='password'
                     onChange={(e) => setPassword(e.target.value)} className='form-control mt-4'
                      placeholder="Enter Password" />
                    <div className='AdminLoginPageButton'>
                        <input type="submit" className='form-control btn btn-danger AdminLoginPageButton ' value="Login" />
                    </div>
                </form>
            </div>
            <div className='AdminLoginPageRight'>
                <img src={AdminLoginImages} style={{ width: "100%" }} alt="" />
            </div>

            {/* <a href="/">Back to Home</a>
        <a href="/admin">Back to Admin</a> */}
        </div>
    )
}

export default AdminLogin