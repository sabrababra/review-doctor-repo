import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/notfound.png';
const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img style={{width:'30%'}} src={notFound} alt="" />
            <Link to='/' className=' text-decoration-none fs-3' >Go back to Home page</Link>
        </div>
    );
};

export default NotFound;