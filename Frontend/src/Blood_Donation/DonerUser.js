import { useState } from "react"
// import '../App.css'
import { Link } from "react-router-dom"
function DonerUser() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [flag, setFlag] = useState(0)

    const login = async () => {
        const new_donor = {

            "email": email,
            "password": password,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_donor)
        };

        const response = await fetch('http://localhost:5100/LoginDonor', requestOptions);
        const data = await response.json();

        if (data.message == true) {
            localStorage.setItem("loggedUser", email)
            setMessage("Login Successfully")
            //navigate to dashboard or home page
            window.location.href = "/searchlist"
        }
        else {
            setMessage("Login Failed")
        }
    }
    const showHide = (id) => {
        if (flag == 0) {
            setFlag(1)
        }
        else {
            setFlag(0)
        }
    }

    return (
        <>

            <table>
                <tr>
                    <th style={{ color: 'black' }}>Doner Login</th>
                </tr>
                <tr>
                    <td style={{ color: 'blue' }}><b>Email</b></td>
                    <td><input type="text" name="" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td style={{ color: 'blue' }}><b>Password</b></td>
                    {
                        flag == 0 ?
                            <td><input type="password" name="" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /></td>
                            :
                            <td><input type="text" name="" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /></td>
                    }
                    {/* <td><button onClick={showHide}>ShowHide</button></td> */}
                </tr>

                <tr>
                    <td><input onClick={login} type="Submit" value="Login" /></td>
                </tr>
                <tr>
                    <td>
                        <Link to="/newuser" style={{ color: 'blue' }} ><b>New User?</b></Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/fgpassword" style={{ color: 'blue' }} ><b>Forgot Password?</b></Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        {message}
                    </td>
                </tr>
            </table>

        </>
    )
}

export default DonerUser