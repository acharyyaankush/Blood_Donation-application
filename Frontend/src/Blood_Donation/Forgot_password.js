import React, { useState } from 'react'

const Forgot_password = () => {
    const [email, setEmail] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [cpassword,setCpassword] = useState('')
    const [message, setMessage] = useState('')
    const[OTP, setOTP] = useState('')
    const [userOTP, setUserOTP] = useState('')
    const [flag, setFlag] = useState(0)
    const [flag1, setFlag1] = useState(0)
    const [flag2, setFlag2] = useState(0)
    const [attempts, setAttempts] = useState(0); 
    const maxAttempts = 2;
    
    const validateEmail = async () =>{
    const x = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
        setOTP(x)
        setEmail(email)
        const new_user =  {
            "email": email,
            "otp": x
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };

        const response = await fetch('http://localhost:5100/send-email', requestOptions);
        const data = await response.json();

        if(data.message == 1)
        {
            
            setFlag(1)
            
        }
        else if(data.message == 2)
        {
            setMessage("Sorry Your Email is Not Registered, Try Again")
        }
        else 
    {
        setMessage("Message Not Sent, Try Again")
        }
    }

const validateOTP = () =>{
    console.log("OTP: "+OTP+" "+"User OTP: "+userOTP)
    if(userOTP == OTP)
    {
        setFlag(2)
    }
    else{
        setMessage("OTP Not Matched, Try Again...!!!")
        setAttempts(attempts + 1);
        if (attempts + 1 >= maxAttempts) {
            // window.location.href = "/doner";
            setFlag(0)
        }
    }
}

const updatePassword = async () =>{
    // alert("update")
    const new_user =  {
        "password": newpassword
    }

    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
    };

  

    if(newpassword == cpassword){
        const response = await fetch('http://localhost:5100/updatepassword/'+email, requestOptions);
    const data = await response.json();

    // console.log(52, data)
    if (data._id != null) {
        alert("Password Updated Successfully")
        window.location.href = "/doner";
    }
    else {
        alert("Password Not Updated, Try Again")
    }
    }
    else{
        alert("Password and Confirm Password are not same")
    }
    }
    const showHide = (_id) => {
        if (flag1 == 0) {
            setFlag1(1)
        }
        else {
            setFlag1(0)
        }
    }

       
    const showHide1 = (_id) => {
        if (flag2 == 0) {
            setFlag2(1)
        }
        else {
            setFlag1(0)
        }
    }
    return (
        <>
            <div>
                {
                    flag == 0?
                    <>
                        <table>
                            <tr>
                                <th style={{color: 'red'}}>Forget Password</th>
                            </tr>
                            <tr>
                                <td>Enter Email Id</td>
                                <td ><input type="email" name="" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)}/></td>
                            </tr> 
                            
                            <tr>
                                <td><input type="Submit" value="Send OTP" onClick={validateEmail}/></td>
                            </tr>

                            <tr>
                                <td >{message}</td>
                            </tr>
                        </table>
                    </>
                   :       
                   flag == 1 ?
                    <>
                        <table>
                            <tr>
                                <th style={{ color: 'black' }}>OTP Verification</th>
                            </tr><br/>
                            <tr>
                                <td><b>Enter Your OTP:</b></td>
                                <td ><input type="email" name="" placeholder="Enter your OTP " onChange={(e) => setUserOTP(e.target.value)}/></td>
                            </tr> 
                            
                            <tr>
                                <td><input type="Submit" value="Verify" onClick={validateOTP}/></td>
                            </tr>

                        </table>
                    </>
                    :
                    <>
                        <table>
                            <tr>
                                <th style={{ color: 'black' }}>Reset Your Password</th>
                            </tr>
                            <tr>
                                <td style={{ color: 'blue' }}><b>Enter Your New password</b></td>
                                {
                                    flag1 == 0 ?
                                        <td><input type="password" name="" placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)} /></td>
                                        :
                                        <td><input type="text" name="" placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)} /></td>
                                }
                                <td><button onClick={showHide}>ShowHide</button></td>
                            </tr>
                            <tr>
                            <td style={{ color: 'blue' }}><b>confirm Your New password</b></td>
                                {
                                    flag2 == 0 ?
                                        <td><input type="password" name="" placeholder="confirm your new password" onChange={(e) => setCpassword(e.target.value)} /></td>
                                        :
                                        <td><input type="text" name="" placeholder="confirm your password" onChange={(e) => setCpassword(e.target.value)} /></td>
                                }
                                <td><button onClick={showHide1}>ShowHide</button></td>
                            </tr>
                
                            <tr>
                                <td><input type="Submit" value="Change now" onClick={updatePassword}/></td>
                            </tr>
                            <tr>
                                <td >{message}</td>
                            </tr>
                        </table>
                    </>
                }
            </div>
        </>
    )
}

export default Forgot_password
