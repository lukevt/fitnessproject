import React, { Component } from 'react';
import './Register.css'

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <img src="https://images.pexels.com/photos/4752866/pexels-photo-4752866.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="trainer and client" height="800" width="400"/>

                <div className="form-body">
                    <h4 className="registration-title">Registration Info</h4>
                    <form>
                        <input className="form-input" placeholder="Name"></input>
                        <input className="form-input" placeholder="Email"></input>
                        <input className="form-input" placeholder="Mobile"></input>
                        <input className="form-input" placeholder="Password"></input>
                        <input className="form-input" placeholder="Confirm Password"></input>
                        <button className="btn">Send</button>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}
