import React from "react";

import NavigationSidebar
    from "./navigation-sidebar";

import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import HomeSummaryList2 from "./tuits/TuitsList";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import HomeComponent2 from "./tuits/homeindex2";
import ProfileComponent from "./profile/index";


import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import Homeindex2 from "./tuits/homeindex2";
import EditProfile from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="" element={<ExploreComponent/>}/>
                    <Route path="home" element={<HomeComponent2/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile2" element={<EditProfile/>}/>


                </Routes>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>

    );
}

export default Tuiter