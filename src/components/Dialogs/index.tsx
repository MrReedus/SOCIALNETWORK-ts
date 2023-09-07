import React from "react";
import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import Message from "./Message";
import {dialogsPageType, DialogsType, MessagesType} from "../../redux/state";

type dialogsPropsType = {
    state: dialogsPageType
}

const Dialogs = (props: dialogsPropsType) => {



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
                <div className="">
                    {props.state.dialogs.map(d => {
                        return (
                            <NavLink to={'/dialogs/' + '' + d.id}><DialogItem  key={d.id} name={d.name} avatar={d.avatar}/></NavLink>
                        )
                    })}
                </div>

                <div className={styles.messages}>
                    {props.state.messages.map(m => {
                        return (
                            <Message text={m.message}/>
                        )
                    })}
                </div>
            </div>
            <div className={styles.textAreaWrapper}>
                <textarea className={styles.textArea}
                    // onChange={onChangeNewMessage}
                    // value={messagesData.newMessageBody}

                    placeholder="Enter Your message..."
                ></textarea>
                <button className="button button--dialog">
                    send message
                </button>
            </div>



                {/*// let dialogElements = messagesData.dialogs.map((dialog) => (*/}
                {/*//   <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatarUrl={dialog.avatarUrl} />*/}
                {/*// ));*/}

Создает отдельный state и прокидывает данный компонентам типизируя их

        </>
    );
};

export default Dialogs;
