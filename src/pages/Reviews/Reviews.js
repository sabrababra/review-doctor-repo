import React, { useContext, useEffect, useState } from 'react';
import HeadTitle from '../../components/HeadTitle.js';
import SingleReviewCard from '../../components/SingleReviewCard.js.js';
import { AuthContext } from '../../context/AuthProvider.js';
import UseTitle from '../../hooks/UseTitle.js';

const Reviews = () => {
    UseTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [reviewsData, setReviewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getReviews = () => {
        setLoading(true);
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewsData(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        getReviews();
    }, [user]);

    return (
        <div className='bg-base-200'>


            <HeadTitle
                title='My Reviews'
                comment='See all my reviews'
            />

            <div className='grid gird-cols-1 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                {
                    reviewsData.map((review) => <SingleReviewCard
                        key={review._id}
                        review={review}
                        getReviews={getReviews}
                    />)
                }
            </div>

        </div>
    );
};

export default Reviews;