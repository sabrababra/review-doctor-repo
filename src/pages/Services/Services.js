import React, { useContext, useEffect, useState } from 'react';
import HeadTitle from '../../components/HeadTitle';
import ServiceCard from '../../components/ServiceCard';
import { AuthContext } from '../../context/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import Loader from '../../Shared/Loader/Loader';

const Services = () => {
    UseTitle('Services');
    const { user } = useContext(AuthContext);
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://y-plum-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
                setLoading(false);
            });
    }, [user?.uid]);


    return (
        <>

            {
                loading ? <Loader />
                    :

                    <div className='bg-base-200'>
                        <HeadTitle
                            title='Services'
                            comment={servicesData.length}


                        />

                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                            {
                                servicesData.map((service) => <ServiceCard
                                    key={service._id}
                                    service={service}
                                />)
                            }
                        </div>

                    </div>
            }
        </>
    );
};

export default Services;