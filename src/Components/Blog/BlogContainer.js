import React, {useState, useEffect} from 'react'
import './BlogContainer.css'

const BlogContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem('posts')
        if(data) {
            setPosts(JSON.parse(data))
        }

        const getPosts = async () => {
            const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40lmolinavillavicencio`
            const resp = await fetch(url)
            const result = await resp.json()
            sessionStorage.setItem('posts', JSON.stringify(result.items))
            // console.log(resp)
            setPosts(result.items)
        }

        getPosts()

    }, [])

    return(
        <div className='blogContainer'>
            <h1 className='blogContainer__title'>Posts</h1>
            <ul>
                {
                    posts.map(posts => {
                        return <li>
                                <span 
                                    className='blog-title'
                                >
                                    {posts.title}
                                </span>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}

export default BlogContainer
