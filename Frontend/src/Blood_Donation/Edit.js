import { useEffect, useState } from "react"
// import './App.css'
// import BloodyUser from "./BloodyUser"

import {useLocation} from 'react-router-dom';



function Edit(){
    const location = useLocation();
    const [id,setid] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [bloodgroup, setBgrp] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const[message, setMessage] = useState('')

    const Update = async () =>{
        const new_donor =  {
            "name": name,
            "email": email,
            "password": password,
            "address": address,
            "contact": contact,
            "bloodgroup": bloodgroup
        }
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch(`http://localhost:5100/updateDonor/${id}`, requestOptions);
        const data = await response.json();

        if(data._id!=null)
        {
            setMessage("Update Successfully")
        }
        else
        {
            setMessage("Update Failed")
        }
    }
        const getDatabyId = async (id)=>
        {
            const response = await fetch(`http://localhost:5100/getDonorbyId/${id}`);
            const data = await response.json();
            console.log( "ID",id)
            setName(data.name);
            setEmail(data.email);
            setPassword(data.password);
            setAddress(data.address);
            setContact(data.contact);
            setBgrp(data.bloodgroup);
        }
        
        useEffect(() =>{
           const id = location.state.id;
           console.log("ID" ,id)
           setid(id)
           getDatabyId(id)
        },[])
     
    return(
        <>

        <table>
            <tr>
                <th style={{color: 'red'}}>Doner's Update list</th>
            </tr>
             <tr>
                <td>Enter Your Name</td>
                <td><input type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name}/></td>
            </tr>
            <tr>
                <td>Enter Email Id</td>
                <td ><input type="email" name="" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} value={email}/></td>
            </tr> 
            <tr>
                <td>Enter Pasword</td>
                <td ><input type="email" name="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}/></td>
            </tr> 
            <tr>
                <td>Enter Blood group</td>
                <td><input type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBgrp(e.target.value)} value={bloodgroup}/></td>
            </tr>
            <tr>
                <td>Enter Your Address</td>
                <td><input type="text" name="" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} value={address}/></td>
            </tr>
            <tr>
            <td>Enter Your Contact</td>
                <td><input type="text" name="" placeholder="Enter your Contact" onChange={(e) => setContact(e.target.value)} value={contact}/></td>
            </tr>
            
            <tr>
                <td><input onClick={Update} type="Submit" value="Update"/></td>
            </tr>
            <tr>
                {message}
            </tr>    
        </table>

        {/* {email} <br></br>
            {name} <br></br>
            {bgrp} <br></br>
            {address} <br></br>
            {contact} <br></br>
            */}

        </>
    )
}

export default Edit