import React, {useState, useEffect} from 'react'
import './BlogContainer.css'

const Blog = () => {

    const [post, setPosts] = useState([])

    useEffect(() => {

        // const data = sessionStorage.getItem('posts')
        // if(data) {
        //     setPosts(JSON.parse(data))
        // }

        const getPosts = async () => {
            const resp = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40uriel_hedz`)
            const posts = await resp.json()
            // sessionStorage.setItem('posts', JSON.stringify(posts))
            console.log(resp)
            setPosts(posts)
        }

        getPosts()

    }, [])

    return(
        <div className='blogContainer'>
            <h1 className='blogContainer__title'>Posts</h1>
            {/* <ul>
                {
                    post.map(item => {
                        <li key={item.items}>{post.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default Blog
