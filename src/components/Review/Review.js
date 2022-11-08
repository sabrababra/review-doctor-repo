import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div>
            <div className=' mt-20 '>
                <span className=' text-primary font-semibold text-5xl border-b-2 border-primary '>Reviews</span>
                <h1 className='text-2xl mt-3  '>See What Are The Patients
                    Saying About me</h1>
            </div>
            <div className="flex">
                <div className="comments">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, placeat quisquam? Animi sunt, dignissimos est sit reiciendis iste ipsa error?
                </div>
                <div className="profile">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pinimg.com/originals/47/b1/47/47b147b6d88fea4bcd32344251784b24.jpg" alt='' />
                        </div>
                    </div>

                    {/* <img src='https://i.pinimg.com/originals/47/b1/47/47b147b6d88fea4bcd32344251784b24.jpg' alt="" /> */}
                    <a href="#">John V. Bellanmy</a>
                    <span>Founder & CEO</span>
                </div>
            </div>
        </div>
    );
};

export default Review;