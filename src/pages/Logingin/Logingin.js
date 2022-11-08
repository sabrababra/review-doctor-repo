import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Logingin = () => {
    return (
        <div className="flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
 
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100">
      <div className="card-body">
       <form >
       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter email" className="input input-bordered" name='email' required/>
                        </div>

        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="enter password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

       </form>
       <div className="divider">OR</div>
                    <div className="flex justify-evenly mt-6">
                        <button  className=""><FaGoogle className=' text-2xl hover:text-primary '></FaGoogle></button>
                        <button  className=""><FaGithub className=' text-2xl hover:text-primary'></FaGithub></button>
                    </div>
      </div>
    </div>

</div>
    );
};

export default Logingin;