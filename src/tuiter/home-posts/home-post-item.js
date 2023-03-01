import React from "react";

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

            {post.userName}
            {post.title}




        </div>
    );
};
export default HomePostItem