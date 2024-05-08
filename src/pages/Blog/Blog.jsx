import React from 'react'

import Banner from "./components/Banner";
import Blogs from './components/Blogs';

import blogList from '../../assets/blogs/bola/Blogs'

import './Blog.css'

const Blog = () => {

  return (<>
    <Banner mainBlog1={blogList[0]} secondaryBlogs1={blogList.slice(1, 4)}/>
    <Blogs blogList={blogList.slice(4)} />
  </>
  )
}

export default Blog