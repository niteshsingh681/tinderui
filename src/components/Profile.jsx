import React from 'react'
import UpdateProfile from './UpdateProfile';
import {useSelector,useDispatch} from 'react-redux'

const Profile = () => {
  //subscribing to the store
  const user=useSelector((store)=>store.user);
  
  return (
    <>
  {user &&
    <div  >
      <UpdateProfile user={user}/>
     
    </div>
}
    </>

  

  )
}

export default Profile
