import React from 'react';

const SingleReviewCard = ({ review }) => {

    const handleDeleteReview = (id) => {
        console.log('delete id:', id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ok');
    };


    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Service Name :</h2>
                    <p>Rating: 5 star</p>
                    <p className='mb-10'>Review: </p>

                    <div className="card-actions justify-around">
                        <label
                            htmlFor={`editModal_${review}`}
                            className="btn btn-info">
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
                                        value='service name for api'
                                        disabled
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Service image url"
                                        className="input input-bordered"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="enter your Service price"
                                        className="input input-bordered"
                                    />
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
                                onClick={() => handleDeleteReview(review)}>
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