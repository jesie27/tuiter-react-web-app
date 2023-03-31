import React from "react";
import EditProfile from "../edit-profile";

const ProfileComponent=(
    {profile = {
        "firstName": "Nola",
        "lastName": "Corgi",
        "handle": "@nolathecorgi",
        "profilePicture": "corgi.jpg",
        "bannerPicture": "../public/images/corgi-bench.jpg",
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


                <p>{profile.firstName} {profile.lastName}</p>
            <p>  {profile.bio}</p>
<p>{profile.location} Born{profile.dateOfBirth}  Joined{profile.dateJoined}</p>
<p>{profile.followingCount}Following {profile.followersCount}Followers</p>
                <p>{profile.bannerPicture}</p>
        </div>
    );
}
export default ProfileComponent;