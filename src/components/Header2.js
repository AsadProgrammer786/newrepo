import "./css/comment.css";
import {Link} from "react-router-dom";
function Header2(prop) {
    return(
        <>
            <div className="comment-header">
                <Link to={prop.link}><button className="goBack">Go Back</button></Link>
            </div>
        </>
    );
}
export default Header2;