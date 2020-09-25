import React, { Component } from 'react';
import  './Trainers.css'

export default class Trainers extends Component {
    render() {
        return (
            <div>
                <h1 className="trainers-title">Meet<span>Our Trainers</span></h1>
                <div style={{display:"flex", justifyContent:"space-around", alignItems:"space-around"}}>
                    

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="trainer-standing" height="600"/>

                            </div>
                            <div className="flip-card-back">
                                <h1>John Smith</h1> 
                                <p>Budy Building Technitian & Body Recovery expert</p> 
                                <p>Danny is a full time group fitness instructor working in Devon. For the last 3 years Danny has been making his mark teaching Les Mills Body Pump, Body Combat and Body Attack, achieving the level of Elite Instructor. Before this, Danny was a professional athlete and competed internationally as a GB Taekwondo fighter. Danny has more than 20 years experience in martial arts and now carries that over to his fitness training and teaching. Ready now to deliver meaningful programs to clients ready to make real actionable changes to their life and hit real goals. As Danny's client, you get access to the skills and knowledge spanning over two decades without the need to ever organise a meeting. Get all of the advantages of having a personal trainer with the freedom to do your catered workouts whenever you want. Not a member of a gym? No problem. The workout is 100% personal to you and your needs. Let's get started today.</p>
                                <div style={{display:"flex", justifyContent:"space-around"}}>
                                <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://external-preview.redd.it/sgupg2QyvwFm7eLaH0isYTSx1IAYT2cnG9EG2qaK7dc.png?auto=webp&s=c2fe73665a3b109d9a040fb4f70fcba4e2875149" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="trainer-standing" height="600"/>

                            </div>
                            <div className="flip-card-back">
                                <h1   h1>Marcus Stevens</h1> 
                                <p>MMA Instructor & Body Reconditioning Specialist</p> 
                                <p>Danny is a full time group fitness instructor working in Devon. For the last 3 years Danny has been making his mark teaching Les Mills Body Pump, Body Combat and Body Attack, achieving the level of Elite Instructor. Before this, Danny was a professional athlete and competed internationally as a GB Taekwondo fighter. Danny has more than 20 years experience in martial arts and now carries that over to his fitness training and teaching. Ready now to deliver meaningful programs to clients ready to make real actionable changes to their life and hit real goals. As Danny's client, you get access to the skills and knowledge spanning over two decades without the need to ever organise a meeting. Get all of the advantages of having a personal trainer with the freedom to do your catered workouts whenever you want. Not a member of a gym? No problem. The workout is 100% personal to you and your needs. Let's get started today.</p>
                                <div style={{display:"flex", justifyContent:"space-around"}}>
                                <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://www.mapsofworld.com/images/world-countries-flags/germany-flag.gif" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="trainer-standing" height="600"/>

                            </div>
                            <div className="flip-card-back">
                            <h1>Maria MArtinez</h1> 
                            <p>Pilates & CrossFit Specialist</p> 
                            <p>Danny is a full time group fitness instructor working in Devon. For the last 3 years Danny has been making his mark teaching Les Mills Body Pump, Body Combat and Body Attack, achieving the level of Elite Instructor. Before this, Danny was a professional athlete and competed internationally as a GB Taekwondo fighter. Danny has more than 20 years experience in martial arts and now carries that over to his fitness training and teaching. Ready now to deliver meaningful programs to clients ready to make real actionable changes to their life and hit real goals. As Danny's client, you get access to the skills and knowledge spanning over two decades without the need to ever organise a meeting. Get all of the advantages of having a personal trainer with the freedom to do your catered workouts whenever you want. Not a member of a gym? No problem. The workout is 100% .</p>
                            <h4>Languages:</h4>
                            <div style={{display:"flex", justifyContent:"space-around"}}>
                                <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/4109Z2o0HuL._AC_SL1005_.jpg" alt="" height="30" width="50" style={{borderRadius:"5px"}}/>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
