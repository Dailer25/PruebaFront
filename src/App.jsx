import Login from './component/Login'
import './App.css'
import { useState } from 'react'
import Register from './component/Register';


const App = () => {
  const [statusPage,setPage] =  useState(true);
  const aux = () =>{
    setPage(true)
  }
  return (
    <>
      {statusPage?
        <>
          <Login/>
          <button className='btn btn-block btn-danger mt-4' onClick={()=>setPage(false)}>Register</button>  
        </>
      :<>
          <Register />
        </>
      }

    </>
  )
}

export default App
