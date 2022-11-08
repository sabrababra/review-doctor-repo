import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import loginImg from '../../assets/login.jpg';

const Login = () => {
    const [error, setError] = useState('');
    const { signInWithEmail, providerLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email, password)
            .then(res => {
                const user = res.user;
                form.reset();
                toast.success('Login successfully');
                console.log(user);
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })


    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                //console.log(user);
                // form.reset();
                navigate(from, { replace: true });
                toast.success('Login successfully');
            })
            .catch(error => {
                console.error('error: ', error);
                setError(error.message);
            })
    }

    const gitHubProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(res => {
                const user = res.user;
                //console.log(user);
                // form.reset();
                navigate(from, { replace: true });
                toast.success('Login successfully');
            })
            .catch(error => {
                console.error('error: ', error);
                setError(error.message);
            })
    }

    return (
        <div className="flex min-h-screen bg-base-200 justify-center items-center">

            <div className='w-10/12 mx-auto p-5 rounded-xl shadow-lg bg-white grid grid-cols-12 justify-center items-center '>

                <div className='col-span-12 lg:col-span-6'>
                    <img className='w-full' src={loginImg} alt="" />
                </div>


                <div className=' col-span-12 lg:col-span-6'>
                    <div className="text-center mb-3">
                        <h1 className="text-5xl m-0 p-0 font-bold">Login now!</h1>
                    </div>
                    {/* bg-[#FF735C] */}
                    <div className=" bg-base-100 rounded-lg">
                        <div className="card-body">

                            <form onSubmit={handleLogin}>
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

                                    <label className="label">
                                        <span>
                                            Don't have any account?
                                            <Link to='/signup' className="text-blue-500 link link-hover ml-1">Register Now</Link>
                                        </span>
                                    </label>

                                </div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>

                            <div className="divider">OR</div>

                            <div className=" card-actions justify-evenly">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="mb-5">
                                    <FaGoogle className=' text-4xl hover:text-primary ' />
                                </button>

                                <button
                                    onClick={handleGithubSignIn}
                                    className="">
                                    <FaGithub className=' text-4xl hover:text-primary' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;