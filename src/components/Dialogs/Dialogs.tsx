import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({state}) => {

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} link={d.link}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

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