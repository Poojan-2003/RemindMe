import React from 'react'
import "../App.css"
import "./dashboard.css"
import Sidebar from '../Components/Sidebar'
import  { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Updatedashboard from './update/Updatedashboard'


function Dashboard() {
  
  const navigate = useNavigate();
  const [Users, setUsers] = useState([])
  


  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8081/dashboard");
  //       setUsers(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllData();
  // }, []);

  useEffect(()=>{
    axios.get('http://localhost:8081/dashboard')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
},[])
  var setdaysdiff;
  function handleday(remainderdate){
    var moment = require('moment');
    var a = moment(date, 'YYYY-MM-DD'); 
    var b = moment(remainderdate, 'DD-MM-YY'); 
    setdaysdiff = b.diff(a, 'days'); 
    }

    const  handleDelete =  async(id) => {
      try{
          await axios.delete('http://localhost:8081/deletedashboarduser/'+id)
          window.location.reload()
      }catch(err){
          console.log(err)
      }
  }

    

  


  return (
    <div className='main'>
      <div className='Sidebar'>
        <Sidebar />
      </div>

      <div>
        <div>
            <table className=''>
              <thead className='tablew'>
                <tr>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Service Name
                </th>
                <th>
                  Registration Date
                </th>
                <th>
                  Expiry Date
                </th>
                <th>
                  Remaining Days
                </th>
                <th>
                  Update Data
                </th>
                <th>
                  Delete Customer
                </th>
                </tr>
              </thead>
              <tbody>
                            {
                                Users.map((data,i) => (
                                    <tr key={i}>
                                        <td>{data.Name} </td>
                                        <td>{data.Email}</td>
                                        <td>{data.servicedetails}</td>
                                        <td>{data.regdate}</td>
                                        <td>{data.expirydate}</td>
                                        <td onLoad={handleday(data.expirydate)}>{setdaysdiff} Days</td>
                                        <td><Link to={`Updatedashboard/${data.ID}`} className='upbtn' >Update</Link></td>
                                         <td><button className='delbtn' onClick={() =>handleDelete(data.ID)}>Delete</button></td> 
                                    </tr>
                                ))
                            }
                        </tbody>
            </table>
        </div>      
      </div>
    </div>
  )
}

export default Dashboard