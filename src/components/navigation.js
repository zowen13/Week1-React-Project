import React from 'react';
import 'bootstrap';


export default class Navigation extends React.Component {
    render () {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    <a href="#"><button className="btn btn-primary">Home</button></a>
                    <a href="#"><button className="btn btn-primary">Form</button></a>
                    <a href="#"><button className="btn btn-primary">Contact Us</button></a>
                </div>
            </div>
        )
    }
} 