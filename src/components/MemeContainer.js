import {useEffect, useState} from "react";
import Card from "./Card";
import "./css/memecontainer.css";
const MemeContainer = (prop) => {
    const[myArr, updateArr] = useState();
    useEffect(() => {
        updateArr(prop.meme);
    }, [prop.meme]);
    return(
        <>
            <div className="meme-container">
                {myArr===undefined?null:myArr.map((e) => {
                    try{
                        var gMail = localStorage.getItem("AUTH-EMAIL");
                        var liked = e['liked'];
                    return <Card title={e['title']} src={e['src']}  comment={e['comments']} key={"https://hehe123a.herokuapp.com/"+e['src']} liked={liked.includes(gMail)||localStorage.getItem("liked:"+e['src'])==="true"?"liked":"like"} />
                    } catch(err) {
                        // Eat Five Star
                    }
                })}
            </div>
        </>
    )
}
export default MemeContainer;