import React from "react";
import EditProfile from "../edit-profile";


const ProfileComponent=(
    {profile = {
        "firstName": "Nola",
        "lastName": "Corgi",
        "handle": "@nolathecorgi",
        "profilePicture": "corgi.jpg",
        "bannerPicture": "../public/images/corgibench.jpg",
        "bio": "Dog",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",
        "dateOfBirth": "7/11/2023",
        "dateJoined": "3/2023",
        "followingCount": 340,
        "followersCount": 223
        }
    }
) =>
{

    return (
        <div>

            <h4>Profile</h4>
            <a href={"edit-profile2"}><button className={"float-right"}>Edit Profile</button></a>


                <h1>{profile.firstName} {profile.lastName}</h1>
            <h2>  {profile.bio}</h2>
<h2>{profile.location} Born{profile.dateOfBirth}    Joined{profile.dateJoined}</h2>
<h2>{profile.followingCount}Following   {profile.followersCount}Followers</h2>
                <p>{profile.bannerPicture}</p>
        </div>
    );
}
export default ProfileComponent;