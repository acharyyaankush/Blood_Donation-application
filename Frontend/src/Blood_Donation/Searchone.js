import { useState } from "react"
//import { useEffect, useState } from "react";
//import {Link, useNavigate} from 'react-router-dom';


// import './App.css'

function Searchone(){


    
    return(
        <>
        {/* <Link to="/Addcontact" className="bcd">Add New Contact</Link> */}


        <table>
        <tr>
                <th style={{color:'blue'}}>Name List</th>
            </tr>
            <tr>
                <td>S.no</td>
                <td>Name</td>
                <td>Address</td>
                <td>Action</td>
            </tr>
            
                    
                        <tr>
                            <td>1</td>
                            <td>Arka</td>
                            <td>Senbagan Agarpara</td>
                            <td>
                            <button style={{margin:'7px'}}>Request</button>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>2</td>
                            <td>Parthib</td>
                            <td>H.B Agarpara</td>
                            <td>
                            <button style={{margin:'7px'}}>Request</button>
                            </td>
                        </tr>    
        
    
        </table>

        </>
    )
}

export default Searchone