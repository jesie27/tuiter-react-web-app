import {useSelector} from "react-redux";
import tuits from './tuits.json';
import TuitItem from "./TuitItem";
import React, {useState} from "react";

const TuitStats = () => {
    let [initialLikes, setLikes] = useState('');
    const likeClickHandler = () => {
    }
    return (
        <div>
            <button className=""
                    onClick={likeClickHandler}>
                Like
            </button>
        </div>

    );
}

export default TuitStats;