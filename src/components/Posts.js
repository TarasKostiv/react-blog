import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPosts = (url) => {
        try {
            fetch(url)
                .then(response => response.json())
                .then(result => setPosts(prev => {
                    if(prev !== undefined)
                        return [...prev, result]
                }))
        } catch (e){
            console.error(e)
        }
    }

    useEffect(() => getPosts('https://raw.githubusercontent.com/Osttik/AmpliContactsListLesson/MoqData/GalleryData.json'),[])

    const renderPosts = (arr) => {
        if(arr !== undefined)
            return arr.map(post => {
                return post.array.map(elem => <Post title={elem.name} description={elem.description} imgPath={elem.imgPath}/>)
            })
            
    }

    // console.log(posts)

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {renderPosts(posts)}
        </div>

    );
};

export default Posts;