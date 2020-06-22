import React, {useState, useEffect} from 'react'
import './Blog.css'

const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem('posts')
        if(data) {
            setPosts(JSON.parse(data))
        }

        let Posts

        const getPosts = async () => {
            const resp = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40uriel_hedz`)
            Posts = await resp.json()
            sessionStorage.setItem('posts', JSON.stringify(Posts))
            console.log(resp)
            setPosts(Posts)
        }

        getPosts()

    }, [])

    return(
        <div className='blogContainer'>
            <h1 className='blogContainer__title'>
                Posts
            </h1>
        </div>
    )
}

export default Blog
