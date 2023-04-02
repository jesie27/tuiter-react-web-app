import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
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