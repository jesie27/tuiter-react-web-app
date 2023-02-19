import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                     
                       
                       
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
                      <!-- tabs -->
                      
                      
           </ul>
           <!-- image with overlaid text -->
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
