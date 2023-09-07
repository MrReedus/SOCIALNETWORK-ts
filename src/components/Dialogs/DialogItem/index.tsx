import styles from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";


type DialogsType = {
    name: string,
    avatar: string
}

const DialogItem = (props: DialogsType) => {


  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={props.avatar} alt="" />
        </div>
          <div>{props.name}</div>
      </div>
    </div>
  );
};

export default DialogItem;
