import React from 'react'

const UserCard = ({user}) => {
    
    if(!user) return ;
    const{firstName,lastName,age,gender,about,photo}=user;
  return  (
    <div className="card bg-gray-950 w-96  shadow-sm">
  <figure>
    <img className="h-60 w-full"
      src="https://media.licdn.com/dms/image/v2/D5603AQHZSFpBd4Iq6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723209063568?e=1758153600&v=beta&t=XbK9MvXCRxaeSM2EiEh4s4dd4xe-FB16VRS-8pCYHpw"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {firstName + " " + lastName}
      <div className="badge badge-secondary">{age} </div>
      <div className="badge badge-secondary">{gender}</div>
    </h2>
    <p>{about}</p>
    <div className="flex justify-evenly">
      <button className="bg-blue-600  rounded-2xl text-2xl cursor-pointer px-3 py-2">Ignored</button>
      <button className="bg-pink-500 rounded-2xl text-2xl cursor-pointer  px-3 py-2">Interested</button>
    </div>
  </div>
</div>
  );

}

export default UserCard
