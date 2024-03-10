import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id: string
    name: string
}

const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Andrey"/>
                <DialogItem id="3" name="Sveta"/>
                <DialogItem id="4" name="Sasha"/>
                <DialogItem id="5" name="Viktor"/>
                <DialogItem id="6" name="Valera"/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

