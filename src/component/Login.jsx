import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Userlist from "./Userlist";
import axios from "axios";

const Login =()=>{
    const endpo = 'http://127.0.0.1:8000/api/login'
    const endpo2 = 'htto://127.0.0.1:8000/api/logout'
    const [statusFormc,setstatus] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const log = async (e) =>{
      e.preventDefault()
      await axios.post(endpo,{email:email,password:password})
    }
    const logout = async () =>{
      await axios.get(endpo2)
      setstatus(true)
    }

    return(
      <>
        {statusFormc?
          <Form onSubmit={log}>
            <div>
              <h1 className='row justify-content-center'>Login</h1>
            </div>
            <div className='row justify-content-center'>
              <div className='col-10'>
                <input className="form-control" value={email} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-10'>
                <input className="form-control" value={password} type="password" placeholder='*********' onChange={(e)=>setPass(e.target.value)}></input>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4'>
                <button type="submit" className='btn btn-block btn-danger mt-4' onClick={()=>setstatus()}>Send</button>
              </div>
            </div>
          </Form>
        :<>
            <div className="row justify-content-left">
              <div className="col-4">
                <button className="btn btn-primary" onClick={()=>logout()}>Log Out</button>
              </div>
            </div>
            <Userlist></Userlist>
        </>
      }
    </>
    )
}
export default Login