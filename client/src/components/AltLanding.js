import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AltLanding extends Component {
    render() {
        return (
            <div className="home-container">
              <div className="landing-container">
                <h1 className="profile-title">Your journey to fitness starts <span className="landing-link"><Link to="/login" style={{ textDecoration: 'none' }}>here</Link></span></h1>
              </div>
            </div>
        )
    }
}
