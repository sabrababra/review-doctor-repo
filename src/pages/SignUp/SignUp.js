import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import {  toast } from 'react-toastify';

const SignUp = () => {
    const {createProviderWithEmail,updateUserProfile}=useContext(AuthContext);
    const [error,setError]=useState('');
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        // console.log(name,photo,email,password,confirm);
        if(password===confirm){
            setError('');
            createProviderWithEmail(email,password)
            .then(res=>{
                const user=res.user;
                // console.log(user);
                handleUpdateUserProfile(name,photo);
                toast.success('Registration complete!');
                form.reset();
            })
        }else{
            setError('Password does not match with confirm password');
        }

        const handleUpdateUserProfile=(name,photoURL)=>{
            const profile={
                displayName: name,
            photoURL: photoURL 
            }
            updateUserProfile(profile)
            .then(()=>{})
            .catch(error=>console.error(error));
            
        }
    }
    return (
        <div className="flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
     
          <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
           
          </div>
          <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter name" className="input input-bordered" required />
                    </div>


              <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="enter photo url"
                            name='photo'
                            className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="enter email" className="input input-bordered" name='email' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter password"
                            className="input input-bordered" 
                            name='password'
                            required
                            />
                             </div>
                             <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="confirm password"
                            className="input input-bordered" 
                            name='confirm'
                            required
                            />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have an account</Link>
                        </label>

                    </div>
                    {
                        error&&<p className='text-red-500'>{error}</p>
                    }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        
      </div>
    );
};

export default SignUp;