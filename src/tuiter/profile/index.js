import React from "react";

const ProfileComponent=(
    {   profile = {
        "firstName": "Jesie",
        "lastName": "F",
        "handle": "@jesie",
        "profilePicture": "corgi.png",
        "bannerPicture": "corgi-bench.png",
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
            {profile.bio}

        </div>
    );
}
export default ProfileComponent;