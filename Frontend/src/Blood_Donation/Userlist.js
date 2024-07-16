import React, { useEffect, useState } from 'react'

const Userlist = () => {

  const [alldoners, setAllDoners] = useState([])

  const getData = async () =>{
    const response =  await fetch('http://localhost:5100/getAllDonor')
    const data = await response.json()
    console.log(data)
    setAllDoners(data)
  }

  useEffect(()=>{
    getData()
  },[])
 
  return (
    <div>
        <table class="table" style={{marginLeft:'0px', marginTop:'-1px'}}>
  
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Bloodgroup</th>
          <th scope="col">DateofBirth</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Contact</th>        
          <th scope="col">Action</th>
        </tr>
      </thead>
      {/* <tbody>
                {
                  alldoners.map((data,index) =>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td><b>{data.name}</b></td>
                        <td><b>{data.email}</b></td>
                        <td><b>{data.password}</b></td>
                        <td><b>{data.bloodgroup}</b></td>
                        <td><b>{data.dob}</b></td>
                        <td><b>{data.age}</b></td>
                        <td><b>{data.gender}</b></td>
                        <td><b>{data.address}</b></td>
                        <td><b>{data.contact}</b></td>
                        <td>
                            <button style={{margin:'7px'}} onClick={(e) => EditDonor(data._id)}>Edit</button>
                            <button style={{margin:'7px'}} onClick={(e) => DeleteDonor(data._id)}>Delete</button>
                          </td>
                      </tr>
                      
                  )
                }
      </tbody> */}
      </table>
    </div>
    )
}
export default Userlist