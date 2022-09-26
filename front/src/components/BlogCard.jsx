import './BlogCard.css'

import { Link } from 'react-router-dom'

import React from 'react'



const BlogCard = ({ posts }) => {

    return (

        <div className="blogCard">
            {posts.map((post) => (

                <div className="blogCard2" key={post._id}>

                    <div className="left">
                        <Link to={`/blog/post/${post._id}`}>
                            <img className="coverpost" src={post.cover} alt="" />
                        </Link>
                    </div>

                    <div className="right">

                        <div className="right-up">
                            <Link to={`/blog/post/${post._id}`}>
                                <h2>{post.titulo}</h2>
                            </Link>

                            <p>{post.fechaPublicacion}</p>

                        </div>

                        <div className="right-center">
                            <p>{post.intro}</p>

                        </div>

                        <div className="right-down">
                            <Link to={`/blog/post/${post._id}`}>
                                <button><h2>Leer más</h2></button>
                            </Link>

                        </div>


                    </div>
                </div>

            ))
            }
        </div>





    )
}

export default BlogCard