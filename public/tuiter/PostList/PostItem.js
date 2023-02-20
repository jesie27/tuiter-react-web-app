/* eslint-env jquery */
const postItem = (post) => {
    return(`
   
    <ul class="list-group">        
        <li class="list-group-item">
        
      
        
        <p class="mb-0">
        
          <img src="${post.propic}"
        width="50px"
        height="50px"
        class="rounded-5 me-2   "
        >
        <span class="wd-bold">${post.userName}</span>
       <span class="wd-fg-color-gray"> @${post.handle}
       ${post.time}</span>
        </p>
        
        <p class="mb-0 ms-5">${post.userInput}</p>

            <img src="${post.image}"
            width="462px"
            height="380px"
            class="border border-secondary rounded-top ms-5"
            >   
                 
            <p class="wd-fg-color-gray ms-5 border rounded-bottom border-secondary">
                <span class="text-white">${post.title}</span></br>
                ${post.postContent}
                </p>


  

        </br>
        <!--bottom icons-->
        <p class="mb-0 wd-fg-color-gray ms-5">
            <i class="fa-regular fa-comment pe-2"></i>
            ${post.comments}
            <i class="fa-solid fa-retweet ps-3 pe-2"></i>
             ${post.retuits}

             <i class="fa-solid fa-heart ps-3 pe-2"></i>
             ${post.likes}

             <i class="fa-sharp fa-solid fa-arrow-up-from-bracket ps-3"></i>
        </p>
    </li>
    
</ul>
   
`);
}
export default postItem;



