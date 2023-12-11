import React from 'react';
import img1 from '../../assets/providers/img1.webp'

const Consumers = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-center text-[36px] font-bold my-20 text-white'>Top Consumers</h1>
                <div className='grid grid-cols-4 w-4/5 mx-auto gap-10'>
                    <div className="card bg-base-100 shadow-xl border border-gray-500">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kaaktaal Student Collabatics</h2>
                            <p>Address: Dhaka, Bangladesh</p>
                            <p className='py-5'>Total Contributions: 1200</p>
                            <div className="card-actions justify-start mt-3 md:mt-0">
                                <a className=" btn btn-accent text-white text-lg">View details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-500">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kaaktaal Student Collabatics</h2>
                            <p>Address: Dhaka, Bangladesh</p>
                            <p className='py-5'>Total Contributions: 1200</p>
                            <div className="card-actions justify-start mt-3 md:mt-0">
                                <a className=" btn btn-accent text-white text-lg">View details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-500">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kaaktaal Student Collabatics</h2>
                            <p>Address: Dhaka, Bangladesh</p>
                            <p className='py-5'>Total Contributions: 1200</p>
                            <div className="card-actions justify-start mt-3 md:mt-0">
                                <a className=" btn btn-accent text-white text-lg">View details</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-500">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kaaktaal Student Collabatics</h2>
                            <p>Address: Dhaka, Bangladesh</p>
                            <p className='py-5'>Total Contributions: 1200</p>
                            <div className="card-actions justify-start mt-3 md:mt-0">
                                <a className=" btn btn-accent text-white text-lg">View details</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Consumers;