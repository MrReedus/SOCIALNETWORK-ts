import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";
import {Action} from "redux";


export type ProfilePropsType =  {
    ProfilePageData: profilePageType
    dispatch: (action: Action) => void;

}
const Profile = (props: ProfilePropsType ) => {


    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePageData.posts} dispatch={props.dispatch} newPostText={props.ProfilePageData.newPostText}  />

        </>
    );
};

export default Profile;
