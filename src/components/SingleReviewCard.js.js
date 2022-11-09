import React, { useState } from 'react';
import { toast } from 'react-toastify';


const SingleReviewCard = ({ review, getReviews }) => {
    const { _id, comment, rating, serviceName } = review;
    const [commentInput, setCommentInput] = useState(comment || '');
    const [ratingInput, setRatingInput] = useState(rating || 5);

    const handleDeleteReview = (id) => {
        console.log('delete id:', id);

        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                getReviews();
                toast.error('Delete successfully');
            })

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateData = {
            comment: commentInput,
            rating: parseInt(ratingInput)
        };

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                getReviews();
                toast.success('Update successfully');
            })

    };


    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Service Name : {serviceName}</h2>
                    <p>Rating: {rating}</p>
                    <p className='mb-10'>Review: {comment}</p>

                    <div className="card-actions justify-around">
                        <label
                            htmlFor={`editModal_${review}`}
                            className="btn btn-info"
                        >
                            Edit
                        </label>

                        <label
                            htmlFor={`deleteModal_${review}`}
                            className="btn btn-error">
                            Delete
                        </label>
                    </div>

                </div>
            </div>



            {/* modal for edit  */}
            <input type="checkbox" id={`editModal_${review}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`editModal_${review}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="card w-full max-w-sm mx-auto  bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name:</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter services name"
                                        className="input input-bordered"
                                        value={serviceName}
                                        disabled
                                    />
                                </div>

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
                                        <label htmlFor={`editModal_${review}`} className="btn btn-primary">Update</label>
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>





            {/* modal for delete  */}
            <input type="checkbox" id={`deleteModal_${review}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`deleteModal_${review}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <h3 className="text-lg font-bold mb-10"
                        >Are your sure delete this review?
                        </h3>

                        <div>
                            <label
                                htmlFor={`deleteModal_${review}`}
                                className=' mx-10 btn btn-error'
                                onClick={() => handleDeleteReview(_id)}>
                                Yes
                            </label>
                            <label
                                htmlFor={`deleteModal_${review}`}
                                className=' mx-10 btn btn-secondary'>
                                No
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
};

export default SingleReviewCard;