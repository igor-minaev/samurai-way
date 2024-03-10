import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div>
           <div className='dialogs-items'>
               <div className='dialog'>
                   Dimych
               </div>
               <div className='dialog'>
                   Andrey
               </div>
               <div className='dialog'>
                   Sveta
               </div>
               <div className='dialog'>
                   Sasha
               </div>
               <div className='dialog'>
                   Viktor
               </div>
               <div className='dialog'>
                   Valera
               </div>
           </div>
            <div className='messages'>
                <div className="message"></div>
                <div className="message"></div>
                <div className="message"></div>
            </div>
        </div>
    );
};

