import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const UpdateProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [age, setAge] = useState(user.age || '');
  const [about, setAbout] = useState(user.about || '');
  const [photo, setPhoto] = useState(user.photo || '');
  const [gender, setGender] = useState(user.gender || '');
  const [err, setErr] = useState('');

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/update`, // Ensure this matches your backend route
        {
          firstName,
          lastName,
          photo,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      console.log(res);
      // Corrected: Access the updatedUser property from the response data
      dispatch(addUser(res.data.updatedUser)); 
    } catch (err) {
      setErr(err.message);
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile();
  };

  return (
    user && (
      <div className="flex mt-1.5 gap-5 justify-center px-2">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Update Profile</legend>
            {err && <div className="text-red-500">Error: {err}</div>}
            
            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label className="label">Age</label>
            <input
              type="number"
              className="input"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <label className="label">About</label>
            <input
              type="text"
              className="input"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <label className="label">Gender</label>
            <select
              className="select select-neutral"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit" className="btn btn-neutral mt-4">
              Update
            </button>
          </fieldset>
        </form>
        <UserCard user={{ firstName, lastName, age, about, photo, gender }} />
      </div>
    )
  );
};

export default UpdateProfile;