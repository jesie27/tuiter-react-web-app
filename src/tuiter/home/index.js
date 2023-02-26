import React from "react";
import PostSummaryList from "../post-summary-list";
import NavigationSidebar
    from "../navigation-sidebar";

function HomeComponent() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
        </div>
    );
}
export default HomeComponent;
