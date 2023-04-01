import React from "react";
import {useDispatch} from "react-redux";
import ProfileComponent from "../profile";
const EditProfile =({profile = {
    "firstName": "Nola",
    "lastName": "Corgi",
    "handle": "@nolathecorgi",
    "profilePicture": "corgi.jpg",
    "bannerPicture": "images/corgibench.jpg",
    "bio": "Dog",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "7/11/2023",
    "dateJoined": "3/2023",
    "followingCount": 340,
    "followersCount": 223,
    "editing": false
}
                    }) => {

    const dispatch = useDispatch()

    return(
        <div>
            <a href={"profile"}></a>
            <button >X</button>
            <h4>Edit Profile</h4>
            <button className="float-end bg-black text-white rounded-4">Save</button>

            <br/>
            <br/>

            <label for="name-field">Name</label>
            <br/>
            <textarea placeholder="Name" id="name-field">
            Name
            </textarea>
            {profile.firstName}
            {profile.lastName}

            <button className="float-end" onClick={() => dispatch(
                profile.editing  =! profile.editing
            )}>
                {profile.editing ? "save":"edit"}
        </button>
        </div>

    )

}
export default EditProfile;