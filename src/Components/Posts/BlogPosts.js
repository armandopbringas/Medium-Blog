import React from 'react'

const Posts = (props) => {
    return(
        <div className='postsContainer'>
            <li>
                <a>{props.post.title}</a>
            </li>
        </div>
    )
}

export default Posts
