import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Donerlist = () => {
 
  const navigate = useNavigate();
  const [alldoners, setAllDoners] = useState([])

  const getData = async () =>{
    const response =  await fetch('http://localhost:5100/getAllDonor')
    const data = await response.json()
    console.log(data)
    setAllDoners(data)
  }
  const search = async (value) =>{
    if(value == null || value == "")
    {
      getData()
    }
    else
    {
      const response =  await fetch(`http://localhost:5100/searchmyaddress/${value}`)
      const data = await response.json()
      console.log(data)
      setAllDoners(data)
    }

    
  }
  useEffect(()=>{
    getData()
  },[])

  const EditDonor = (id) =>{
    navigate('/editDonor',{state:{'id':id}})
    
  }
  const DeleteDonor = async (id) =>{
    if(window.confirm('are you sure you want to delete?'))
    {
        const requestOptions = {
          method: 'Delete',
          headers: { 'Content-Type': 'application/json' },
      };
      
      const response = await fetch('http://localhost:5100/deleteDonor/'+id, requestOptions);
            
      
          alert("Delete Successfully")
          window.location.reload()
      
    }
    
   }


  return (
    <div>
      <tr>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"onChange={(e) => search(e.target.value)} />               
      </tr>
        <table class="table" style={{marginLeft:'0px', marginTop:'-1px'}}>       
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Address</th>
          <th scope="col">Contact</th>
          <th scope="col">Bloodgroup</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
                {
                  alldoners.map((data,index) =>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td><b>{data.name}</b></td>
                        <td><b>{data.email}</b></td>
                        <td><b>{data.password}</b></td>
                        <td><b>{data.address}</b></td>
                        <td><b>{data.contact}</b></td>
                        <td><b>{data.bloodgroup}</b></td>
                        <td>
                            <button style={{margin:'7px'}} onClick={(e) => EditDonor(data._id)}>Edit</button>
                            <button style={{margin:'7px'}} onClick={(e) => DeleteDonor(data._id)}>Delete</button>
                          </td>
                      </tr>
                      
                  )
                }
      </tbody>
    </table>

    </div>
  )
}

export default Donerlist