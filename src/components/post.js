import React from "react";
import Reactions from "./reaction";

function Post({postId, title, content, category, author, createDate, comments, commentsData, setComments, likes, updatePostLikes, posts, setPosts}){

    const date = new Date(createDate)

    const filteredComments = commentsData.filter(comment=>comment.post_id === postId)
    
    return(
        <div className="post-display">
            <h3>{title}</h3>
            <h4>Posted by {author}</h4>
            <p>{content}</p>
            <h5>{date.toLocaleString()}</h5>
            <Reactions postId={postId} 

            // Here is where I changed or need to change
                comments={comments} 
                commentsData = {commentsData}
                setComments = {setComments}
                title= {title}
                content = {content}
                category = {category}
                author = {author}
                likes = {likes}
                updatePostLikes={updatePostLikes}
                posts = {posts}
                setPosts = {setPosts}
                />
        </div>
    )
}

export default Post