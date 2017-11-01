import React from 'react';

export default ({name, age, email, removeFriend}) => (
    <li><span className="name">{name}</span><span className="age">{age}</span><span className="email">{email}</span><button onClick={removeFriend}>remove</button></li>
)