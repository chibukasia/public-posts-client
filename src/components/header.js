import React  from "react";

function Header({posts, category, setCategory}){
    const categories = posts.map(post=> post.category)
    const uniqPosts = [...new Set(categories)]

    function handleCategory(e){
        setCategory(e.target.value)
    }
    const postCategories = uniqPosts.map(post=>{
        return <button key={post} type="button" className="cat-btn" value={post} onClick={handleCategory}>{post}</button>
    })

    return(
        <div className="header-container">
            <h2>Share your thoughts, quotes, poems, lyrics and many more</h2>
            <button className="cat-btn" type="button" value="all" onClick={handleCategory}>All</button>
            {postCategories}
        </div>
    )
}

export default Header 


