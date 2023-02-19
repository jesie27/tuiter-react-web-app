/* eslint-env jquery */
import who from "./who.js";
const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
    <button class="bg-primary text-white rounded-4 float-end">Follow</button>

    <img src="${who.avatarIcon}"
    width = "35px"
    height= "35px"
    class="rounded-5">
         
    <span class="ms-2">${who.userName} </span>
    
    </br>
     <span class="ms-5"> @${who.handle}</span>
     

</li>
       
`);
}
export default WhoToFollowListItem;

// ${who.userName}
//<li class="list-group-item">${who.avatarIcon}</li>
// ${who.handle}

//  ${who.userName}
//<li className="list-group">test 1</li>
//<li class="list-group">test 1 ${who.userName}</li>
//${who.userName}
