import React ,{ useEffect, useState }from 'react'
import "./update.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Updatedashboard(props) {
    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [date , setdate] = useState()
    const {id} =useParams();
    const navigate = useNavigate();


    function handleSubmit(event){

        event.preventDefault();
        axios.put("http://localhost:8081/updatedashboard/"+id,{name,email,date})
        .then(res => {
            console.log(name)
            navigate('/Dashboard')
        }).catch(err => console.log(err))
    }

  

 
    
  return (
    <div className='udashboard'>
        <form onSubmit={handleSubmit}>
            <div className='ui'>Update Users Information</div>
            <div className='useru'>
                <label >Name<span className='ucolu'>: </span></label>
                <input type='text' placeholder='Update Your Name' className='uiuser' 
                onChange={e => setname(e.target.value)}></input>
            </div>

            <div className='useru'>
                <label>Email<span className='ucole'>: </span></label>
                <input type='email' placeholder='Update Your Email' className='uiemail' 
                onChange={e => setemail(e.target.value)}></input>
            </div>

            <div className='useru'>
                <label >New Expiry Date<span className='ucold'> : </span></label>
                <input type='date' className='uidate' 
                onChange={e => setdate(e.target.value)} required></input>
            </div>

            <div><button className='ubtn' >Update Details</button></div>
        </form>
    </div>
  )
}

export default Updatedashboard