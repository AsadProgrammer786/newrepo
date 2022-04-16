import "./css/card.css";
import {useState} from "react";
import { Link, Navigate } from "react-router-dom";
import Loading from "./Loading";
import { saveAs } from 'file-saver'
import Comment from "./Comment";
function Card(prop) {
    const [redir, updateRedir] = useState(false);
    const [displayState, updateDisplayState] = useState("hiden");
    var a = "hidden";
    var b = "comment-container";
    const [src, updateSrc] = useState("https://hehe123a.herokuapp.com/"+(prop.src.replace("./meme-images/", "meme-images/")));
    const [like, updateLike] = useState(prop.liked);
    function openComments() {
        localStorage.setItem("comments", JSON.stringify(prop.comment));
        localStorage.setItem("comment-url", src);
        updateRedir(true);
    }
    function likeIt() {
        var newSrc = "./"+(src.replace("https://hehe123a.herokuapp.com/", ""));
        if(like==="like") {
            updateLike("liked");
            localStorage.setItem("liked:"+newSrc, true);
            fetch("https://hehe123a.herokuapp.com/registerLike/"+(src.replace("https://hehe123a.herokuapp.com/meme-images/", ""))+"+"+localStorage.getItem("AUTH-EMAIL"))
            .then(r => r.text())
            .then(d => {});
        }
        else {
            updateLike("like");
            fetch("https://hehe123a.herokuapp.com/unregisterLike/"+(src.replace("https://hehe123a.herokuapp.com/meme-images/", ""))+"+"+localStorage.getItem("AUTH-EMAIL"))
            .then(r => r.text())
            .then(d => {
                if(d==="yes") {
                    localStorage.removeItem("liked:"+newSrc);
                }
            });
        }
    }
    function downloadImage() {
        saveAs(src, "memes.png");
    }
    return(
        <>
            <div className="card-container">
                <div className="img-container">
                    <img src={src} className="card-img" />
                </div>
                <div className="text-container">
                    <div className='meme-head'>{prop.title}</div>
                    <div className="action-icons">
                        <div className="action-icons-img">
                            <img className="like" onClick={likeIt} src={like==="like"?require('./img/like.jpg'):require('./img/liked.png')} />
                        </div>
                        <div className="action-icons-img">
                        <img className="comment" onClick={downloadImage} src="https://uxwing.com/wp-content/themes/uxwing/download/04-file-folder-type/document-download.png" />
                        </div>
                        <div className="action-icons-img">
                        <img onClick={openComments} className="comment" src={require("./img/comment.png")} />
                        </div>
                    </div>
                </div>
            </div>
            {redir?<Navigate to="/comment" />:null}
            </>
    );
}
export default Card;
{/* <i>	&#10084; and &#9825;</i> */}