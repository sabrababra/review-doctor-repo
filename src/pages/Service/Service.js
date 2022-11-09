import React, { useContext, useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Service = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [serviceData, setServiceData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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
    }, [user]);

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
                        <button className='btn btn-primary'>Add Review</button>
                    </div>

                    <div className='divide' />

                    <div>
                        {
                            reviewsData.map((review) => <div key={review?._id}>
                                <h1>{review?.review}</h1>
                                <p>{review?.name}</p>
                                <p>{review?.rating}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;