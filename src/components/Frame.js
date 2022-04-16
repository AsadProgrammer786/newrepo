import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./css/frame.css";
function Frame(prop) {
    var a = prop.data;
    var src = a['src'];
    var realSrc1 = src.replace("./meme-images/", "meme-images/");
    const [redir, updateRedir] = useState(false);
    var realSrc = "https://hehe123a.herokuapp.com/"+realSrc1;
    function openCard() {
        localStorage.setItem("recentData", JSON.stringify(a));
        updateRedir(true);
    }
    return(
        <>
            <img className="frame" src={realSrc} onClick={openCard} />
            {redir?<Navigate to="/smallCard" />:null}
        </>
    );
}
export default Frame;