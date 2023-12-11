import React from 'react';
import img1 from '../../assets/stroies/img1.webp'

const OurStory = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-center text-[36px] font-bold my-20 text-white'>Our Stories</h1>

            <div className='grid grid-cols-5 gap-10'>

                <div className="w-full rounded-xl overflow-hidden h-[20rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img1} alt="" />
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden h-[20rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img1} alt="" />
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden h-[20rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img1} alt="" />
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden h-[20rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img1} alt="" />
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden h-[20rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img1} alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-center text-[6rem] text-gray-400 uppercase font-bold'>we are <span className='teal'>animals feeds</span> </h1>
                <div className='grid grid-cols-2 gap-10'>
                    <p>
                        With 80 rescue volunteers, 2 shelter homes capable of housing 600 homeless animals, and 3 medical service centers staffed by 8 dedicated veterinary doctors, we ensure the health and well-being of over 450 needy animals.
                    </p>
                    <p>
                        Alongside our commitment to humans, our organization is also dedicated to animal welfare. Our vision encompasses a world where compassion knows no species boundaries, eradicating hunger and suffering for all. Through our dedicated efforts, including feeding of needy animals with nutritious animal-friendly foods, we alleviate the plight of needy animals, providing not only sustenance but also essential medical care and shelter. Our holistic approach aims to cultivate empathy and foster a society where the well-being of every living being is cherished and protected.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;