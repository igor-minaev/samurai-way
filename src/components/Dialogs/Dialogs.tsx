import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements: JSX.Element[] = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id}
                                                                                    name={d.name}/>)
    const messagesElements: JSX.Element[] = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        const message = newMessageElement.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

