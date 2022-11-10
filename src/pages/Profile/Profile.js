import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../../components/HeadTitle';
import { AuthContext } from '../../context/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import Loader from '../../Shared/Loader/Loader';

const Profile = () => {
    UseTitle('Profile');
    const { user, loading } = useContext(AuthContext);
    const [serviceData, setServiceData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    const getServicesData = () => {
        fetch('https://y-plum-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            });
    }

    const getReviewsData = () => {
        if (user?.email) {
            fetch(`https://y-plum-zeta.vercel.app/myReviews?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setReviewsData(data);
                });
        }

    }

    useEffect(() => {
        getServicesData();
        getReviewsData();
    }, [user?.uid]);

    return (
        <div className='bg-base-200 min-h-[60vh] flex  justify-center items-center'>

            {
                loading ?
                    <Loader />
                    :
                    <div className='grid grid-cols-5 gap-4 w-11/12 mx-auto text-center'>

                        <div className='col-span-3 rounded-lg bg-white p-5'>
                            <div className="avatar mb-5">
                                <div className="w-32 rounded">
                                    <img className='' src={user?.photoURL} alt="" />
                                </div>
                            </div>
                            <h1 className='text-2xl '>Name: {user?.displayName}</h1>
                            <p className='text-xl pb-2'>Email: {user?.email}</p>
                        </div>

                        <div className='col-span-2 my-auto'>
                            <div className='rounded-lg bg-white p-3'>
                                <h1 className='text-2xl'>My Reviews</h1>
                                <h1 className='text-primary text-xl'>{reviewsData?.length}</h1>
                                <Link to='/reviews' className='btn btn-primary'>See my reviews</Link>
                            </div>
                            <div className='rounded-lg bg-white p-3 mt-10'>
                                <h1 className='text-2xl'>All services</h1>
                                <h1 className='text-primary text-xl'>{serviceData?.length}</h1>
                                <Link to='/services' className='btn btn-primary'>See All services</Link>

                            </div>

                        </div>
                    </div>

            }


        </div>
    );
};

export default Profile;