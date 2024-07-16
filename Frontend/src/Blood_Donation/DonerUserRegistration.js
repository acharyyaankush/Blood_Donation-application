import { useState } from "react"
// import './App.css'
// import BloodyUser from "./BloodyUser"

function DonerUserRegistration(){

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [bloodgroup, setBgrp] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const[message, setMessage] = useState('')

    const register = async () =>{
        const new_donor =  {
            "name": name,
            "email": email,
            "password": password,
            "address": address,
            "contact": contact,
            "bloodgroup": bloodgroup
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch('http://localhost:5100/registerDonor', requestOptions);
        const data = await response.json();

        if(data._id!=null)
        {
            setMessage("Registration Successfully")
        }
        else
        {
            setMessage("Registration Failed")
        }
    }
    return(
        <>

        <table>
            <tr>
                <th style={{color: 'red'}}>Doner's Registration</th>
            </tr>
             <tr>
                <td>Enter Your Name</td>
                <td><input type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Enter Email Id</td>
                <td ><input type="email" name="" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)}/></td>
            </tr> 
            <tr>
                <td>Enter Pasword</td>
                <td ><input type="email" name="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/></td>
            </tr> 
            <tr>
                <td>Enter Blood group</td>
                <td><input type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBgrp(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Enter Your Address</td>
                <td><input type="text" name="" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}/></td>
            </tr>
            <tr>
            <td>Enter Your Contact</td>
                <td><input type="text" name="" placeholder="Enter your Contact" onChange={(e) => setContact(e.target.value)}/></td>
            </tr>
            
            <tr>
                <td><input onClick={register} type="Submit" value="Register"/></td>
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

export default DonerUserRegistration