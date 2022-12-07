import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Userlist from "./Userlist";
import axios from "axios";


const Register =(props)=>{
    const endpo = 'http://127.0.0.1:8000/api/register'
    
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cellphone,setCell] = useState();
    

    const reg = async (e) =>{
        e.preventDefault()
        await axios.post(endpo,{name:name,lastname:lastname,email:email,password:password,cellphone:cellphone})
    }
 
    return(
        <>
            
            <Form onSubmit={reg}>
                <h1>Register</h1>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input className="form-control" value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <input className="form-control" value={lastname} type="text" placeholder="Last-Name" onChange={(e)=>setLastname(e.target.value)}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input className="form-control" value={email} type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <input className="form-control" value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <input className="form-control" value={cellphone} type="number" placeholder="CellPhone" onChange={(e)=>setCell(e.target.value)} />
                        </div>
                        <div className="col-4">
                        <button type="submit" className="btn btn-primary">Continue</button>
                        <a href="http://127.0.0.1:5173">Login</a>                
                    </div>
                </div>
            </Form>
        </>
    )
}
export default Register;


//id 39