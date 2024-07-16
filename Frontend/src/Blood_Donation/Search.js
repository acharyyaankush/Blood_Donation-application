import { useState } from "react"
//import AllContacts from "./AllContacts"
// import { Link } from "react-router-dom";

//  import './App.css'
import Searchone from "./Searchone"

function Search(){

    const [bgrp, setBgrp] = useState('')
    const [location, setLocation] = useState('')
    const [gameone, setGameone] = useState('')
    const [gametwo, setGametwo] = useState('')
    const [gamethree, setGamethree] = useState('')
     
    
    return(
        <>

        <table>
            <tr>
                <th style={{color:'black'}}>Search Doner</th>
            </tr>
            <tr>
                <td style={{color: 'blue'}}><b>Select Blood Group</b></td>
                <td>
                
                    <select>
                    <option>Select blood group</option>
                        <option value={gameone} onChange={(e) => setBgrp(e.target.value)}>A+</option>
                        <option value={gametwo} onChange={(e) => setBgrp(e.target.value)}>AB+</option>
                        <option value={gamethree} onChange={(e) => setBgrp(e.target.value)}>O+</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td style={{color: 'blue'}}><b>Enter Location</b></td>
                <td><input type="number" name="" placeholder="Enter Mobile no" onChange={(e) => setLocation(e.target.value)}/></td>
            </tr>
            <tr>
                <td><input type="Submit" value="Search"/></td>
            </tr>
            {bgrp} <br></br>
            {location}
    
        </table>

    
        </>
    )
}

export default Search