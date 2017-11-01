import React from 'react';
import Friend from './friend';

export default ({friends, removeFriend}) => (
   <div className="friends">
    <ul>
        {
            friends.map((friend, i) => {
                const {name, age, email} = friend;
                return (<Friend key={i} name={name} age={age} email={email} removeFriend={(e) => { removeFriend(i)}} />);
            })
        }
    </ul>
   </div>
)