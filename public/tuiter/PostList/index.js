/* eslint-env jquery */

import postItem from "./PostItem.js";
import posts from "./posts.js";

const postList = () => {
    return(`
        <ul class="list-group">
            ${posts.map(post => {
            return(postItem(post));
        }).join('')}  
               
    </ul>
`); }

export default postList;