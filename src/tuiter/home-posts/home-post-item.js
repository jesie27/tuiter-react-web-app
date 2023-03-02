import React from "react";
import '../index.css';

const HomePostItem = ({
    post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
    }

}) => {
    return(
        <div>
            <ul className="list-group">

                <li className="list-group-item">
                    <p>
                        <img src={post.propic}
                             width="50px"
                             height="50px"
                             className="rounded-5 me-2   "
                        />
                        <span className="wd-bold">{post.userName}</span>
                        <span className="wd-fg-color-gray"> @{post.handle}
                            <span className={"wd-padding-left"}>{post.time}</span></span>
                    </p>
                    <p className="mb-0 ms-5">{post.userInput}</p>

                    <img src={post.image}
                         width="462px"
                         height="380px"
                         className="border border-secondary rounded-top ms-5"
                    />


                    <p className="ms-5 border rounded-bottom border-secondary">

                        <span className={"wd-bold"}>{post.title} </span>
                        {post.postContent}
                    </p>
                    <p className="mb-0 wd-fg-color-gray ms-5">
                        <i className="bi bi-chat-left-dots pe-2"></i>
                        {post.comments}
                        <i className="bi bi-repeat ps-3 pe-2"></i>
                        {post.retuits}

                        <i className="bi bi-heart-fill ps-3 pe-2"></i>
                        {post.likes}

                        <i className="bi bi-upload ps-3"></i>
                    </p>



                </li>
            </ul>



        </div>
    );
};
export default HomePostItem