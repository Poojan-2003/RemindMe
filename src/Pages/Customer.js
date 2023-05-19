import React, { useState } from 'react'
import "../App.css"
import Sidebar from '../Components/Sidebar'
import "./maincust.css"
import {Switch} from "antd"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

function Customer() {

  const [Fname , setFname] = useState("")
  const [Lname , setLname] = useState("")
  const [Mname , setMname] = useState("")
  const [Email , setEmail] = useState("")
  const [Phone ,setPhone] = useState("")
  const [Address ,setAddress] = useState("")
  const [City ,setCity] = useState("")
  const [Remarks ,setRemarks] = useState("")
  const [Toggle , setToggle] = useState(false)
  const navigate = useNavigate();


  const toggler = () => {
    Toggle ? setToggle(false) : setToggle(true)
    
  }

  function handleSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8081/customer",{Fname,Mname,Lname,Email,Phone,Address,City,Toggle,Remarks})
    .then(res => {
        console.log(res)
        navigate('/Services')
    }).catch(err => console.log(err))
}


  return (
    <div className='main'>
      <div className='Sidebar' >
        <Sidebar />
      </div>
      <div className='mainmain'>
      <div className='cust'>Enter Customer Details</div>
      <div className='value'>
        
        <form onSubmit={handleSubmit}>
                    <div className='row1'>
                    <div className='fname'>
                    <label >First Name <span className='colfname'>:</span> </label>
                    <input type='text' placeholder='Enter Your First Name' className='ifname' 
                    onChange={e => setFname(e.target.value)} required></input>
                    </div>

                    <div className='mname'>
                    <label className = 'w'>Middle Name <span className='colmname'>:</span> </label>
                    <input type='text' placeholder='Enter Your Middle Name' className='imname' 
                    onChange={e => setMname(e.target.value)} required></input>
                    </div>

                    <div className='lname'>
                    <label>Last Name <span className='collname'>:</span> </label>
                    <input type='text' placeholder='Enter Your Last Name' className='ilname' 
                    onChange={e => setLname(e.target.value)} required></input>
                    </div>
                    </div>

                    <div className='rowtwo'>
                        <div className='email'>
                        <label>Email <span className='colemail'>:</span> </label>
                        <input type='email' placeholder='Enter Your Email' className='iemail' 
                        onChange={e => setEmail(e.target.value)} required></input>
                        </div>

                        <div className='phone'>
                        <label className = 'w'>Contact No. <span className='colphone'>:</span> </label>
                        <input type='tel' placeholder='Enter Your Contact No' className='iphone' 
                        onChange={e => setPhone(e.target.value)} required></input>
                        </div>
                    </div>

                    <div className='row3'>
                    <div className='address'>
                    <label>Address <span className='coladdress'>:</span> </label>
                    <input type='text' placeholder='Enter Your Address' className='iaddress' 
                    onChange={e => setAddress(e.target.value)} required></input>
                    </div>

                    <div className='city'>
                    <label className = 'w'>City <span className='colcity'>:</span> </label>
                    <input type='text' placeholder='Enter Your City' className='icity' 
                    onChange={e => setCity(e.target.value)} required></input>
                    </div>
                    </div>

                    <div className='remarksf'>
                    <label>Remarks <span className='colremarksf'>:</span> </label>
                    <input type='text' placeholder='Give Your Remarks' className='iremarksf' 
                    onChange={e => setRemarks(e.target.value)} required></input>
                    </div>

                    <div className='toggle'>
                      Current Service :<Switch  onClick = {toggler} className='togglew'/>
                    </div>

                    <div className='btnone'>
                      <button className='btntwo'>Submit</button>
                    </div>

                    
        </form>
      </div>
      </div>
    </div>
  )
}

export default Customer