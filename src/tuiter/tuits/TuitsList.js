import {useSelector} from "react-redux";
import React from "react";
import TuitItem from "./TuitItem";

const HomeSummaryList2 = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitItem
                        key={post.userName}
                        post={post}/> )
            }
        </ul>
    );
};
export default HomeSummaryList2;