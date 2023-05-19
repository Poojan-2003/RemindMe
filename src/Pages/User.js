import React from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import "./Customer.css"
import  { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';





function User(){

    const [UserName,setUserName] = useState("")
    const [Password , setPassword] = useState("")
    const [Remarks , setRemarks] = useState("")
    const [userdata, setUserdata] = useState([])

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8081/Users",{UserName,Password,Remarks})
        .then(res => {
            console.log(res)
            navigate('/Users')
        }).catch(err => console.log(err))
    }


    // useEffect(() => {
    //     const fetchAllData = async () => {
    //       try {
    //         const res = await axios.get("http://localhost:8081/users").then
    //         setUsersdata(res.data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    //     fetchAllData();
    //   }, []);

      useEffect(()=>{
        axios.get('http://localhost:8081/users')
        .then(res => setUserdata(res.data))
        .catch(err => console.log(err));
    },[])

      const  handleDelete =  async(id) => {
        try{
            await axios.delete('http://localhost:8081/deleteuser/'+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }



  return (
    <>
        <div className='main'>
            <div className='Sidebar'>
            <Sidebar />
            </div>
            <div className='UserForm'>
                <div className='title'>Enter The User Details</div>
                <form className='formi' onSubmit={handleSubmit}>
                    <div className='uuuser'>
                    <label>Username <span className='coluuuser'>:</span> </label>
                    <input type='text' placeholder='UserName' className='iuser' 
                    onChange={e => setUserName(e.target.value)} required></input>
                    </div>

                    <div className='pass'>
                    <label>Password <span className='col'>:</span></label>
                    <input type='password' placeholder='Password' className='ipass'
                    onChange={e => setPassword(e.target.value)} required></input>
                    </div>

                    <div className='remark'>
                    <label>Remarks <span className='col2'>:</span></label>
                    <input type='text'
                    required
                     placeholder='Remarks' className='iremark'
                    onChange={e => setRemarks(e.target.value)}></input>

                    </div>

                    <button className='btnf'> Submit</button>

                    
                </form> 

                
            </div>
            <div className='vl'></div>
            <div className='alldata'>
                <div>

                    <table >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Remarks</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                userdata.map((data,i) =>(
                                    <tr key={i}>
                                        <td>{data.UserName}</td>
                                        <td>{data.Remarks}</td>
                                        <td><Link to={`Updateuser/${data.ID}`} className='upbtn' >Update</Link></td>
                                       <td><button className='delbtn' onClick={() =>handleDelete(data.ID)}>Delete</button></td> 
                                    </tr>
                                ))
                                
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            
        </div>


        
        </>
  )
}

export default User