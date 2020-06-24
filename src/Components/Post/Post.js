import React from 'react'

const Post = ({posts}) => {

    const { items } = posts

    return(
        <li>
            <a 
                href={items.link}
                className='repo__link' 
                target='_blank' rel='noopener noreferrer'
            >
                {items.link}
            </a>
        </li>
    )
}

export default Post