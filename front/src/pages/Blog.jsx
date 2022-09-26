import BlogCard from '../components/BlogCard'
import { useEffect, useState } from "react"
import { API } from '../services/API'
import "./Blog.css"



import React from 'react'


const Blog = () => {

  const [allPosts, setPosts] = useState([])



  const getAllPosts = async () => {
    API.get("/blog").then((resPosts) => {
      setPosts(resPosts.data.results.posts)
    })
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  
  return (

    <section>
      <div className="encabezadoblog">
        <h2>El Blog de UNO</h2>

      </div>

      <div className="BlogCard1">

        <BlogCard posts={allPosts} />

      </div>



    </section>

  )
}

export default Blog