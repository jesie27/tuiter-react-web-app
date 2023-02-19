/* eslint-env jquery */
import who from "./who.js";
const WhoToFollowListItem = (who) => {
    return(`
    <h1>test wtf</h1> 
    <li class="list-group-item">
       ${who.handle}

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
