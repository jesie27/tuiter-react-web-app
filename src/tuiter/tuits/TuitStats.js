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
    const dislikePost = () => {
        if (!tuits.disliked) {
            dispatch(updateTuitThunk ({
                ...tuits,
                disliked: true,
                dislikes: tuits.dislikes + 1
            }))
        }
        else {
            dispatch(updateTuitThunk({
                ...tuits,
                disliked: false,
                dislikes: tuits.dislikes - 1
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
                            <i className="bi bi-heart-fill" style={{color:'red'}}></i>

                        }
                        {!tuits.liked &&
                            <i className="bi bi-heart" style={{color:'red'}}></i>

                        }
                        Likes: {tuits.likes}

                    </div>

                <div onClick={dislikePost} className="nav-link" to={""}>
                    {tuits.disliked &&
                        <i className="bi bi-hand-thumbs-down-fill"></i>

                    }
                    {!tuits.disliked &&
                        <i className="bi bi-hand-thumbs-down"></i>
                    }
                    Dislikes: {tuits.dislikes}

                </div>

                <i className="bi bi-upload ps-3"></i>
            </p>

        </div>

    );
}

export default TuitStats;