import React from 'react';
import Friend from './friend';

export default ({friends, removeFriend, updateFriend}) => (
   <div className="friends">
    <ul>
        {
            friends.map((friend, i) => {
                const {name, age, email} = friend;
                return (<Friend key={i} name={name} age={age} email={email} removeFriend={(e) => { removeFriend(i)}} updateFriend={(friend) => { updateFriend({index: i, update: friend})}}/>);
            })
        }
    </ul>
   </div>
)