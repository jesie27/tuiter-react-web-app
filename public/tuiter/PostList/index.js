

/* eslint-env jquery */

import postItem from "./PostItem.js";
import posts from "./posts.js";

const postList = () => {
    return(`
    <ul class="list-group">
    <li class="list-group-item"></li>
         ${posts.map(post => {
        return(postItem(post));
    }).join('')}  
               
    </ul>
`); }

export default postList;