import React, { useState, useEffect } from "react";
import Comment from "./comment";
import AddComment from "./addComment";
import useGetMethod from "./getHook";

function Reactions ({postId, comments, commentsData, setComments, title, content, author, category, likes, updatePostLikes, posts, setPosts}){

    const [showComments, setShowComments] = useState(false) 
    const [showCommentForm, setShowCommentForm] = useState(false)
    // const[users, setUsers] = useState([])
    const [like, setLike] = useState(likes)

    // Get users from the server
    const {data: users, setData: setUsers} = useGetMethod("http://localhost:9292/users")
    // useEffect(()=>{
    //     fetch("http://localhost:9292/users")
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))
    // },[])

    // select a random user
    const userIDs = users.map(user=>user.id)
    let size = users.length
    let rand = Math.floor(Math.random() * (size - 0) + 0)
    
    let userID = userIDs[rand]

    // show and hide comments
    function handleComments(){
        setShowComments(showComments=>!showComments)
    }

    // show and hide comment form
    function handleCommentForm(){
        setShowCommentForm(showCommentForm => !showCommentForm)
    }

    // update the likes value on the server 
    function handleLikesUpdate(){
        
        let likey = like + 1
        setLike(likey)
        // console.log(likey)
        fetch(`http://localhost:9292/posts/${postId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",
                      Accept: "application/json"},
            body: JSON.stringify({
                // title: title,
                // content: content,
                // category: category,
                // posted_by: author,
                likes: likey
            })
        })
        .then(res=>res.json())
        .then(data=>{
            const newPosts = posts.map(post=>{
                if (post.id===data.id) return data 
                return post
            })
            setPosts(newPosts)
            
        })


    }


    // creaete each comment with its own data
    // To be used later once bug solved
    const commentsDisplay = comments.map(comment=>{
        return <Comment key={comment.id} comment={comment} createdAt = {comment.created_at} commentsData={commentsData} setComments={setComments}/>
    })

    //
    return (
        <div className="reaction-container">
            <div onClick={handleComments}><p>{comments.length} Comments</p></div>
            {showComments ? commentsDisplay : null}
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={handleCommentForm}>Comment</button>
                    {/* <button type="button" className="btn btn-primary"></button> */}
                    <button type="button" className="btn btn-danger" onClick={handleLikesUpdate}>💙 {likes} Likes</button>
                </div>
                {showCommentForm ? <AddComment postId={postId} 
                    setShowCommentForm={setShowCommentForm} 
                    userID = {userID}
                    comments = {comments}
                    commentsData = {commentsData}
                    setComments = {setComments}
                    /> : null}
            </div>
        </div>
    )
}

export default Reactions