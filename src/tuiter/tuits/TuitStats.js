import {useSelector, useDispatch} from "react-redux";
import tuits from './tuits.json';
import TuitItem from "./TuitItem";
import React, {useState} from "react";

const TuitStats = (
    post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "corgibench.jpg",
        "replies": 6,
        "likes": 5,
        "retuits": 7
    }) => {
    const {initialLikes} = useSelector(state => state.tuits)

    const [likes, setLikes] = useState(initialLikes);
    const likeClickHandler = () => {
        console.log('hi');
        //setLikes(initialLikes+1);
        <h2>{initialLikes}</h2>;

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