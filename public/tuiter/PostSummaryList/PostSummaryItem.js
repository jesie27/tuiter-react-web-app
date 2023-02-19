/* eslint-env jquery */

const PostSummaryItem = (post) => {
    return(`
<ul class="list-group">
   <li class="list-group-item">
   <p class="mb-0 wd-fg-color-gray">${post.topic}</p>

    <img  src="${post.image}"
    width="80px"
    height="80px"
    class="rounded-4 float-end">
    
    <p class="mb-0"><span class="wd-bold">${post.userName}</span><span class="wd-fg-color-gray"> - ${post.time}</span></p>
   
    <p class="mb-0 wd-bold">${post.title}</p>
    </li>
    </ul>
    `);
}
export default PostSummaryItem;
