import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='banner-img carousel-item relative w-full'>
                    <img alt='' src="https://media.istockphoto.com/id/1329619660/photo/laptop-computer-screen-mockup-template-background-banner-man-hand-typing-laptop-computer-with.jpg?b=1&s=170667a&w=0&k=20&c=4HTTFF2JZAOCfydkz-P1Ol316fXRbLXVekLVOE_7HtE=" className=" w-full max-h-[500px] " />
                </div>
                <div className="w- absolute text-end transform -translate-y-1/2  right-28 top-28 display-block lg:display-none bg-gradient-to-r from-bg-500">
                    <h1 className='text-5xl text-white  my-4'>YOUR TOP CHOICE IN SAVING</h1>
                    <h1 className='text-4xl text-white '>YOUR HAPPINESS IS OUR SUCCESS</h1>
                    <h1 className='text-6xl text-white '>LAPTOP CORNER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='banner-img carousel-item relative w-full'>
                    <img alt='' src="https://www.teahub.io/photos/full/142-1426779_lock-screen-wallpaper-laptop.jpg" className="w-full max-h-[500px]" />
                </div>
                <div className="w- absolute text-end transform -translate-y-1/2  right-28 top-28 display-block lg:display-none">
                    <h1 className='text-5xl text-white  my-4'>YOUR TOP CHOICE IN SAVING</h1>
                    <h1 className='text-4xl text-white '>YOUR HAPPINESS IS OUR SUCCESS</h1>
                    <h1 className='text-6xl text-white '>LAPTOP CORNER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='banner-img carousel-item relative w-full'>
                    <img alt='' src="https://mms.businesswire.com/media/20190423005828/en/717753/5/Razer_Blade_15_%5B2019-2%5D_Advanced_Model_4K_OLED_Chroma_Crystals.jpg" className="w-full max-h-[500px]" />
                </div>
                <div className="w- absolute text-end transform -translate-y-1/2  right-28 top-28 display-block lg:display-none">
                    <h1 className='text-5xl text-white  my-4'>YOUR TOP CHOICE IN SAVING</h1>
                    <h1 className='text-4xl text-white '>YOUR HAPPINESS IS OUR SUCCESS</h1>
                    <h1 className='text-6xl text-white '>LAPTOP CORNER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='banner-img carousel-item relative w-full'>
                    <img alt='' src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&w=1000&q=80" className="w-full max-h-[500px]" />
                </div>
                <div className="w- absolute text-end transform -translate-y-1/2  right-28 top-28 display-block lg:display-none">
                    <h1 className='text-5xl text-white  my-4'>YOUR TOP CHOICE IN SAVING</h1>
                    <h1 className='text-4xl text-white '>YOUR HAPPINESS IS OUR SUCCESS</h1>
                    <h1 className='text-6xl text-white '>LAPTOP CORNER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;