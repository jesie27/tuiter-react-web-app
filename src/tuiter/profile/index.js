import React from "react";
import EditProfile from "../edit-profile";
import profile from "./profile-info.json";

const ProfileComponent=(

) =>
{
console.log(profile)
    return (
        <div>

            <h4>Profile</h4>
            <a href={"edit-profile"}><button className={"float-right"}>Edit Profile</button></a>


                <h1>{profile.firstName} {profile.lastName}</h1>
            <div>  {profile.bio}</div>
<div>{profile.location} Born{profile.dateOfBirth}       Joined    {profile.dateJoined}</div>
<div>{profile.followingCount}Following   {profile.followersCount}Followers</div>
                <p>{profile.bannerPicture}</p>
        </div>
    );
}
export default ProfileComponent;