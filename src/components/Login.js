import "./css/signup.css";
import {Link, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
function Login() {
    document.title="Login";
    const [redir2, updateRedir2] = useState(false);
    const [email, updateEmail] = useState("");
    const [pass, updatePass] = useState("");
    const [eve, updateEve] = useState("all");
    const [logged, updateLogged] = useState(localStorage.getItem("AUTH-EMAIL"));
    const [redir, updateRedir] = useState(false);
    useEffect(() => {
        if(logged!==null) {
            updateRedir2(true);
        }    }, [1]);
    function update1(e) {
        updateEmail(e.target.value);
    }
    function update2(e) {
        updatePass(e.target.value);
    }
    function sendData() {
        updateEve("none");
        if(validateForm()) {
            alert("Preparing Your Death Ceremony, Please Wait...");
            startFetching();
        }
        else {
            alert("You Fool!! Fill Out This Form!");
            updateEve("all");
        }
    }
    function validateForm() {
        if(email.includes("@gmail.com")&&pass.length>0) {
            return true;
        }
        else
            return false;
    }
    function startFetching() {
        var url = "https://hehe123a.herokuapp.com/login/"+email+"+"+pass;
        fetch(url)
        .then(r => r.text())
        .then(d => {
            if(d==="no") {
                updateEve("all");
                alert("Your Email Or Password Is Same Like Your Answers In Exam. Idiot!!");
            }
            else {
                localStorage.setItem("AUTH-EMAIL", email);
                localStorage.setItem("AUTH-NAME", d);
                updateRedir(true);
            }
        });


    }    return(
        <>
        <div style={{"pointerEvents":eve}} className="signupContainer">
            <div className="signup" style={{"height":"400px"}}>
                <div className="signup-head">Hi Mr.Noob</div>
                <input className="input" onChange={update1} type="email" placeholder="Your Gmail Ex.noob@gmail.com" />
                <input className="input" onChange={update2} type="password" placeholder="Your Password Ex.123" />
                <button onClick={sendData} className="signupBtn">Click This You Idiot</button>
                <Link to="/signup" className="loginLink">Donot Click Here You Fool!!</Link>
            </div>
        </div>
        {redir?<Navigate to="/home" />:console.log("Hahah")}
        </>
    );
}
export default Login;