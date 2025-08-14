import React from "react";
import {Link} from "react-router-dom";
import {removeUser} from '../utils/userSlice.js';
import { useSelector,useDispatch } from "react-redux";  
const Navbar = () => {
  // Get the user from the Redux store or subcribing to the user state
  const user = useSelector((store) => store.user);
  //console.log("user in navbar", user);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <div className="btn btn-ghost normal-case text-xl flex items-start gap-2">
        <div className="w-10 rounded-full">
              <Link to="/">
              <img
                alt="User avatar"
                src="data:image/png;base64,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"
              />
              </Link>
            </div>
        <a >DevTinderUI</a>
        </div>
      </div>
      <div className="flex  items-center  gap-2">
         {user && <p className="px-3 font-sans"> Hello { user.firstName}</p>}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            aria-label="User menu"
            className="btn btn-ghost btn-circle avatar"
          >
           {user &&(<div className="w-10 rounded-full ">
             
              <img
                alt="User profile"
                src={user?.photo}// optional chaining to handle cases where user might be null
              />
            </div>)}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to="/logout" >Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
