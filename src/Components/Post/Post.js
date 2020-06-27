import React from 'react'
import './Post.css'

const Post = ({posts}) => {

    return(
        <div className='blogCard'>
            <img 
                style={ { width: '100%' } }
                src={posts.thumbnail}
                className='blogImg' 
            />
            <div className='infoContainer'>
                <h1>{posts.title}</h1>
                <a 
                    href={posts.link}
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    Leer
                </a>
                <p>{posts.author}</p>
            </div>
        </div>
    )
}

export default Post