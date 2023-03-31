    import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!----------------- search field and cog ------------------->                                
                    <div class="row position-relative">
                        <div class="row col-11 max-width:300px input-icons">
                        <i class="fa-solid fa-magnifying-glass position-absolute mt-2"></i>
                            <input type="text"
                                   class="input-field rounded-5 ps-5 mb-2"
                                   placeholder= "Search Tuiter" />
                            </div>
                    <div class="col-1">
                        <i class="fa-solid fa-gear fa-2x text-primary"></i>
                        </div>
                        </div>
                        
                        
                  
     </div>
           
           
           
           <ul class="nav mb-2 nav-tabs">
                      <!------------------- tabs ------------------->
                      
                        <div>
                        <ul class="nav nav-tabs mb-2 ">
                            <li class="nav-item  ">
                                <a class="nav-link active" href="#">For You</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href=#">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-sm-none d-md-block d-none d-sm-block" href="#">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                      
                      
           </ul>
           <!------------------- image with overlaid text ------------------->
           
           <div class="position-relative">
                        <img src="spacexstar.jpg"
                              width="540px"
                              height="350px"/>
                        <div class="position-absolute bottom-0 wd-starship-image text-white fs-4">SpaceX's Starship</div>

                    </div>
           
           
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
