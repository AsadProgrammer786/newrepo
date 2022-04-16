import {useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
import MemeContainer from "./MemeContainer";
import Pagination from "./Pagination";
function Home(prop) {
    const [redir, updateRedir] = useState(false);
    const [logged, updateLogged] = useState(localStorage.getItem("AUTH-EMAIL"));
    const [loaded, isLoaded] = useState(false);
    useEffect(() => {
        if(logged===null) {
            updateRedir(true);
        }
        if(prop.memeArr.length>10) {
            document.title="Home ("+prop.memeArr.length+")";
            isLoaded(true);
        }
    }, [prop]);
    return(
        <>
           <Header />
           {loaded===true?<MemeContainer meme={prop.memeArr} />:<Loading />}
           <Pagination />
           {redir?<Navigate to="/login" />:null}
        </>
    );
}
export default Home;