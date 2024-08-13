import React from 'react'
import './style.css'
import BlogItems from './BlogItem'

const Blog = ({blogs}) => {
  return (
    <div className='blog-wrap'>
      {blogs?.map((blog) =>  (
        <BlogItems  blog={blog} key={blog?.id}/>
      ))}
    </div>
  )
}

export default Blog
