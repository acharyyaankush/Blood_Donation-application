//import { useState } from "react"
//import { useEffect, useState } from "react";
import {
    Link,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";


// import './App.css'
import { useEffect, useState } from "react";
import BloodyUser from "./BloodyUser";
import DonerUser from "./DonerUser";
import DonerUserRegistration from "./DonerUserRegistration";
import Donerlist from "./Donerlist";
import Edit from "./Edit";
import Footer1 from "./Footer1";
import Forgot_password from "./Forgot_password";
import Homeone from "./Homeone";
import Search from "./Search";
import UserRegistration from "./UserRegistration";
import Userlist from "./Userlist";
function Main() {
    const [flag, setFlag] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('loggedUser')) {
            setFlag(1)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('loggedUser')
        //navigate to again login page
        window.location.href = "/"
    }

    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="images/blood-donation-logo.png" alt="" width={200} height={60} />

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            {
                                flag == 1 ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/search">Search</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/searchlist">Donerlist</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/searchlist1">Userlist</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={logout}>Logout</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/user">User</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/doner">Doner</Link>
                                        </li>
                                    </>
                            }



                        </ul>

                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                {/* </form> */}
                {/* </div> */}
                {/* </nav> */}

                <Routes>
                    <Route exact path="/" element={<Homeone />}></Route>
                    <Route exact path="/user" element={<BloodyUser />}></Route>
                    <Route exact path="/doner" element={<DonerUser />}></Route>
                    <Route exact path="/search" element={<Search />}></Route>
                    <Route exact path="/newuser" element={<DonerUserRegistration />}></Route>
                    <Route exact path="/newuser1" element={<UserRegistration />}></Route>
                    <Route exact path="/searchlist" element={<Donerlist />}></Route>
                    <Route exact path="/searchlist1" element={<Userlist />}></Route>
                    <Route exact path="/editDonor" element={<Edit />}></Route>
                    <Route exact path="/fgpassword" element={<Forgot_password />}></Route>
                </Routes>
            </Router>
            <Footer1></Footer1>
        </>

    )

}
export default Main