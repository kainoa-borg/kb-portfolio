"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import React from 'react';


// import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ProjectsPage() {

    const andreaSitePreview = require('../../images/andrea-site-preview.png');
    const andreaSitePreviewMobile = require('../../images/andrea-site-preview-mobile.png');
    const foodForwardPreview = require('../../images/food-forward-preview.png');
    const hackerNewsClonePreview = require('../../images/hacker-news-clone-preview.png');
    const hackerNewsClonePreviewMobile = require('../../images/hacker-news-clone-preview-mobile.png');
    const raytracerPreview = require('../../images/ray-tracer-preview.png');
    const superSorterPreview = require('../../images/super-sorter-preview.png');
    const speedrunIOPreview = require('../../images/speedrun-io-preview.png');
    const speedrunIOPreviewMobile = require('../../images/speedrun-io-preview-mobile.png');
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        console.log(window.innerWidth);
        setWindowWidth(window.innerWidth);
    }, [])

    return (
        <div className='flex pt-[8vh] h-[92vh]'>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{delay: 5000, disableOnInteraction: true}}>
                <SwiperSlide className='relative w-[100%]'>
                    <Image className='object-cover object-top lg:h-[100%] h-[60%] w-[100%]' src={andreaSitePreview}></Image>
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold text-center primary-text font-mono'>Andrea Vancea Portfolio Site</h2>
                        <h2 className='text-l text-center primary-text font-mono'>Artist portfolio with custom styling</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://kainoa-borg.github.io/andrea-site'>Explore</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={superSorterPreview}></Image>
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold z-10 text-center primary-text font-mono'>Super Sorter</h2>
                        <h2 className='text-l z-10 text-center primary-text font-mono'>Web-based sorting algorithm visualizer</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://kainoa-borg.github.io/super-sorter'>Explore</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={speedrunIOPreview}></Image> */}
                    {
                        windowWidth < 450 ?
                        <Image className='object-cover lg:h-[100%] h-[60%] w-[100%]' src={speedrunIOPreviewMobile}></Image>
                        :
                        <Image className='object-cover object-top lg:h-[100%] h-[60%] w-[100%]' src={speedrunIOPreview}></Image>
                    }
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold z-10 text-center primary-text font-mono'>Speedrun-IO</h2>
                        <h2 className='text-l z-10 text-center primary-text font-mono'>Speedrun info web-app using speedrun.com's public API</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://kainoa-borg.github.io/speedrun-io'>Explore</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={foodForwardPreview}></Image>
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold z-10 text-center primary-text font-mono'>Food Forward Tracker</h2>
                        <h2 className='text-l z-10 text-center primary-text font-mono'>Full-featured management software for a meal-planning company</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://github.com/FoodDesertDatabase/FoodForwardTracker/'>View on Github</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-left-top lg:h-[100%] h-[60%] w-[100%]' src={hackerNewsClonePreview}></Image>
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold z-10 text-center primary-text font-mono'>Hacker News Clone</h2>
                        <h2 className='text-l z-10 text-center primary-text font-mono'>Functional clone of popular tech news site</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://kainoa-borg.github.io/hacker-news-clone'>Explore</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='object-cover object-top lg:h-[100%] h-[60%] w-[100%]' src={raytracerPreview}></Image>
                    <div className='absolute flex flex-col lg:backdrop-blur-xl p-1 items-center justify-center lg:h-[30%] h-[40%] lg:w-[30%] w-[80%] md:px-10 top-[80%] right-[50%] translate-x-[50%] translate-y-[-50%] card'>
                        <h2 className='text-2xl font-bold z-10 text-center primary-text font-mono'>Multi-Threaded Raytracing Project</h2>
                        <h2 className='text-l z-10 text-center primary-text font-mono'>CPU-parallel raytracer built with C++</h2>
                        <a className='p-4 mt-3 mx-auto text-center primary-text primary-button font-mono transition ease-in-out' href='https://github.com/kainoa-borg/Simple-Multithreaded-Raytracer'>View on Github</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}