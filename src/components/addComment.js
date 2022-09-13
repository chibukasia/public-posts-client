import React, { useEffect, useState, useRef } from "react";

function AddComment({postId , setShowCommentForm, userID, commentsData, setComments}){

    // console.log(userID)
    const formRef = useRef()
    const [commentData, setCommentData] = useState({
        content: "",
        user_id: userID,
        post_id: postId
    })

    // console.log(userIDs)
    function handleChange(e){
        let name = e.target.name 
        let value = e.target.value 

        setCommentData({...commentData, [name]: value})
    }
    //  TO review
    function handleSubmit(e){
        e.preventDefault()
        if (commentData.content.trim()===""){
            alert("Comment cannot be empty")
        }else{
            fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(commentData)
        })
        .then(res=>res.json())
        .then(data =>{
            setComments([...commentsData, data])
        })

        formRef.current.reset()
        setShowCommentForm(showCommentForm=>!showCommentForm)
        }

        
    }


    return(
        <div className="comment-form">
            <form className="form-comment" onSubmit={handleSubmit} ref={formRef}>
                <div><textarea type="text" name="content" onChange={handleChange} required/></div>
                <div><input type="submit" value="submit"/></div>
            </form>
        </div>
    )
}

export default AddComment