import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import loginImg from '../../assets/login.jpg';
import UseTitle from '../../hooks/UseTitle';

const SignUp = () => {

    const { createProviderWithEmail, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    UseTitle('Register')

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password === confirm) {
            setError('');
            createProviderWithEmail(email, password)
                .then(res => {
                    const user = res.user;
                    handleUpdateUserProfile(name, photo);
                    toast.success('Registration complete!');
                    form.reset();
                    console.log(user);
                    setError('');
                })
        } else {
            setError('Password does not match with confirm password');
        }

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));

        }
    }

    return (
        <div className="flex min-h-screen bg-base-200 justify-center items-center">

            <div className='w-10/12 mx-auto p-5 rounded-xl shadow-lg bg-white grid grid-cols-12 justify-center items-center '>

                <div className='col-span-12 lg:col-span-6'>
                    <img className='w-full' src={loginImg} alt="" />
                </div>


                <div className=' col-span-12 lg:col-span-6'>
                    <div className="text-center mb-3">
                        <h1 className="text-5xl m-0 p-0 font-bold">Register now!</h1>
                    </div>
                    <div className=" bg-base-100 rounded-lg">
                        <div className="card-body">

                            <form onSubmit={handleRegister}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter name"
                                        className="p-3 bg-white  border-l-4 border-primary"
                                        name='name'
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter Photo Url"
                                        className="p-3 bg-white  border-l-4 border-primary"
                                        name='photo'
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="enter email"
                                        className="p-3 bg-white  border-l-4 border-primary"
                                        name='email'
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="enter password"
                                        className="p-3 bg-white  border-l-4 border-primary"
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
                                        placeholder="enter your password again"
                                        className="p-3 bg-white  border-l-4 border-primary"
                                        name='confirm'
                                        required
                                    />
                                    <label className="label">
                                        <span>
                                            Already have an account?
                                            <Link to='/login' className="text-blue-500 link link-hover ml-1">Login Now</Link>
                                        </span>
                                    </label>

                                </div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;