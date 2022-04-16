import Header from "./Header";
import Pagination from "./Pagination";
import {useEffect, useState} from "react";
import InventoryStuff from "./InventoryStuff";
import Loading2 from "./Loading2";

function Inventory(prop) {
    const [myArr, updateArr1] = useState();
    const [loaded, isLoaded] = useState(false);
    useEffect(() => {
        fetch('https://hehe123a.herokuapp.com/getLikedMeme/'+localStorage.getItem("AUTH-EMAIL"))
        .then(r => r.json())
        .then(d => {
            updateArr1(d);          
            isLoaded(true);  
            document.title=`Liked Memes (${myArr.length})`;
        });
    })
    return(
        <>
            <Header />
            {loaded?<InventoryStuff memes={myArr} />:<Loading2 />}
            <Pagination />
        </>
    );
}
export default Inventory;