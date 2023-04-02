import React from "react";
import EditProfile from "../edit-profile";
import profile from "./profile-info.json";
import {Link} from "react-router-dom";

const ProfileComponent=(
) =>
{
console.log(profile)
    return (
        <div>

            <h4>Profile</h4>

            <Link to={"/tuiter/edit-profile"} className="btn btn-light"> Edit
            </Link>


                <h1>{profile.firstName} {profile.lastName}</h1>
            <div>  {profile.bio}</div>
<div>{profile.location} Born{profile.dateOfBirth}       Joined    {profile.dateJoined}</div>
<div>{profile.followingCount}Following   {profile.followersCount}Followers</div>
                <img src="{profile.bannerPicture}" ></img>
        </div>
    );
}
export default ProfileComponent;