import React from 'react';
import img1 from '../../assets/vision/pexels-photo-1981111.webp';
import img2 from '../../assets/vision/pexels-photo-6646917 (1).webp';
const OurVision = () => {
    return (
        <div className='my-52 mx-auto'>
            <h1 className='text-6xl uppercase font-bold text-center text-white'>our vision</h1>
            <div className='w-4/5 mx-auto grid grid-cols-5 gap-10 my-24'>
                <div className=' col-span-3'>
                    <h1 className='text-7xl md:text-9xl font-[700] opacity-10'>01</h1>
                    <h2 className='text-5xl font-bold my-4'>HARMONY FOR HOUNDS AND FELINES</h2>
                    <div className='me-10'>
                        <p className='text-xl'>
                            With 80 rescue volunteers, 2 shelter homes capable of housing 600 homeless animals, and 3 medical service centers staffed by 8 dedicated veterinary doctors, we ensure the health and well-being of over 450 needy animals.
                        </p>
                        <p className='text-xl my-5'>

                            Alongside our commitment to humans, our organization is also dedicated to animal welfare. Our vision encompasses a world where compassion knows no species boundaries, eradicating hunger and suffering for all. Through our dedicated efforts, including feeding of needy animals with nutritious animal-friendly foods, we alleviate the plight of needy animals, providing not only sustenance but also essential medical care and shelter. Our holistic approach aims to cultivate empathy and foster a society where the well-being of every living being is cherished and protected.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end col-span-2'>
                    <img className='object-cover' src={img1} alt="" />
                </div>
            </div>
            <div className='w-4/5 mx-auto grid grid-cols-5 gap-10 my-24'>
                <div className='flex col-span-2'>
                    <img className='object-cover' src={img2} alt="" />
                </div>
                <div className='flex flex-col items-end  col-span-3'>
                    <h1 className='text-7xl md:text-9xl font-[700] opacity-10'>01</h1>
                    <h2 className='text-5xl font-bold my-4'>A TRUE FRIEND IN NEED</h2>
                    <div className='text-right ms-10'>
                        <p className='text-xl '>
                            Having more than 200 food suppliers and 60 volunteers, we serve nutritious and balanced diets to 4 assisted living facilities with over 400 elderly individuals, 6 orphanages with more than 600 children, and an average of 200 homeless people on a regular basis.
                        </p>
                        <p className='text-xl my-5'>

                            Our organization is dedicated to human welfare and envisions a future where no individual experiences hunger. Through tireless efforts, we collect surplus food from restaurants and events, transforming it into nourishing meals for the less fortunate. We strive to eliminate hunger by bridging the gap between food waste and the needs of underprivileged individuals. With compassion and determination, we envision a society where every person has access to an ample supply of nutritious food, ensuring their well-being and preserving their dignity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVision;