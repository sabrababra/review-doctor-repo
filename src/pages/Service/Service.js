import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Service = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [serviceData, setServiceData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    const [commentInput, setCommentInput] = useState('');
    const [ratingInput, setRatingInput] = useState(5);

    const [loading, setLoading] = useState(false);

    const getReviewsData = () => {
        setLoading(true);
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);

                if (data._id) {
                    console.log(data);

                    fetch(`http://localhost:5000/reviews?id=${data.service_id}`)
                        .then(res => res.json())
                        .then(revData => {
                            setReviewsData(revData);
                            console.log(reviewsData);
                        });
                }

                setLoading(false);
            });
    }

    useEffect(() => {
        getReviewsData();
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateData = {
            name: user?.displayName,
            img: user?.photoURL,
            email: user?.email,
            service_id: serviceData?.service_id,
            serviceName: serviceData?.title,
            comment: commentInput,
            rating: parseInt(ratingInput),
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                getReviewsData();
                toast.success('Update successfully');
            })

    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-base-300'>
            <div className='w-11/12 mx-auto grid grid-cols-3 my-10'>

                {/* details  */}
                <div className=' col-span-3 lg:col-span-2 bg-white text-left p-10 rounded-t-xl rounded-l-xl'>
                    <img className='w-full' src={serviceData?.img} alt="" />
                    <h1 className='text-2xl my-5 font-semibold'>Service Name: {serviceData?.title}</h1>
                    <p className='text-xl text-primary'>Price: {serviceData?.price}</p>
                    <p className='text-xl text-primary'>Rating: {serviceData?.rating}</p>
                    <p className='my-5'><span className='font-semibold'>Description:</span> {serviceData?.description}</p>
                </div>

                {/* reviews  */}
                <div className=' col-span-3 lg:col-span-1 bg-base-100 border-l-2 border-primary'>

                    <div className='w-10/12 mx-auto grid grid-cols-2 items-center text-2xl border-primary p-2  border-b-2'>
                        <p>Reviews</p>
                        <label htmlFor={user?.uid ? `addModal_${serviceData?._id}` : `errorModal_${serviceData?._id}`} className="btn btn-primary">
                            Add Review
                        </label>
                    </div>

                    <div className='divide' />

                    <div>
                        {
                            reviewsData.map((review) => <div
                                key={review?._id}
                                className='p-4'
                            >
                                <div className="card bg-gray-200">
                                    <div className="card-body">
                                        <p className='mb-5'>{review?.comment}</p>
                                        <div className="card-actions justify-start items-center">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src={review?.img} />
                                                </div>
                                            </div>
                                            <div className='text-left'>
                                                <p className='font-bold'>{review?.name}</p>
                                                <p>{review?.email}</p>
                                                <p className='font-semibold'>Rating: {review?.rating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h1></h1>

                                <div className='grid grid-cols-2 gap-4 items-center'>



                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>

            {/* modal for edit  */}
            <input type="checkbox" id={`addModal_${serviceData?._id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`addModal_${serviceData?._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="card w-full max-w-sm mx-auto  bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review comment</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Write your review"
                                        className="input input-bordered"
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
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

                                <div className="form-control mt-6">
                                    <button>
                                        <label htmlFor={`addModal_${serviceData?._id}`} className="btn btn-primary">Add review</label>
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>



            {/* modal for error  */}
            <input type="checkbox" id={`errorModal_${serviceData?._id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`errorModal_${serviceData?._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <h3 className="text-lg font-bold mb-10"
                        >Please login to add a review
                        </h3>

                        <div>
                            <Link
                                to='/login'
                                htmlFor={`errorModal_${serviceData?._id}`}
                                className=' mx-10 btn btn-error'>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;