import React from "react";

const ProfileComponent=(
    {profile = {
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
    }
) =>
{

    return (
        <div>
            <h4>Profile</h4>
            <div>{profile.firstName} {profile.lastName}</div>
            <div>  {profile.bio}</div>
<div>{profile.location}     Born{profile.dateOfBirth}  Joined{profile.dateJoined}</div>
<div>{profile.followingCount}Following {profile.followersCount}Followers</div>
        </div>
    );
}
export default ProfileComponent;