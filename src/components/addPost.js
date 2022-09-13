import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"

function AddPost({posts, setPosts}) {

  const navigate = useNavigate()
  const formRef = useRef()

  // use states
  const [isNotEmpty, setIsNotEmpty] = useState(true)
  const [formData, setFormData] = useState({
      title:"",
      content: "",
      category: "",
      posted_by: "",
      likes: 0
    })
// set the form data to the value typed in by the user
function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    setFormData({...formData, [name]: value})
}

function handleSubmit(e){
    e.preventDefault()

    // check if form is filled with spaces only 
    if(formData.title.trim() === "" || formData.content.trim()==="" || formData.category.trim()==="" || formData.posted_by.trim()===""){
      setIsNotEmpty(false)
    }else{
      setIsNotEmpty(true)
      const url = "http://localhost:9292/posts"
      fetch(url,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(data=>setPosts([...posts, data]))
    }
    navigate('/')
    formRef.current.reset()
}

  return (
    <div className="container">
        <h2>Add your post here</h2>
      {isNotEmpty ? null: <p style={{color: "red"}}>Fill in all the fields</p>}
      <form className="add-post-form" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          placeholder="Title..."
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          placeholder="Content..."
          required
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          placeholder="Category..."
          required
        />

        <label htmlFor="posted_by">Author</label>
        <input
          type="text"
          id="posted_by"
          name="posted_by"
          onChange={handleChange}
          placeholder="Author..."
          required
        />

        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default AddPost;
