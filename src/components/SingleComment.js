import "./css/single.css";
function SingleComment(prop) {
    return(
        <>
            <div className="message"><b>{prop.name} : </b>{prop.comment}</div>
        </>
    );
}
export default SingleComment;