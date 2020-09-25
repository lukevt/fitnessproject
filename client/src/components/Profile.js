import React, { Component } from 'react';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-body">
                <div className="row">
                    <div className="col-3" style={{height: 1000, border:"1px solid #C5B358"}}>
                        <div>
                            <img className="rounded-circle" src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg" alt="personal-profile" height="300" width="300"/> 
                        </div>
                        <div style={{display:"flex", alignItems: "space-around", flexWrap:"wrap", margin:"auto", padding:10}}>
                            <a className="profile-btn">My Training</a>
                            <a className="profile-btn"> My measures</a>
                            <a className="profile-btn">My Nutrition</a>
                            <a className="profile-btn">My Goals</a>
                            <a className="profile-btn">My Messages</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <h1 className="profile-title">Hello<span>Name LastName</span></h1>
                        <div className="container" style={{backgroundColor:"lightgray",border:"1px solid #C5B358"}}>
                       
                        </div>
                    </div>
                </div>
                <div className="row">


                </div>
            </div>
        )
    }
}
