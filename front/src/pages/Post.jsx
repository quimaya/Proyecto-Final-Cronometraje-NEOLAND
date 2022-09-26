import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Post.css'
import { Link } from 'react-router-dom'


const Post = () => {

const {id} = useParams()

const [post, setPost] = useState([])

const urlByID= 'http://localhost:8080/api/blog/id'

const getPost = async () => {
    const peticion = await axios.get(`${urlByID}/${id}`)
    const data = peticion.data.data.post
    console.log(peticion)
    setPost(data)
}

useEffect(() => {
    getPost()
    console.log(post)
}, [])

    return (
        <section className="postContainer">
            <h2 className="tituloPost">{post.titulo}</h2>
            <img src={post.cover} alt={post.cover} />
            <p>{post.contenido}</p>
        </section>
    )
}

export default Post