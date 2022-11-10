import React, { useContext, useEffect, useState } from 'react';
import HeadTitle from '../../components/HeadTitle.js';
import SingleReviewCard from '../../components/SingleReviewCard.js.js';
import { AuthContext } from '../../context/AuthProvider.js';
import UseTitle from '../../hooks/UseTitle.js';
import Loader from '../../Shared/Loader/Loader.js';

const Reviews = () => {
    UseTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [reviewsData, setReviewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getReviews = () => {
        setLoading(true);
        fetch(`https://y-plum-zeta.vercel.app/myReviews?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviewsData(data);
                setLoading(false);
            });
    }
    useEffect(() => {
        getReviews();
    }, [user?.uid]);

    return (
        <div className='bg-base-200'>


            <HeadTitle
                title='My Reviews'
                comment='See all my reviews'
            />
            {
                loading ? <Loader /> :
                    <div className='grid gird-cols-1 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                        {reviewsData.length > 0 ?
                            reviewsData.map((review) => <SingleReviewCard
                                key={review._id}
                                review={review}
                                getReviews={getReviews}
                            />)
                            :
                            <div className='min-h-[60vh] justify-center items-center col-span-1 lg:col-span-4 text-2xl'>
                                No reviews were added
                            </div>
                        }
                    </div>
            }


        </div>
    );
};

export default Reviews;