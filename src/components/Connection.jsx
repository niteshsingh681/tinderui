import React, { useEffect,useState } from 'react';
import { BASE_URL } from '../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { addConnection ,removeConnection} from '../utils/connection';

import axios from 'axios';

const Connection = () => {
    const connections = useSelector((store) => store.connection);
   
    const dispatch = useDispatch();
// either accept or reject
    const reviewRequest = async ({ status, _id }) => {
        try {
            const res = await axios.post(
                `${BASE_URL}/request/review/${status}/${_id}`,
                {},
                { withCredentials: true }
            );
             // removing the data which is accepted or rejected  from the store 
dispatch((removeConnection(_id)));
            // You might want to update the UI or state after a successful request
            // For example, refetching connections or removing the reviewed one from the state.
        } catch (err) {
            console.log(err); // Corrected to use 'err'
        }
    };

    const fetchConnections = async () => {
        try {
            const res = await axios.get(
                `${BASE_URL}/user/requests/recieved/interested`,
                { withCredentials: true }
            );
            console.log(res.data.data);
            dispatch(addConnection(res.data.data));
        } catch (err) {
            console.log("error from", err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) return null;
    if (connections.length === 0) return <h2 flex justify-center font-bold>No Connections Found</h2>;
   

    return (
        <div className="flex flex-col align-center gap-2">
           <h1 className="flex justify-center items-center font-bold">
  Connection Request
</h1>
            {connections.map((connection) => {
                const { _id, firstName, lastName, photo, age, gender } = connection.fromUserId;

                return (
                    <div className="flex border-none justify-center w-full" key={connection._id}>
                        <div className="flex border rounded-3xl m-3.5 p-2 bg-base-300 item-center">
                            <img className='h-20 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQHZSFpBd4Iq6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723209063568?e=1758153600&v=beta&t=XbK9MvXCRxaeSM2EiEh4s4dd4xe-FB16VRS-8pCYHpw" alt="photo" />
                            <div className='px-1.5'>
                                <p className='text-2xl'>{firstName + " " + lastName}</p>
                                <p>{age}</p>
                            </div>
                            <div className='flex gap-2 mx-2 align-center py-3 '>
                                <button
                                    className="btn btn-primary hover:bg-blue-700"
                                    onClick={() => reviewRequest({ status: "accepted", _id: connection._id })}
                                >
                                    Accept
                                </button>
                                <button
                                    className="btn btn-secondary hover:bg-pink-700"
                                    // You can use a similar approach for the "Ignored" button
                                    onClick={() => reviewRequest({ status: "rejected", _id: connection._id })}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Connection;