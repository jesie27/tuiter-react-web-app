import React from "react";
import '../index.css';
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = ({ post


                      }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log('nola')
        dispatch(deleteTuitThunk(id));
    }

    return(
        <div>
            <ul className="list-group">

                <li className="list-group-item">
                    <p>
                        <img src={post.image}
                             width="50px"
                             height="50px"
                             className="rounded-5 me-2   "
                        />
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <span className="wd-bold">{post.userName}</span>
                        <span className="wd-fg-color-gray"> {post.handle}
                            <span className={"wd-padding-left"}>{post.time}</span></span>
                    </p>
                    <p className="mb-3  ms-5">{post.tuit}</p>

                    <TuitStats key={post._id}tuits={post}/>

                </li>
            </ul>
        </div>
    );
};
export default TuitItem