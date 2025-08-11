import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center my-20  ">
 <div className="card bg-gray-500 w-96 shadow-sm ">
  <div className="card-body ">
    <h2 className="card-title text-center w-full">Login!</h2>
    <div className="flex flex-col gap-2">
    <label>Email Id :</label>
    <input type="text" placeholder="xyz@gmail.com" className="input" />
    </div >
        <div className="flex flex-col gap-2">
        <label>Password :</label>
          <input type="text" placeholder="Enter The Password" className="input" />
    </div>
    
    <div className="card-actions justify-center ">
      <button className="btn btn-primary my-2">Login Now</button>
    </div>
  </div>
</div>
    </div>

  )
}

export default Login
