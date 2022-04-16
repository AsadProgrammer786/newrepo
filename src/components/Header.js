import { Link } from "react-router-dom";
import "./css/header.css";
function Header(prop) {
    return(
        <>
            <div className="header">
                <div className="logo">5-Min-Memes</div>
                <Link to="/profile"><img className="ico" src="https://png.pngitem.com/pimgs/s/70-704584_ic-user-phone-followers-assistant-1-1-8-hd.png" /> </Link>
            </div>
        </>
    );
}
export default Header;