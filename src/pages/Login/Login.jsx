import React from 'react';

const Login = () => {
    return (
        <div>
            <h1 className='text-center text-[36px] font-bold my-20 text-white'>Login</h1>

            <div>
                <form action="">
                    <div className='flex flex-col my-4'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@abc.com" className="input input-bordered hover:border-teal-400
                            focus:border-teal-400  focus:outline-none w-full my-1" />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="John Smith" className="input input-bordered hover:border-teal-400
                            focus:border-teal-400  focus:outline-none w-full my-1" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;