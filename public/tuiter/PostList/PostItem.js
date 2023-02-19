/* eslint-env jquery */
const postItem = (post) => {
    return(`
   
    <ul class="list-group">
    
        <li class="list-group-item">
        <p class="mb-0 wd-bold">${post.userName}
        @${post.handle}
       ${post.time}
        </p>
        
        <p class="mb-0">${post.userInput}</p>

           
        <img src="${post.image}"
        width="450px"
        height="380px"
        class="ps-4"
        >   
        
        
       
        <p class="mb-0">${post.title}</p>
                <p>${post.postContent}</p>

        </br>
        <!--bottom icons-->
        <p class="mb-0">
            <i class="fa-regular fa-comment"></i>
            ${post.comments}
            <i class="fa-solid fa-retweet ps-3"></i>
             ${post.retuits}

             <i class="fa-solid fa-heart ps-3"></i>
                                   ${post.likes}

             <i class="fa-sharp fa-solid fa-arrow-up-from-bracket ps-3"></i>
        </p>
    </li>
    
</ul>
   
`);
}
export default postItem;



