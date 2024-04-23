import React from 'react';
import { Routes, Route } from "react-router-dom";
import Room from "./Room"; 
import Home from "./Home";
import ErrorPage from './error';
import Dashboard from "../main/dashboard";
import PrivateRoutes from './PrivateRoutes';
import Profile from "../main/pages/Profile"
import Profiles from "../main/pages/profiles"
import UserForm from "../main/userForm"
import Navbar from '../main/Navbar';
import Tutor from '../tutor/tutor';
import CreateSessionItem from '../tutor/createSessionItem';

function App() {
return(
<>
  <Routes>

    <Route path="/" element={<Home />} />
    {/* <Route path="/room" element={<Room />} /> */}
    <Route path="/room/:roomId" element={<Room />} />
    <Route path="*" element={<ErrorPage />} />

    <Route element={<PrivateRoutes /> }>

      <Route element={<Navbar/>}>

        <Route path='/home' element={<Dashboard />} />
        
        <Route path="/:userId" element={<Profiles />} />

        <Route path="profile">

          <Route index element={<Profile />} />
          <Route path="editProfile" element={<UserForm />} />

        </Route>
        
        <Route path="partner">

          <Route index element={<Tutor />} />
          <Route path="createsession" element={<CreateSessionItem />} />

        </Route>

      </Route>

    </Route>

         
  </Routes>
</>
)
}

export default App;