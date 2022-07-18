import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({state}) => {

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} link={d.link}/>)

    const messagesElements = state.messages.map(m => <Message message={m.message}/>)
    const newDialogElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        const textMessage = newDialogElement.current?.value
        alert(textMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newDialogElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;