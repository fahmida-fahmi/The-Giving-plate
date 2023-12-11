import React from 'react';
import Title from '../../share/Title/Title';
import { Swiper } from 'swiper/types';
import { SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    return (
        <div>
            <Title
                {"VOICES OF SATISFACTION"}
            ></Title>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className='text-6xl my-10'></FaQuoteLeft>
                                <p className='text-center px-32'>{review.details}</p>
                                <h1 className='text-3xl py-3 text-[#cd9003]'>{review.name}</h1>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;