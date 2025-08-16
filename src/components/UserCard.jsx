import React from 'react'

const UserCard = ({user}) => {
    const{firstName,lastName,age,gender,skills,photo}=user;
  return (
    <div className="card bg-gray-950 w-96  shadow-sm">
  <figure>
    <img className="h-60 w-full"
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {firstName + " " + lastName}
      <div className="badge badge-secondary">{age}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex justify-evenly">
      <button className="bg-blue-600  rounded-2xl text-2xl cursor-pointer px-3 py-2">Ignored</button>
      <button className="bg-pink-500 rounded-2xl text-2xl cursor-pointer  px-3 py-2">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
