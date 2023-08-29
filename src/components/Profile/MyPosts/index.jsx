import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";


const MyPosts = ({}) => {
  // let postElements = posts.map((post) => {}
    return <Post/>;
;
  //
  // let newPostElement = React.createRef(); //* создали ссылку, ссылаемся на textarea обозначив её там.

  const addNewPost = () => {
    // dispatch(addPostACtionCreator());
  };

  const onChangePost = () => {
    // let text = newPostElement.current.value;
    // let action = onChangePostActionCreator(text);
    // dispatch(action);
  };
  return (
    <div className={styles.posts}>
      <div className={styles.container}>
        <textarea
          // ref={newPostElement}
          className={styles.textarea}
          cols="20"
          rows="5"
          // value={newPostText}
        />
        <button className="button" >
          add post
        </button>
        <button
          className="button"

        >
          remove
        </button>
      </div>

      <h2>Posts</h2>
      {/*{postElements}*/}
    </div>
  );
};

export default MyPosts;
