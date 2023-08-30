import styles from "./../Dialogs.module.scss";

const Message = ({ text }) => {
  return <div className={styles.message}>{text}</div>;
};

export default Message;
