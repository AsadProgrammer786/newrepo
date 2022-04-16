import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Route,
    Navigate,
    Routes
} from "react-router-dom";
import Entry from "./components/Entry";
import Home from "./components/Home";
import Share from "./components/Share";
import Comment from "./components/Comment";
import SmallCard from "./components/SmallCard";
import Inventory from "./components/Inventory";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  const [isAuth, updateAuth] = useState(false);
    const [memeArr, updateArr] = useState([]);
  setInterval(() => {
    if(localStorage.getItem("AUTH") !== null) {
        updateAuth(true);
    }
  }, 1000);
  useEffect(() => {
    fetch('https://hehe123a.herokuapp.com/getmeme/:500')
        .then(r => r.json())
        .then(d => {updateArr(d);console.log(d)});
        
  }, [1]);
    return(
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/home" element={<Home memeArr={memeArr} />} />
                <Route path="/share" element={<Share />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/comment" element={<Comment />} />
                <Route path="/smallCard" element={<SmallCard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
      </>
    );
}
export default App;