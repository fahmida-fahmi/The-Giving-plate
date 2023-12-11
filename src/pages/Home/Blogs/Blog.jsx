import React from 'react';

const Blog = ({ blog }) => {
    const { title, image_url, author, content, date } = blog
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-500">
            
            <div className="w-full rounded-xl overflow-hidden h-[10rem]">
                <div className='w-full h-full rounded-xl overflow-hidden'>
                <figure><img className='object-contain w-full h-full'  src={image_url} alt="Shoes" /></figure>
                </div>
            </div>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between py-3 border-b border-gray-400'>
                    <p>{author}</p>
                    <p>{date.split('T')[0]}</p>

                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Blog;