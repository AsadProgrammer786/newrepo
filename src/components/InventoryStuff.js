import { useEffect, useState } from "react";
import "./css/stuff.css";
import Frame from "./Frame";
import Inventory from "./Inventory";
function InventoryStuff(prop) {
    var a = prop.memes;
    
    return(
        <>
            <div className="stuff-container">
                {a.map((e) => {
                    return <Frame key={Math.random()} data={e} />;
                })}
            </div>
        </>
    );
}
export default InventoryStuff;