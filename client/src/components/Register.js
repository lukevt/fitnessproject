import React, { Component } from 'react';
import './Register.css';
import { addUser } from "../store/actions/userActions";


export default class Register extends Component {

    constructor(props){
        super(props);
        this.state={
        name: "",
        email: "",
        mobile: "",
        profile_img: "",
        password:"",
        
       }
      }
      
      handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
      }
 
     
      handleSubmit = (e) => {
          e.preventDefault()
          const name = this.state.name
          const email = this.state.email
          const mobile = this.state.mobile
          const profile_img = this.state.profile_img
          const password = this.state.password
          const body = JSON.stringify({name, email, mobile, profile_img, password})
          
          this.props.addUser(body)
      }
     



    render() {
        return (
            <div className="container">
                <img className="register-image" src="https://images.pexels.com/photos/4752866/pexels-photo-4752866.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="trainer and client" height="800" width="400" style={{borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10}}/>

                <div className="form-body">
                    <h4 className="registration-title">Registration Info</h4>
                    <form>
                        <input className="form-input" placeholder="Name" onChange={this.handleChange}></input>
                        <input className="form-input" placeholder="Email" onChange={this.handleChange}></input>
                        <input className="form-input" placeholder="Mobile" onChange={this.handleChange}></input>
                        <input className="form-input" placeholder="Profile Image" onChange={this.handleChange}></input>
                        <input className="form-input" placeholder="Password" onChange={this.handleChange}></input>
                        <input className="form-input" placeholder="Confirm Password" onChange={this.handleChange}></input>
                        <button className="btn" onSubmit = {this.handleSubmit}>Send</button>
                    </form>
                    
                </div>
                
            </div>
        )
    }
};

