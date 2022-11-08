import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const AddService = () => {
    UseTitle('Add Services');
    return (
        <div className='min-h-screen bg-base-200 flex justify-center items-center'>
            <div>
                <h1 className="text-5xl font-bold my-5">Add New Services</h1>
                <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                    <form >
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter services name"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image (URL)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Service image url"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter your Service price"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter your Service details"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;