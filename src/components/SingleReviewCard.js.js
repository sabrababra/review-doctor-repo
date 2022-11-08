import React from 'react';

const SingleReviewCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Service Name :</h2>
                <p>Rating: 5 star</p>
                <p className='mb-10'>Review: </p>
                <div className="card-actions justify-around">
                    <button className="btn btn-info">Edit</button>
                    <button className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewCard;