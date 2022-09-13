import React, { useEffect, useState } from "react";
import Post from "./post";

function Posts({posts, comments, setComments, setPosts, category, setCategory}){ 

   
// Function to update the comments after addding a new post or a new comment
    function updatePostLikes(postData){
        const newPosts = posts.map(post=>{
            if (post.id==postData.id) {
                return postData
            }else {
                return post
            }
        })

        setPosts(newPosts)
    }

   // Sort the posts based on datestamps
    const sortedPosts = posts.sort((a, b)=>{
        let x = new Date(a.created_at)
        let y = new Date(b.created_at)

        return y - x
    })

    const filteredPosts = sortedPosts.filter(post=>{
        if (category === "all") return true
        return post.category === category 
    })

    // posts diplay for each post
    const postsDisplay = filteredPosts.map(post=>{
        return <Post key={post.id} 
            postId = {post.id}
            title={post.title} 
            content={post.content} 
            category={post.category}
            author={post.posted_by} 
            likes = {post.likes}
            createDate={post.created_at} 
            comments={post.comments}
            commentsData = {comments}
            setComments = {setComments}
            updatePostLikes = {updatePostLikes}
            posts = {posts}
            setPosts = {setPosts}
            />
    })
    return(
        <div className="posts-display">
            {postsDisplay}
        </div>
    )
}

export default Posts