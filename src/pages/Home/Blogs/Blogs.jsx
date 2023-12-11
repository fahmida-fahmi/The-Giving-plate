import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/blogs')
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                setBlogs(data)})
    },[])
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-center text-[36px] font-bold my-20 text-white'>Blogs</h1>
            <div className='grid grid-cols-4 gap-10'>
                {blogs.map(blog => <Blog
                    key={blog._id}
                    blog ={blog}
                ></Blog>)}

            </div>
        </div>
    );
};

export default Blogs;