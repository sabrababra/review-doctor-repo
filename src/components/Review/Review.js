import React from 'react';
import HeadTitle from '../HeadTitle';
import './Review.css';
const Review = () => {
    return (
        <div>
            <HeadTitle
                title='Reviews'
                comment='See What Are The Patients
            Saying About me'
            />

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