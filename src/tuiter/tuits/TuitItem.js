import React from "react";
import '../index.css';
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = ({
                          post = {
                              "topic": "Space",
                              "userName": "SpaceX",
                              "time": "2h",
                              "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                              "image": "corgibench.jpg",
                              "replies": 6,
                              "likes": 5,
                              "retuits": 7
                          }

                      }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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


                    <TuitStats/>


                    {/*<p className="mb-0 wd-fg-color-gray ms-5">*/}
                    {/*    <i className="bi bi-chat-left-dots pe-2"></i>*/}
                    {/*    {post.comments}*/}
                    {/*    <i className="bi bi-repeat ps-3 pe-2"></i>*/}
                    {/*    {post.retuits}*/}

                    {/*    <i className="bi bi-heart-fill ps-3 pe-2"></i>*/}
                    {/*    {post.likes}*/}

                    {/*    <i className="bi bi-upload ps-3"></i>*/}
                    {/*</p>*/}



                </li>

            </ul>




        </div>
    );
};
export default TuitItem