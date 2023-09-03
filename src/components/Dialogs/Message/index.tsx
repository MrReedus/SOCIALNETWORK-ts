import styles from "./../Dialogs.module.scss";


type MessagesType = {
  text: string
}

const Message = (props: MessagesType) => {
  return <div className={styles.message}>{props.text}</div>;
};

export default Message;
