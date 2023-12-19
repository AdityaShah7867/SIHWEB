import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CreateUser from './Pages/CreateUser';
import MarketPlace from './MarketPlace';
import VerifyLawyer from './Pages/VerifyLawyer';
import Navbar from './Components/Navbar';
import ManageUser from './Pages/ManageUser';

const App = () => {

  return (
    <>
     
      <Router>
        <ToastContainer/>
       <Navbar/>
        <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/create-user" element={<CreateUser/>}/>
        <Route path="/verify-lawyer" element={<VerifyLawyer/>}/>
        <Route path="/manage-user" element={<ManageUser/>}/>
        {/* <Route path="/" element={<MarketPlace/>}/> */}
      
             

        </Routes>
        
      </Router>
    
    </>


)}

export default App