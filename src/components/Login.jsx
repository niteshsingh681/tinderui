import React from 'react';
import axios from "axios";
const Login = () => {
  const [emailId,setEmail]=React.useState("rakesh123@gmail.com");
  const [password,setPassword]=React.useState("Rakesh@123m");
  const handleLogin= async()=>{
    try{
       const data =await axios.post("http://localhost:100/login",
        {
      emailId,
      password
    },{
      withCredentials:true
    }
  );
   
    }
    catch(err){
      console.error("Login failed",err);
    }

   
  }
  return (
    <div className="flex justify-center my-20  ">
 <div className="card bg-gray-500 w-96 shadow-sm ">
  <div className="card-body ">
    
    <h2 className="card-title text-center w-full">Login!</h2>
    <div className="flex flex-col gap-2">
    <label>Email Id :</label>
    <input
     type="text"
     placeholder="xyz@gmail.com" 
     className="input"
     value={emailId}
     onChange={(e)=>setEmail(e.target.value)}
      />
    </div >
        <div className="flex flex-col gap-2">
        <label>Password :</label>
          <input 
          type="text"
           placeholder="Enter The Password" 
           className="input"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
            />
    </div>
    
    <div className="card-actions justify-center ">
      <button className="btn btn-primary my-2" onClick={handleLogin}>Login Now</button>
    </div>
  </div>
</div>
    </div>

  )
}

export default Login;
