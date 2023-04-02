import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
const HomeSummaryList2 = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            ...
        </ul>
    );

};
export default HomeSummaryList2;