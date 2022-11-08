import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    

    return (
        <div className="card bg-base-100 shadow-xl">

            <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">Service Name</h2>
                <p>Service </p>


                <div className="card-actions">
                    <Link to={`/service/${service}`} className="btn btn-primary">Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;