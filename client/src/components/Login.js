import React, { Component } from 'react';
import './Register.css'

export default class Login extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                <img src="https://images.pexels.com/photos/4662326/pexels-photo-4662326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="trainer and client" height="800" width="400"/>

                <div className="form-body">
                    <h4 className="registration-title">Registration Info</h4>
                    <form>
                        <input className="form-input" placeholder="Name"></input>
                        <input className="form-input" placeholder="Email"></input>
                        <button className="btn">Send</button>
                    </form>
                    
                </div>
                
            </div>
            </div>
        )
    }
}
