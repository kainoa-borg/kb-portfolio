"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper';

export default function Home() {
  
  const andreaSitePreview = require('../images/andrea-site-preview.png');
  const andreaSitePreviewMobile = require('../images/andrea-site-preview-mobile.png');
  const foodForwardPreview = require('../images/food-forward-preview.png');
  const hackerNewsClonePreview = require('../images/hacker-news-clone-preview.png');
  const hackerNewsClonePreviewMobile = require('../images/hacker-news-clone-preview-mobile.png');
  const raytracerPreview = require('../images/ray-tracer-preview.png');
  const superSorterPreview = require('../images/super-sorter-preview.png');
  const speedrunIOPreview = require('../images/speedrun-io-preview.png');
  const speedrunIOPreviewMobile = require('../images/speedrun-io-preview-mobile.png');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  }, [])

  return (
  // main div
   <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 h-screen'>
    
    {/* Welcome Blurb */}
    <div className='flex drop-shadow-2xl lg:h-[100%] h-[30vh]'>
      <div className='m-auto group'>
        <h1 className='text-center primary-text lg:text-3xl sm:text-3xl text-xl font-mono'><span className='inline-block transition ease-in-out duration-700 group-hover:scale-125'>Hey! 👋</span> I'm Kainoa Borges</h1>
        <h2 className='text-center primary-text lg:text-xl sm:text-xl text-md pt-4 font-mono'>Software Developer based in Denver, CO</h2>
      </div>
    </div>
    {/* Carousel Div */}
    <div>
      <div className='lg:h-[100%] h-[70vh]'>
        <Swiper navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{delay: 5000, disableOnInteraction: true}} className='h-[100%]'>
          <SwiperSlide>
            {
              windowWidth < 400 ? 
              <Image className='object-cover object-top h-[100%] w-[100%]' src={andreaSitePreviewMobile}></Image>
              :
              <Image className='object-cover object-top h-[100%] w-[100%]' src={andreaSitePreview}></Image>
            }
          </SwiperSlide>
          <SwiperSlide><Image className='object-cover object-left-top h-[100%] w-[100%]' src={superSorterPreview}></Image></SwiperSlide>
          <SwiperSlide>
            {
              windowWidth < 400 ?
              <Image className='object-cover object-[0% 50%] h-[100%] w-[100%]' src={speedrunIOPreviewMobile}></Image>
              :
              <Image className='object-cover object-top h-[100%] w-[100%]' src={speedrunIOPreview}></Image>
            }
          </SwiperSlide>
          <SwiperSlide><Image className='object-cover object-left-top h-[100%] w-[100%]' src={foodForwardPreview}></Image></SwiperSlide>
          <SwiperSlide><Image className='object-cover object-left-top h-[100%] w-[100%]' src={hackerNewsClonePreview}></Image></SwiperSlide>
          <SwiperSlide><Image className='object-cover object-top h-[100%] w-[100%]' src={raytracerPreview}></Image></SwiperSlide>
        </Swiper>
      </div>
    </div>
      
    </div>
  )
}
