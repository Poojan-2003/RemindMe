import React from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import "./Customer.css"
import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function BusinessDetails() {
    const [Name , setName] = useState("")
    const [Address , setAddress] = useState("")
    const [Phone ,setPhone] = useState("")
    const [Remarks,setRemarks] = useState("")

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8081/business",{Name,Address,Phone,Remarks})
        .then(res => {
            console.log(res)
            navigate('/ServiceDetails')
        }).catch(err => console.log(err))
    }

    return (
    <div className='main'>
        <div className='Sidebar' >
        <Sidebar />
        </div>
        <div>
        <div className='bdetail'>Enter BusinessDetails</div>
        <div>
            <form className='formi' onSubmit={handleSubmit}>
                    <div className='userf'>
                    <label>Name <span className='coluser'>:</span> </label>
                    <input type='text' placeholder='Enter Your Name' className='iname' 
                    onChange={e => setName(e.target.value)} required></input>
                    </div>

                    <div className='userf'>
                    <label>Address <span className='coladd'>:</span></label>
                    <input type='text' placeholder='Enter Your Address' className='iadd' 
                    onChange={e => setAddress(e.target.value) }required></input>
                    </div>


                    <div className='userf'>
                    <label>Phone <span className='colnum'>:</span> </label>
                    <input type='tel' placeholder='Enter Your Contact Number' className='inum' 
                    onChange={e => setPhone(e.target.value)} required></input>
                    </div>


                    <div className='userf'>
                    <label>Remarks <span className='colremark'>:</span> </label>
                    <input type='text' placeholder='Give Your Remarks' className='iremark' 
                    onChange={e => setRemarks(e.target.value)} required></input>
                    </div>

                    <button className='btnf'>Submit</button>
                                      
            </form>
        </div>
        </div>
    </div>
  )
}

export default BusinessDetails