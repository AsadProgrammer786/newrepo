import "./css/signup.css";
import {Link, Navigate} from "react-router-dom";
import { useState } from "react";
function Signup() {
    document.title="Make Account";
    const [eve, updateEve] = useState("all");
    const [redir, updateRedir] = useState(false);    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [pass, updatePass] = useState("");
    const [repass, rePass] = useState("");
    function sendData() {
        updateEve("none");
        if(validateForm()) {
            alert("Deleting You From This World, Please Wait...");
            startFetching();
        }
        else {
            alert("You Fool!! Fill Out This Form!");
            updateEve("all");
        }
    }
    function startFetching() {
        var url = "https://hehe123a.herokuapp.com/makeAccount/"+name+"+"+email+"+"+pass;
        fetch(url)
        .then(r => r.text())
        .then(d => {
            console.log(d);
            if(d==="Yes") {
                updateRedir(true);
            }
            else {
                updateEve("all");
                alert("Your Brother Already Registered With Your Email, Slap Him!!!");
            }
        });


    }
    function update1(e) {
        updateName(e.target.value);
    }
    function update2(e) {
        updateEmail(e.target.value);
    }
    function update3(e) {
        updatePass(e.target.value);
    }
    function update4(e) {
        rePass(e.target.value);
    }
    function validateForm() {
        if(name!==""&&email.includes("@gmail.com")&&pass.length>0&&pass===repass) {
            return true;
        }
        else
            return false;
    }
    return(
        <>
        <div className="signupContainer" style={{"pointerEvents": eve}}>
            <div className="signup">
                <div className="signup-head">Hey Mr.Idiot</div>
                <input className="input" onChange={update1} type="text" placeholder="Your Name Ex.Donkey" />
                <input className="input" onChange={update2} type="email" placeholder="Your Gmail Ex.noob@gmail.com" />
                <input className="input" onChange={update3} type="password" placeholder="Your Password Ex.123" />
                <input className="input" onChange={update4} type="password" placeholder="Rewrite It Noob" />
                <button onClick={sendData} className="signupBtn">Click This You Idiot</button>
                <Link to="/login" className="loginLink">Dont Click Here You Idiot</Link>
            </div>
        </div>
        {redir?<Navigate to="/login" />:console.log("Hahah")}
        </>
    );
}
export default Signup;