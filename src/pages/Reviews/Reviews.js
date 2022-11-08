import React from 'react';
import HeadTitle from '../../components/HeadTitle.js';
import SingleReviewCard from '../../components/SingleReviewCard.js.js';
import UseTitle from '../../hooks/UseTitle.js';

const Reviews = () => {
    UseTitle('Reviews');
    return (
        <div className='bg-base-200'>


            <HeadTitle
                title='My Reviews'
                comment='See all my reviews'
            />

            <div className='grid gird-cols-1 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((review) => <SingleReviewCard
                        key={review}
                        review={review}
                    />)
                }
            </div>

        </div>
    );
};

export default Reviews;