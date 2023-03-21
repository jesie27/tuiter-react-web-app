import {useSelector, useDispatch} from "react-redux";
import tuits from './tuits.json';
import TuitItem from "./TuitItem";
import React, {useState} from "react";

const TuitStats = () => {
    let [initialLikes, setLikes] = useState('');
    const likeClickHandler = () => {
    }
    return (
        <div>
            {/*<p className="mb-0 wd-fg-color-gray ms-5">*/}
            {/*    <i className="bi bi-chat-left-dots pe-2"></i>*/}
            {/*    {comments}*/}
            {/*    <i className="bi bi-repeat ps-3 pe-2"></i>*/}
            {/*    {retuits}*/}

            {/*    <i className="bi bi-heart-fill ps-3 pe-2"></i>*/}
            {/*    {likes}*/}

            {/*    <i className="bi bi-upload ps-3"></i>*/}
            {/*</p>*/}

            <h1>hi</h1>
            <button className=""
                    onClick={likeClickHandler}>
                Like
            </button>
        </div>

    );
}

export default TuitStats;