import { useState } from "react"
// import './App.css'
// import BloodyUser from "./BloodyUser"

function UserRegistration(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bgrp, setBgrp] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [dob, setDOB] = useState('')
    const [gender, setGender] = useState('')
    const[age, setAge] = useState('')
    return(
        <>

        <table>
            <tr>
                <th style={{color: 'red'}}>User's Registration</th>
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
                <td ><input type="password" name="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/></td>
            </tr> 
            <tr>
                <td>Enter Blood group</td>
                <td><input type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBgrp(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Enter Your DOB</td>
                <td><input type="date" name="" placeholder="Enter DOB" onChange={(e) => setDOB(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Enter age</td>
                <td><input type="number" name="" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Select Gender</td>
                <td>
                    <input type="radio" name="" onChange={(e) => setGender(e.target.value)}></input>Male
                    <input type="radio" name="" onChange={(e) => setGender(e.target.value)}></input>Female
                </td>
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
                <td><input type="Submit" value="Register"/></td>
            </tr>
    
        </table>
            {name} <br></br>
            {email} <br></br>
            {password} <br></br>
            {bgrp} <br></br>
            {dob} <br></br>
            {age} <br></br>
            {gender} <br></br>
            {address} <br></br>
            {contact} <br></br>

        </>
    )
}

export default UserRegistration