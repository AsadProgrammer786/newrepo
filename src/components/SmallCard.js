import Header2 from "./Header2";
import Card from "./Card";
import Pagination from "./Pagination";
function SmallCard(prop) {
    var a = JSON.parse(localStorage.getItem("recentData"));
    var title = a['title'];
    var src = a['src'];
    var comment = a['comments'];
    var gMail = localStorage.getItem("AUTH-EMAIL");
    var liked = a['liked'];
    return(
        <>
            <Header2 link="/inventory"/>
            <Card liked={liked.includes(gMail)||localStorage.getItem("liked:"+a['src'])==="true"?"liked":"like"} title={title} src={src} comment={comment} />
            <Pagination />
        </>
    );
}
export default SmallCard;