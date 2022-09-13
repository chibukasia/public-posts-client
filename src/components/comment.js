import React from "react";
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
function Comment({comment, commentsData, setComments}) {

  // Handle delete of a comment 
  function handleCommentDelete(){
    fetch(`http://localhost:9292/comments/${comment.id}`, {
        method: "DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
        const undeletedComments = commentsData.filter(comm=>{
          return comm.id !=comment.id
        })
        setComments(undeletedComments)
    })
}
  const date = new Date(comment.created_at).toLocaleDateString()
  return (
    <div className="comments">
      <h4>{comment.user.username} says:</h4>
      <p>{comment.content}</p>
      <p>- {date} <span onClick={handleCommentDelete}><DeleteIcon/></span></p>
      
    </div>
  );
}

export default Comment