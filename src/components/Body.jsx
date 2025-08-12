import React, { use, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { addUser } from '../utils/userSlice.js';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant.js';

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData=useSelector((store) => store.user);
  
    const fetchUser = async () => {
      try {
        const user = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });
        console.log("User fetched successfully", user.data);
        dispatch(addUser(user.data));
      } catch (err) {
        if(err.status===401){
          console.error("Unauthorized access, redirecting to login");
        }
        console.error("Error fetching user profile", err);
        navigate("/login");
      }
    };
useEffect(() => {
  if(!userData){fetchUser();} 
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
