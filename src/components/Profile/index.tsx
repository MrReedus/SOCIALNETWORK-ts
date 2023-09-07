import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


export type ProfilePropsType =  {
    state: profilePageType
}
const Profile = (props: ProfilePropsType ) => {


    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>

        </>
    );
};

export default Profile;
