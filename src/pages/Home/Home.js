import React from 'react';
import { Link } from 'react-router-dom';
import Appoinment from '../../components/Appoinment';
import Banner from '../../components/Banner';
import Review from '../../components/Review/Review';
import ServiceCard from '../../components/ServiceCard';


const Home = () => {
    return (
        <div>
            <Banner />

            <div className='grid grid-cols-8 justify-center items-center w-11/12 mx-auto my-10 gap-2'>

                <div className='col-span-2 text-left'>
                    <span className=' text-primary font-semibold text-4xl border-b-2 border-primary '>Services</span>
                    <p className='text-2xl font-semibold my-5'>I provide the special tips and advice’s of heath care treatment and high level of best.</p>
                    
                    <Link to='/services' className='btn btn-primary'>All Services</Link>
                </div>


                <div className='col-span-6'>

                    <div className='grid grid-cols-3 gap-4'>
                        {
                            [1, 2, 3, 4, 5, 6, 7].slice(0, 3).map((service) => <ServiceCard
                                key={service}
                                service={service}
                            />)
                        }
                    </div>

                </div>

            </div>

            <Appoinment />

            <Review />

        </div>
    );
};

export default Home;