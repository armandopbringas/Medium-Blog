import React from 'react'
import './Post.css'

const Post = ({posts}) => {

    return(
        <div className='blogCard'>
            <img 
                style={ { width: '100%', height: '50%' } }
                src={posts.thumbnail}
                className='blogImg' 
            />
            <div className='infoContainer'>
                <h1>{posts.title}</h1>
                <p>
                    Autor:
                    <p>{posts.author}</p>
                </p>
                <a 
                    href={posts.link}
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    Leer...
                </a>
            </div>
        </div>
    )
}

export default Post