import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
 import BloodyUser from "./BloodyUser";




function UserDashboard() {
  return (
    <>
    <h1 className='hfc'>User Dashboard</h1>

<Router>
  <Routes>
    <Route exact path="/" element={<BloodyUser></BloodyUser>}>Welcome User</Route>
  </Routes>
</Router>

<h2 className='dfc'>Design & Developed by Arkadeep</h2>
    </>
     
  )
}

export default UserDashboard;
