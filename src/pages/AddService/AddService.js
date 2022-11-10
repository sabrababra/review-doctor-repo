import { async } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const AddService = () => {
    UseTitle('Add Services');
    const { user } = useContext(AuthContext);
    const [serviceData, setServiceData] = useState([]);
    const [ratingInput, setRatingInput] = useState(5);

    useEffect(() => {
        fetch('https://y-plum-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            });
    }, [user?.uid]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const updateData = {
            service_id: await serviceData.length + 1,
            title: title,
            img: img,
            price: parseInt(price),
            rating: parseInt(ratingInput),
            description: description
        };
        console.log(updateData);

        
        fetch('https://y-plum-zeta.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added successfully');
                form.reset()
                setRatingInput(5)
            })

    };

    return (
        <div className='min-h-screen bg-base-200 flex justify-center items-center'>
            <div>
                <h1 className="text-5xl font-bold my-5">Add New Services</h1>
                <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter services name"
                                    className="input input-bordered"
                                    name='title'
                                    required
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
                                    name='img'
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="enter your Service price"
                                    className="input input-bordered"
                                    name='price'
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <select
                                    className="select select-info w-full max-w-xs"
                                    value={ratingInput}
                                    onChange={(e) => setRatingInput(e.target.value)}
                                >
                                    <option disabled selected>Select Star</option>
                                    <option value={1}>1 Star</option>
                                    <option value={2}>2 Star</option>
                                    <option value={3}>3 Start</option>
                                    <option value={4}>4 Start</option>
                                    <option value={5}>5 Start</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="enter your Service details"
                                    className="input input-bordered"
                                    name='description'
                                    required
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