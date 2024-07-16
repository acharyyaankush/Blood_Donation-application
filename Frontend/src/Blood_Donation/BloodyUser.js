import { useState } from "react"
// import '../App.css'
import { Link } from "react-router-dom"
function BloodyUser(){

    const [name, setName] = useState('')
    const [bgrp, setBgrp] = useState('')
    const [age, setAge] = useState('')
    const [email, setemail] = useState('')
   


    return(
        <>

        <table>
            <tr>
                <th style={{color: 'black'}}>User Login</th>
            </tr>
            <tr>
                <td style={{color: 'blue'}}><b>Enter Name</b></td>
                <td><input type="text" name="" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/></td>
            </tr> 
            <tr>
                <td style={{color: 'blue'}}><b>Enter your email</b></td>
                <td><input type="email" name="" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)}/></td>
            </tr>
            <tr>
                <td style={{color: 'blue'}}><b>Enter your age</b></td>
                <td><input type="number" name="" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/></td>
            </tr>
            <tr>
                <td style={{color: 'blue'}}><b>Enter required Blood group</b></td>
                <td><input type="name" name="" placeholder="Enter Blood group" onChange={(e) => setBgrp(e.target.value)}/></td>
            </tr>
            
            <tr>
                <td><input type="Submit" value="Login"/></td>
            </tr>

            <tr>
                <td>                
                <Link to="/newuser1"style={{color: 'black'}} ><b>New User?</b></Link> 
                </td>
            </tr>
        </table>
        {name} <br></br>
            {age} <br></br>
            {bgrp} <br></br>
            {email}
        </>
    )
}

export default BloodyUser