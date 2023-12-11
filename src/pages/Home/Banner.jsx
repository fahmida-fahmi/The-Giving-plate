import img3 from '../../assets/banner/img3.webp'

import img4 from '../../assets/banner/img4.webp'
import img5 from '../../assets/banner/img5.webp'
import img6 from '../../assets/banner/img6.webp'
import img7 from '../../assets/banner/img7.webp'
import { motion } from "framer-motion"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// import required modules
import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function Banner() {
    return (
        <div className='swiper-container'>
            <Swiper
                cssMode={true}
                loop={true}
                freeMode={true}
                navigation={{
                    color: 'teal',
                    clickable: true
                }}
                pagination={{
                    backgroundColor: 'teal',
                    clickable: true

                }}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                modules={[FreeMode,Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-black '>
                        <img src={img3} alt="" />
                        <div className='absolute text-white grad w-full h-full'>
                            <div className='my-auto absolute top-1/4'>
                                <h1 className='leading-[120px] text-[120px] uppercase font-bold px-[550px]'>empower orphaned children</h1>
                                <p className='text-2xl px-[650px] py-10'>
                                    Empower orphaned children by contributing to our orphanage programs. Your donations provide essential resources, education, healthcare, and a loving environment for children in need. Join us in giving them a brighter future and a place to call home.
                                </p>
                                <motion.button
                                 initial={{y:-50}}
                                 animate={{ y: 0 }}
                                className="text-white uppercase text-xl btn btn-accent mx-96">Learn more</motion.button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black '>
                        <img src={img4} alt="" />
                        <div className='absolute text-white grad w-full h-full'>
                            <div className='my-auto absolute top-1/4'>
                                <h1 className='leading-[100px] text-[120px] uppercase font-bold px-[550px]'>Support Animal Welfare</h1>
                                <p className='text-2xl px-[650px] py-10'>
                                    Make a difference in the lives of animals by supporting our animal welfare initiatives. Your donations help us provide food, shelter, medical care, and love to abandoned and neglected animals. Join us in creating a better world for our furry friends.
                                </p>
                                <button className="text-white uppercase text-xl btn btn-accent  mx-96">Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black '>
                        <img src={img6} alt="" />
                        <div className='absolute text-white grad w-full h-full'>
                            <div className='my-auto absolute top-1/4'>
                                <h1 className='leading-[100px] text-[120px] uppercase font-bold px-[550px]'>Support the Elderly</h1>
                                <p className='text-2xl px-[650px] py-10'>
                                    Make a difference in the lives of animals by supporting our animal welfare initiatives. Your donations help us provide food, shelter, medical care, and love to abandoned and neglected animals. Join us in creating a better world for our furry friends.
                                </p>
                                <button className="text-white uppercase text-xl btn btn-accent  mx-96">Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black '>
                        <img src={img5} alt="" />
                        <div className='absolute text-white grad w-full h-full'>
                            <div className='my-auto absolute top-1/4'>
                                <h1 className='leading-[100px] text-[120px] uppercase font-bold px-[550px]'>Protect the Environment</h1>
                                <p className='text-2xl px-[650px] py-10'>
                                    Support our environmental conservation efforts to preserve and protect our planet. Your donations help us plant trees, clean up ecosystems, promote sustainable practices, and raise awareness about environmental issues. Join us in creating a greener and healthier world.
                                </p>
                                <button className="text-white uppercase text-xl btn btn-accent  mx-96">Learn more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black '>
                        <img src={img7} alt="" />
                        <div className='absolute text-white grad w-full h-full'>
                            <div className='my-auto absolute top-1/4'>
                                <h1 className='leading-[100px] text-[120px] uppercase font-bold px-[550px]'>Conserve Wildlife Habitats</h1>
                                <p className='text-2xl px-[650px] py-10'>
                                    Make a positive impact on wildlife conservation by supporting our efforts to protect natural habitats. Your donations help us preserve ecosystems, conduct research, and promote sustainable coexistence with wildlife. Join us in safeguarding the diversity of our planet.
                                </p>
                                <motion.button 
                                
                                initial={{y:-50}}
                                animate={{ y: 0 }}

                                className="text-white uppercase text-xl btn btn-accent more mx-96">Learn more</motion.button>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
