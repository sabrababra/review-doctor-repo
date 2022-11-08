import React from 'react';
import HeadTitle from '../../components/HeadTitle';
import ServiceCard from '../../components/ServiceCard';
import UseTitle from '../../hooks/UseTitle';

const Services = () => {
    UseTitle('Services')
    return (
        <div className='bg-base-200'>
            <HeadTitle
                title='Services'
                comment='Total: 10 Services'
            />

            <div className='grid grid-cols-4 gap-4 w-11/12 mx-auto my-10'>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((service) => <ServiceCard
                        key={service}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;