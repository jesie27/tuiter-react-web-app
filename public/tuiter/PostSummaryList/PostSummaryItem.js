const PostSummaryItem = (post) =>{
    return(`
    ${post.topic}
    ${post.userName}
    ${post.time}
    ${post.image}
    ${post.title}
    `);
}
export default PostSummaryItem;

