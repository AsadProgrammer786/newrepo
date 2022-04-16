import {Link} from "react-router-dom";
import "./css/pagi.css";
function Pagination() {
    return(
        <>
            <div className="pagi">
                <div className="pagi-icons">
                    <Link to="/home"><img alt="Loading.." src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="pagi-icon-img" /></Link>
                </div>
                <div className="pagi-icons">
                <Link to="/share"><img alt="Loading.." src="https://cdn3.iconfinder.com/data/icons/essential-2-glyph/32/_Friend_link_share-512.png" className="pagi-icon-img" /></Link>
                </div>
                <div className="pagi-icons">
                <Link to="/inventory"><img alt="Loading.." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zVZ6_0jG6x-cjotUq9Nc7ttTNCoSqbyn-g&usqp=CAU" className="pagi-icon-img" /></Link>
                </div>
            </div>
        </>
    );
}
export default Pagination;