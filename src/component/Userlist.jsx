import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const Userlist = () =>{
    
    const endpo = 'http://127.0.0.1:8000/api/show'
    const [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async() =>{
        const response = await axios.get(endpo)
        setUsers(response.data)
    }
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>E-mail</th>
                                <th>Cell-Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=>(
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.celphone}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Userlist
