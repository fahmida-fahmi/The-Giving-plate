import React from 'react';
import Title from '../../share/Title/Title';
// import { IoIosMail } from "react-icons/io";

const UserDashboard = () => {
    return (
        <div>
            <h1 className='uppercase text-center text-[36px] font-bold mt-20 text-white'>user dashboard</h1>
            <div className='w-5/6 mx-auto h-[45rem] rounded-xl my-10'>
                <div className='grid grid-cols-6 h-full rounded-xl'>
                    <div className='bg-black flex flex-col'>
                        <button className='mx-10 mb-5 mt-10 btn active:btn-accent bg-gray-700 text-white capitalize'>
                        {/* <IoIosMail /> */}
                            make request
                        </button>
                        <button className='bg-gray-700 focus:btn-accent btn mx-10 capitalize'>
                           create review
                        </button>
                    </div>
                    <div className='bg-gray-700 col-span-4'>
                            <h1 className='text-[36px] my-20 text-white ms-10'>Welcome back, </h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;