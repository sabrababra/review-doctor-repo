import { comment } from 'postcss';
import React from 'react';

const HeadTitle = ({ title, comment }) => {
    return (
        <div className='mt-20'>
            <span className=' text-primary font-semibold text-4xl border-b-2 border-primary '>{title}</span>
            <h1 className='text-2xl mt-3  '>{comment}</h1>
        </div>
    );
};

export default HeadTitle;