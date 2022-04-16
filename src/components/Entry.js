import "./css/entry.css";
import Header from "./Header";
import {Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
function Entry() {
    const [timer, updateTime] = useState(0);
    function callMe() {
        setTimeout(() => {
            updateTime(1);
        }, 3000);
    }
    useEffect(() => {
        callMe();
    }, [1]);
    return(
        <>
            <div className="entry-container">
                <span className="main-text">By Basic Coder</span>
            </div>
            {timer===1?<Navigate to="/home" /> : () => {}}
        </>
    );
}
export default Entry;