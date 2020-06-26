import React from 'react'
import './Post.css'

const Post = ({posts}) => {

    return(
        <li className='blog-title'>
            <h1>{posts.title}</h1>
            <a 
                href={posts.link}
                target='_blank' 
                rel='noopener noreferrer'
            >
                Leer
            </a>
            <p>{posts.author}</p>
        </li>
    )
}

export default Post