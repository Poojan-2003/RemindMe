import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import  { useEffect } from 'react'
import axios from 'axios'


function ServiceDetails() {

  const [userdata,setUserdata] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/businessinfo')
    .then(res => setUserdata(res.data))
    .catch(err => console.log(err));
},[])
  return (
    <div className='main'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div>
            <div className='alldata'>
                <div>

                    <table >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Info</th>
                            <th>Address</th>
                            <th>Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                userdata.map((data,i) =>(
                                    <tr key={i}>
                                        <td>{data.Name}</td>
                                        <td>{data.Phone}</td>
                                       <td>{data.Address}</td> 
                                        <td>{data.Remarks}</td>
                                    </tr>
                                ))
                                
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            
        
      </div>
    </div>
  )
}

export default ServiceDetails