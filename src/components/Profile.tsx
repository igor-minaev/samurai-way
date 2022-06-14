import React from 'react';

const Profile=()=>{
    return(
        <div className={'content'}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnO06h7f7UVtq8EOdc-noNMcApwJotJ-12A&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;