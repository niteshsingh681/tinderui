import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { addFriend } from '../utils/friend';
import axios from 'axios';

const Friend = () => {
    const friend = useSelector((store) => store.friend); 
    const dispatch = useDispatch();

    const fetchFriend = async () => {
        try {
            const res = await axios.get(
                `${BASE_URL}/user/connections`,
                { withCredentials: true }
            );
            
            dispatch(addFriend(res?.data?.data));
        } catch (err) {
            console.log("error from", err);
        }
    };

    useEffect(() => {
        fetchFriend();
    }, []);

    if (!friend) return null; // Use null for no render, as this is a more common React practice
    if (friend.length === 0) return <h2>No Connections Found</h2>;

    return (
      
        <div className="flex flex-col align-center gap-2">
  <h1 className="text-center font-bold">Friends</h1>
  {friend.map((connection) => {
    // Corrected: Destructure the populated 'fromUserId' object
    const { firstName, _id,lastName, photo, age, gender } = connection;

    return (
     <div 
  className="flex border-none justify-center w-full" 
  key={_id}
>
  <div 
    className="flex border rounded-3xl m-3.5 p-2 bg-base-300 justify-between w-1/3"
  >
    <img className='h-20 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQHZSFpBd4Iq6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723209063568?e=1758153600&v=beta&t=XbK9MvXCRxaeSM2EiEh4s4dd4xe-FB16VRS-8pCYHpw" alt="photo" />
    <div>
      <p>{firstName}</p>
      <p>{age}</p>
    </div>
  </div>
</div>
    );
  })}
</div>
    );
};

export default Friend;