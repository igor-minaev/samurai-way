import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';




export const Dialogs = () => {

    const dialogsElements: JSX.Element[] = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements: JSX.Element[] = messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem id={dialogs[0].id} name={dialogs[0].name}/>*/}
                {/*<DialogItem id={dialogs[1].id} name={dialogs[1].name}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
                {/*<Message message={messages[2].message}/>*/}
            </div>
        </div>
    );
};

