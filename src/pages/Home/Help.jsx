import React from 'react';
import img from '../../assets/help/img.webp';
const Help = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>

            <h1 className='text-center text-[36px] font-bold my-20 text-white'>NEED HELP? CONTACT US</h1>
            <div className='grid grid-cols-2 gap-10'>
                <div className="w-full rounded-xl overflow-hidden h-[30rem]">
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={img} alt="" />
                    </div>
                </div>
                <div>
                    <p>
                        If you require assistance or have any questions, please feel free to send us a message.
                    </p>
                    <form action="" className='block w-full '>
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="John Smith" className="input input-bordered hover:border-teal-400
                            focus:border-teal-400  focus:outline-none w-full my-1" />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="example@abc.com" className="input input-bordered hover:border-teal-400
                            focus:border-teal-400  focus:outline-none w-full my-1" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Message</label>
                            <textarea className="textarea 
                            textarea-bordered hover:border-teal-400
                            focus:border-teal-400  focus:outline-none w-full my-1" placeholder="Message" rows='5'></textarea>
                        </div>
                        <input type="submit" className='input input-bordered teal-bg text-white hover:bg-teal-600
                        w-full my-1' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Help;
