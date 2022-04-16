import { useEffect } from "react";
import "./css/profile.css";
import Header2 from "./Header2";
function Profile() {
    document.title="Your Profile";
    return(
        <>
            <Header2 link="/home" />
            <div className="profileContainer">
                <div className="profileHead">Welcome Shit</div>
                <div className="basicInfo">Basic Information, Which You<br />Can't Change</div>
                <div className="name"><b>Name : </b>{localStorage.getItem("AUTH-NAME")}</div>
                <div className="email"><b>Email : </b>{localStorage.getItem("AUTH-EMAIL")}</div>
                <div className="pass"><b>Password : </b>Get Out! We Will Not Show It.</div>
            </div>
        </>
    );
}
export default Profile;