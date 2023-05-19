import React, { useState } from 'react'
import "./update.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Updateuser() {

    const [name , setname] = useState('')
    const [remarks , setremarks] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();


    function handleSubmit(event){

      event.preventDefault();
      axios.put("http://localhost:8081/updatedetails/"+id,{name,remarks})
      .then(res => {
          console.log(id)
          navigate('/Users')
      }).catch(err => console.log(err))
  }


  return (
    <div>
      <h1 className='uuser'> Update user</h1>
      <form onSubmit={handleSubmit}>
        <div className='update'>
        <div className='user'>
        <label >Username<span className='icolu'>: </span></label>
        <input type='text' placeholder='Enter Your Name' className='iuser' 
        onChange={e => setname(e.target.value)}></input>
        </div>
          <div className='remarks'>
            <label >Remarks<span className='icol'>:</span></label>
           <input type='text' placeholder='Give Your Remarks' className='iremarks'
           onChange={e =>setremarks(e.target.value)}></input>
          </div>
          <div>
            <button className='ubtn'>Update Details</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Updateuser   