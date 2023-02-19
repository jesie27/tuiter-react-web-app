import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const WhoToFollowList = () => {
    return(`
         ${who.map(who => {
        return(WhoToFollowListItem(who));
    }).join('')}  
    }     
`); }
