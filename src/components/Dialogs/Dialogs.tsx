import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages}) => {

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;