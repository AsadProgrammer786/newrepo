import SingleComment from "./SingleComment";
import { useEffect, useState } from "react";
import "./css/comment.css";
import { Link } from "react-router-dom";
function Comment(prop) {
    const [comment, updateComment] = useState();
    const [commenttext, updateText] = useState("");
    const [memeUrl, updateUrl] = useState();
    const[loaded, updateLoad] = useState(false);
    const[goback, updateGo] = useState(false);
    useEffect(() => {
        updateComment(JSON.parse(localStorage.getItem("comments")));
        updateUrl((localStorage.getItem("comment-url")).replace(".png", ""));
        updateLoad(true);
    }, [1]);
    function update1(e) {
        updateText(e.target.value);
    }
    function postComment() {
        var url = `https://hehe123a.herokuapp.com/postComment/${memeUrl}+${localStorage.getItem("AUTH-NAME")}+${commenttext}`;
        fetch(url)
        .then(r => r.text())
        .then(d => {
            if(d==="no") {
                alert("Your Phone Is Shit, Improve It!");
            }
            else {
                updateText("");
                var l = comment.length;
                var newArr = [
                    ...comment,
                    {
                    Name : localStorage.getItem("AUTH-NAME"),
                    Comment : commenttext
                    }
                ];
                updateComment(newArr);
            }
        });
    }
    return(
        <>
        <div className="comment-container">
            <div className="comment-header">
                <Link to="/home"><button className="goBack">Go Back</button></Link>
            </div>
            <div className="commentArea">
                <div className="comments">
                    {!loaded?console.log("Not Loaded!"):comment.map((e) => {
                        if(e['Name']!==undefined) {
                        return <SingleComment name={e['Name']} comment={e['Comment']} key={Math.random()} />
                        }
                    })}
                </div>
                <div className="inputArea">
                    <input className="inputBox" onChange={update1} value={commenttext} placeholder="Your Comment Ex: Hi Fools" />
                    <button className="btnSend" onClick={postComment}>Send</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Comment;

