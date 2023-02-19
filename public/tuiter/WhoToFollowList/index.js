import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return(`
         ${who.map(who => {
        return(WhoToFollowListItem(who));
    }).join('')}  
    }     
`); }
