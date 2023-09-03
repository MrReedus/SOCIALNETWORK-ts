import styles from "../Profile.module.scss";
import React from "react";


const ProfileInfo = () => {
    return (
        <>
            <img src="https://wallpapers.com/images/hd/city-basketball-court-street-gkz98iv9ljs2nwv8.jpg" alt=""/>

            <div className={styles.wrapper}>
                <div className={styles.avatar}>
                    <img
                        src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
                        alt="avatar"
                    />
                </div>
                <div className={styles.info}>
                    <h2>Evgenii Nikonov</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi accusamus voluptatem
                        sunt
                        corporis
                    </p>
                    <div className={styles.info}>
                        <p>
                            Date of birth: <span>02.01.1996</span>
                        </p>
                        <p>
                            City <span>Kemerovo</span>
                        </p>
                        <p>
                            {" "}
                            Education <span>TGASU</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo


