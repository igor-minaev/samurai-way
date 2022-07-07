import React from 'react';
import s from './../Navbar.module.css';
import {FriendType} from "../../../redux/state";

type SidebarPropsType = {
    sidebar: Array<FriendType>
}

export const Sidebar:React.FC<SidebarPropsType> = ({sidebar}) => {
    let friends = sidebar.map(f=><div className={s.friend}><img  src={f.link} alt="/"/><div>{f.name} </div></div>)
    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    );
};

