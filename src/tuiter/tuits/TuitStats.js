import {useSelector, useDispatch} from "react-redux";
import tuits from './tuits.json';
import TuitItem from "./TuitItem";
import React, {useState} from "react";
import {likePost} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {Link} from "react-router-dom";

const TuitStats = ({tuits}
    ) => {

    const dispatch = useDispatch();
    const likeClickHandler = () => {
        console.log('hi');
        //setLikes(initialLikes+1);
        dispatch(updateTuitThunk(tuits));

    }
    const likePost = () => {
        if (!tuits.liked) {
            dispatch(updateTuitThunk ({
                ...tuits,
                liked: true,
                likes: tuits.likes + 1
            }))
        }
        else {
            dispatch(updateTuitThunk({
                ...tuits,
                liked: false,
                likes: tuits.likes - 1
            }))
        }
    }
    const heartColor = tuits.liked? `bi bi-heart-fill`: `bi bi-heart`;

    return (
        <div>
            <p className="mb-0 wd-fg-color-gray ms-5">
                <i className="bi bi-chat-left-dots pe-2"></i>
                {tuits.replies}
                <i className="bi bi-repeat ps-3 pe-2"></i>
                {tuits.retuits}
                    <div onClick={likePost} className="nav-link" to={""}>
                        {tuits.liked &&
                            <i className="bi bi-heart-fill"></i>

                        }
                        {!tuits.liked &&
                            <i className="bi bi-heart"></i>

                        }
                        Likes: {tuits.likes}

                    </div>

                <i className="bi bi-upload ps-3"></i>
            </p>

        </div>

    );
}

export default TuitStats;