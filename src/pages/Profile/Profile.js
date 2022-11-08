import React, { useContext } from 'react';
import HeadTitle from '../../components/HeadTitle';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-base-200 min-h-[60vh] flex  justify-center items-center'>
            {/* <HeadTitle
                title='Profile'
                comment=''
            /> */}

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
                        <span className='text-primary text-xl'>5</span>
                    </div>
                    <div className='rounded-lg bg-white p-3 mt-10'>
                        <h1 className='text-2xl'>My Add services</h1>
                        <span className='text-primary text-xl'>5</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Profile;