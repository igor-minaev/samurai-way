import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
     <header className='header'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU" alt="logo"/>
     </header>
        <nav className='nav'>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
        <div className='content'>
           <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JsSpz98fRY-Gi2gSyV5cvM9Q1cBV5hcNKQ&usqp=CAU" alt="image"/>
           </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>
        </div>
    </div>
  );
}

export default App;
