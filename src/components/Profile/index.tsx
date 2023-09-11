import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


export type ProfilePropsType =  {
    ProfilePageData: profilePageType
    addPost:() => void
    updatePostText:(newText: string) => void

}
const Profile = (props: ProfilePropsType ) => {


    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePageData.posts} addPost={props.addPost} newPostText={props.ProfilePageData.newPostText} updatePostText={props.updatePostText} />

        </>
    );
};

export default Profile;
