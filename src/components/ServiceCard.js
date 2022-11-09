import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, img, description, price, rating } = service;

    return (
        <div className="card bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                </PhotoView>
            </PhotoProvider>



            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-primary'>Price: {price}</p>
                <p className='text-xl'>Rating: {rating}</p>
                <p>{description.slice(0, 100)}...</p>


                <div className="card-actions">
                    <Link to={`/service/${service._id}`} className="btn btn-primary">Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;