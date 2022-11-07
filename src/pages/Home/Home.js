import React from 'react';
import Appoinment from '../../components/Appoinment';
import Banner from '../../components/Banner';
import Review from '../../components/Review';
import ServiceCard from '../../Shared/ServiceCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <Appoinment></Appoinment>
            <Review></Review>
        </div>
    );
};

export default Home;