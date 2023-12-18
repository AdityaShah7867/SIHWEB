import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Home from './Home';
import CreateUser from './CreateUser';
import MarketPlace from './MarketPlace';


const App = () => {

  return (
    <>
     
      <Router>
        <ToastContainer/>
        <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/create-user" element={<CreateUser/>}/>
        {/* <Route path="/" element={<MarketPlace/>}/> */}
      
             

        </Routes>
        
      </Router>
    
    </>


)}

export default App