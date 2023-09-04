import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({}) => {


    return (
        <>

            <ProfileInfo/>
            <MyPosts/>

        </>
    );
};

export default Profile;
