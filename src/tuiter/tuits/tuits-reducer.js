import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}
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
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }

    },

    reducers: {
        // deleteTuit(state, action) {
        //     const index = state
        //         .findIndex(tuit =>
        //             tuit._id === action.payload);
        //     state.splice(index, 1);
        // },
        //
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // },
        // likePost(state, action) {
        //     const tuitItem = state
        //         .find((tuitItem) =>
        //             tuitItem._id === action.payload._id)
        //             tuitItem.liked =! tuitItem.liked
        //             if (tuitItem.liked) {
        //                 tuitItem.likes++;
        //             }
        //
        //             else {
        //                 tuitItem.likes--;
        //
        //             }

        //},
        Profile(state, action) {

        }
    }

});

export const {createTuit, deleteTuit, likePost, Profile} = tuitsSlice.actions;
export default tuitsSlice.reducer;