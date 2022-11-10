import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Appoinment from '../../components/Appoinment';
import Banner from '../../components/Banner';
import Review from '../../components/Review/Review';
import ServiceCard from '../../components/ServiceCard';
import { AuthContext } from '../../context/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import Loader from '../../Shared/Loader/Loader';


const Home = () => {
    UseTitle('Home');
    const { user } = useContext(AuthContext);
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://y-plum-zeta.vercel.app/homeServices?size=3')
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
                setLoading(false);
            });
    }, [user]);

    return (
        <>
            {
                loading ? <Loader />
                    :


                    <div>
                        <Banner />

                        <div className='grid grid-cols-8 justify-center items-center w-11/12 mx-auto my-10 gap-2'>

                            <div className='col-span-8 lg:col-span-2 lg:text-left'>
                                <span className=' text-primary font-semibold text-4xl border-b-2 border-primary '>Services</span>
                                <p className='text-2xl font-semibold my-5'>I provide the special tips and advice’s of heath care treatment and high level of best.</p>

                                <Link to='/services' className='btn btn-primary'>All Services</Link>
                            </div>


                            <div className='col-span-8 lg:col-span-6'>

                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                    {
                                        servicesData.map((service) => <ServiceCard
                                            key={service._id}
                                            service={service}
                                        />)
                                    }
                                </div>

                            </div>

                        </div>

                        <Appoinment />

                        <Review />

                    </div>
            }
        </>
    );
};

export default Home;