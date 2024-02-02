import React from 'react'
import databaseservice from '../appwrite/configuration'
import {Link} from "react-router-dom"

function PostCard({post}) {
  return (
    <Link to={`/post/${post.$id}`}>
         {/* {console.log(post.featuredImage)}  */}
         <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-4'>
            <div className='w-full justify-center mb-4 bg-white dark:bg-gray-800'>
                <img 
                src={databaseservice.getFilePreview(post.featuredImage)}
                alt={post.title}
                className='rounded-xl'
                 />
            </div>
            <h2 className='text-xl font-bold dark:text-gray-300'>{post.title}</h2>
         </div>
    </Link>
  )
}

export default PostCard