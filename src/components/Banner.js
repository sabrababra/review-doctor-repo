import React from 'react';
import banner from '../assets/banner.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
                <div className=" grid grid-cols-12  w-10/12 mx-auto  ">

                    <div className=' col-span-12 lg:col-span-7  my-auto'>
                        <p className="py-6 text-2xl">I Provide All Health Care Solution</p>
                        <h1 className="text-5xl font-bold leading-[50px] ">Protect Your Health And Take Care To Of Your Health</h1>
                        <button className="btn btn-primary mt-10">Read more</button>
                    </div>


                    <img src={banner} alt='' className=" w-11/12 mx-auto col-span-12 lg:col-span-5" />
                </div>
            </div>
        </div>
    );
};

export default Banner;