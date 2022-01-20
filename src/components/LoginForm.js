import React from 'react';
import Navigation from './navigation';
import UserName from './user-name';
import Password from './password';


export default class LoginForm extends React.Component {
    render () {
        return (
            <div className="container">
                <Navigation />
                <div className="card w-75">
                    <h3 className="border border-dark w-100">Log In</h3>
                    <UserName />
                    <Password />
                </div>
            </div>
        )
    }
}