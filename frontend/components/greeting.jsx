import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const loggedIn = () => (
        <div>
            <p>Hello {currentUser.username}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
    
    const loggedOut = () => (
        <div>
            <Link to='/signup'>Signup</Link>
            <br/>
            <Link to='/login'>Login</Link>
        </div>
    );

    return currentUser ? loggedIn() : loggedOut()
}

export default Greeting;