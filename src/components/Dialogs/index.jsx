import React from "react";
import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialogs = ({}) => {


    // let messageElements = messagesData.messages.map((message) => <Message key={message.id} text={message.text} />);

    // const onSendMessageClick = () => {
    //   store.dispatch(sendMessageCreator());
    // };
    // const onChangeNewMessage = (e) => {
    //   let body = e.target.value;
    //   store.dispatch(updateMessageBodyCreator(body));
    // };

    return (
        <>
            <h2>Dialogs</h2>
            <div className={styles.dialogs}>

                {/*<div className={styles.items}>{dialogElements}</div>*/}
                {/*<div className={styles.messages}>{messageElements}</div>*/}
                {/*<div className={styles.textAreaWrapper}>*/}
                <textarea
                    // onChange={onChangeNewMessage}
                    // value={messagesData.newMessageBody}
                    className={styles.textArea}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter Your message..."
                ></textarea>
                <button className="button button--dialog">
                    send message
                </button>


                {/*// let dialogElements = messagesData.dialogs.map((dialog) => (*/}
                {/*//   <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatarUrl={dialog.avatarUrl} />*/}
                {/*// ));*/}
                <NavLink to={'/dialogs/1'}><DialogItem/></NavLink>
                <NavLink to={'/dialogs/2'}><DialogItem/></NavLink>
                <NavLink to={'/dialogs/3'}><DialogItem/></NavLink>
                <NavLink to={'/dialogs/4'}><DialogItem/></NavLink>

            </div>

        </>
    );
};

export default Dialogs;
