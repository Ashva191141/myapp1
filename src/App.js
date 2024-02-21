import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import Userdashboard from './Pages/Userdashboard';





const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />

        <Route path="/user" element={<PrivateRoute />}> 
        <Route path="dashboard" element={<Userdashboard />} />

        </Route>
        
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;