import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import profile from "../profile/index";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const profileTemplate = {
    "firstName": "Jesie",
    "lastName": "F",
    "handle": "@jesie",
    "profilePicture": "corgi.jpg",
    "bannerPicture": "../public/images/corgibench.jpg",
    "bio": "Computer Scientist",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "7/11/2023",
    "dateJoined": "3/2023",
    "followingCount": 340,
    "followersCount": 223
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likePost(state, action) {
            const tuitItem = state
                .find((tuitItem) =>
                    tuitItem._id === action.payload._id)
                    if (tuitItem.liked) {
                        tuitItem.likes++;
                        const heartColor = tuitItem.liked? `bi bi-heart-fill`: `bi bi-heart`;
                        <i className = {`bi ${heartColor}`} style = {{color:'red'}}></i>
                        tuitItem.liked =~ tuitItem.liked;
                    }

                    else {
                        tuitItem.likes--;

                    }

        },
        Profile(state, action) {

        }
    }

});

export const {createTuit, deleteTuit, likePost, Profile} = tuitsSlice.actions;
export default tuitsSlice.reducer;