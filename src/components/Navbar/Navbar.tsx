import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {SideBarType} from '../../redux/state';

type NavbarPropsType = {
    state: SideBarType
}

export const Navbar = (props: NavbarPropsType) => {
    const friendsElements: JSX.Element[] = props.state.friends.map(f => {
        return <div key={f.id} className={s.friend}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXq2T2dbR-rqfqZmkYK48GLd3c-GDSTfCr6g&usqp=CAU"
                alt="avatar"/>
            <p>{f.name}</p>
        </div>
    })
    return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>
                <div className={s.friends}>
                    <h2>Friends</h2>
                    <div className={s.friendsContainer}>{friendsElements}</div>
                </div>
            </nav>


    );
};

