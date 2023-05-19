import React from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import "./maincust.css"
//eslint-disable-next-line
import  { useEffect,useState } from 'react'
import axios from 'axios'
//eslint-disable-next-line
import { Link, useNavigate } from 'react-router-dom';
function Services() {
  const [UserName,setUserName] = useState("")
  const [Description ,setDescription] = useState("")
  const [Expirydate,setExpriydate] = useState("")
  const [Remainderduration , setRemainderduration] = useState("")
  const [regdate, setRegdate] = useState("")
  const [Email,setEmail] = useState("")
  
  const navigate = useNavigate();


  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8081/services",{UserName,Email,Description,Expirydate,Remainderduration,regdate})
    .then(res => {
        console.log(res)
        navigate('/Dashboard')
    }).catch(err => console.log(err))
}

  return (
    <div className='main'>
      <div className='Sidebar'>
        <Sidebar />
    </div>
    <div>
        <form onSubmit={handleSubmit}>
                    <div className='side'>
                    <div>
                    <div className='suser'>
                    <label>Username <span className='coluuser'>:</span> </label>
                    <input type='text' placeholder='Enter The Username' className='iusername' 
                    onChange={e => setUserName(e.target.value)} required></input>
                    </div>

                    <div className='sser'>
                    <label>Email<span className='collemail'>:</span> </label>
                    <input type='email' placeholder='Enter Your Email' className='iser' 
                    onChange={e => setEmail(e.target.value)} required></input>
                    </div>

                    <div className='sdesc'>
                    <label>Service Name <span className='coldesc'>:</span> </label>
                    <input type='text' placeholder='Enter Your Description' className='idesc' 
                    onChange={e => setDescription(e.target.value)} required></input>
                    </div>

                    <div className='sser'>
                    <label>Registration Date<span className='colserd'>:</span> </label>
                    <input type='date' placeholder='Enter The Service Details' className='iser' 
                    onChange={e => setRegdate(e.target.value)} required></input>
                    </div>

                    <div className='sexpiry'>
                    <label>Expiration Date <span className='colexp'>:</span> </label>
                    <input type='date' className='iexpr' 
                    onChange={e => setExpriydate(e.target.value)} 
                    required
                    
                    ></input>
                    
                    </div>


                    <div className='srem'>
                    <label>Remainder Duration <span className='colrem'>:</span> </label>
                    <input type='text' placeholder='Enter the Remainder Duration' className='irem' 
                    onChange={e => setRemainderduration(e.target.value)} required></input>
                    </div>


                    

                    </div>

                    <div>
                      <button className='btnservice'>Submit</button>
                    </div>
                    </div>

                    
        </form>
        
    </div>
    </div>
  )
}

export default Services