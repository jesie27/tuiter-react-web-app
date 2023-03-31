import {useSelector, useDispatch} from "react-redux";
import tuits from './tuits.json';
import TuitItem from "./TuitItem";
import React, {useState} from "react";
import {likePost} from "./tuits-reducer";

const TuitStats = ({tuits}
    ) => {

    const dispatch = useDispatch();
    const likeClickHandler = () => {
        console.log('hi');
        //setLikes(initialLikes+1);
        dispatch(likePost(tuits));

    }

    return (
        <div>
            <p className="mb-0 wd-fg-color-gray ms-5">
                <i className="bi bi-chat-left-dots pe-2"></i>
                {tuits.replies}
                <i className="bi bi-repeat ps-3 pe-2"></i>
                {tuits.retuits}
                <button className=""
                        onClick={likeClickHandler}>
                <i className="bi bi-heart-fill ps-3 pe-2"></i>
                {tuits.likes}
            </button>

                <i className="bi bi-upload ps-3"></i>
            </p>

        </div>

    );
}

export default TuitStats;