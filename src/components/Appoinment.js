import React from 'react';
import mobile from '../assets/mobile.png'
import women from '../assets/women.png'
const Appoinment = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-12">
                <div className="text-center col-span-12 lg:col-span-7 ">
                    <div className=' relative '>
                        <img src={mobile} alt="" />
                        <img className=' absolute bottom-0 right-0 ' src={women} alt="" />
                    </div>
                </div>
                <div className=' col-span-12 lg:col-span-5 '>
                    <h1 className="text-5xl font-bold my-5">Book Appointment</h1>
                    <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100">


                        <form >
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Doctor</span>
                                    </label>
                                    <input type="text" placeholder="select doctor" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" placeholder="select service" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input type="text" placeholder="enter your name" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="enter your phone number" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Appointment Now</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;