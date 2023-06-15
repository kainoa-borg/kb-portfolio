"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


// import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper';

export default function ProjectsPage() {

    const andreaSitePreview = require('../../images/andrea-site-preview.png');
    const foodForwardPreview = require('../../images/food-forward-preview.png');
    const hackerNewsClonePreview = require('../../images/hacker-news-clone-preview.png');
    const raytracerPreview = require('../../images/ray-tracer-preview.png');

    return (
        <div className='flex pt-[8vh] h-[92vh]'>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{delay: 5000, disableOnInteraction: true}}>
                <SwiperSlide className='relative w-[100%]'>
                    <Image className='object-cover object-top lg:h-[100%] h-[60%] w-[100%]' src={andreaSitePreview}></Image>
                    <div className='absolute flex flex-col backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-1/3 w-[100%] top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-[#456573]/70'>
                        <h2 className='text-3xl text-center text-white font-mono'>Andrea Vancea Portfolio Site</h2>
                        <h2 className='text-xl text-center text-white font-mono'>Artist portfolio with custom styling</h2>
                        <Link className='p-4 mt-1 w-1/3 text-center text-white hover:bg-[#62929E] font-mono' href='https://kainoa-borg.github.io/andrea-site/'>Explore</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={foodForwardPreview}></Image>
                    <div className='absolute flex flex-col backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-1/3 w-[100%] top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-[#456573]/70'>
                        <h2 className='text-3xl z-10 text-center text-white font-mono'>Food Forward Tracker</h2>
                        <h2 className='text-xl z-10 text-center text-white font-mono'>Full-featured management software for a meal-planning company</h2>
                        <Link className='p-4 mt-1 w-1/3 text-center text-white hover:bg-[#62929E] font-mono' href='https://github.com/FoodDesertDatabase/FoodForwardTracker/'>View on Github</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={hackerNewsClonePreview}></Image>
                    <div className='absolute flex flex-col backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-1/3 w-[100%] top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-[#456573]/70'>
                        <h2 className='text-3xl z-10 text-center text-white font-mono'>Hacker News Clone</h2>
                        <h2 className='text-xl z-10 text-center text-white font-mono'>Functional clone of popular tech news site</h2>
                        <Link className='p-4 mt-1 w-1/3 text-center text-white hover:bg-[#62929E] font-mono' href='https://kainoa-borg.github.io/hacker-news-clone/'>Explore</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-top lg:h-[100%] h-[60%] w-[100%]' src={raytracerPreview}></Image>
                    <div className='absolute flex flex-col backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-1/3 w-[100%] top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-[#456573]/70'>
                        <h2 className='text-3xl z-10 text-center text-white font-mono'>Multi-Threaded Raytracing Project</h2>
                        <h2 className='text-xl z-10 text-center text-white font-mono'>CPU-parallel raytracer built with C++</h2>
                        <Link className='p-4 mt-1 w-1/3 text-center text-white hover:bg-[#62929E] font-mono' href='https://github.com/kainoa-borg/Simple-Multithreaded-Raytracer'>View on Github</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}