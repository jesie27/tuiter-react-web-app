import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
                    }
                    const heartColor = tuits.liked? "bi bi-heart-fill": "bi bi-heart";
                        <i className = {`fa ${heartColor}`} style = {{color:'red'}}></i>

        }
    }

});

export const {createTuit, deleteTuit, likePost} = tuitsSlice.actions;
export default tuitsSlice.reducer;