import React from "react";
import postsArray from './homeposts.json';
import homePostItem from "./home-post-item";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import HomePostItem from "./home-post-item";

const HomeSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <HomePostItem
                        key={post.userName}
                        post={post}/> )
            }
        </ul>
    );
};
export default HomeSummaryList;