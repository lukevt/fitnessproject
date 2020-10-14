import React, { Component } from 'react';
import  './Trainers.css'

export default class Trainers extends Component {
    render() {
        return (
            <div>
                <h1 className="trainers-title">Meet<span>Our Trainers</span></h1>
                <div style={{display:"flex", justifyContent:"space-around", alignItems:"space-around"}}>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="trainer"/>
                        <div class="card-body">
                            <h5 class="card-title">Daniel Stevens</h5>
                            <p class="card-text">Budy Building Technitian & Body Recovery expert</p>
                            <a href="/trainer" class="btn btn-info">Meet TrainerName</a>
                        </div>
                        <div style={{display:"flex" , justifyContent:"space-around", marginBottom:10}}>
                            <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                            <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                            <img src="https://external-preview.redd.it/sgupg2QyvwFm7eLaH0isYTSx1IAYT2cnG9EG2qaK7dc.png?auto=webp&s=c2fe73665a3b109d9a040fb4f70fcba4e2875149" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                        </div>
                        
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Marcus O'Neal</h5>
                            <p class="card-text">MMA Instructor & Body Reconditioning Specialist</p>
                            <a href="/trainer" class="btn btn-info">Meet TrainerName</a>
                        </div>
                        <div style={{display:"flex" , justifyContent:"space-around", marginBottom:10}}>
                            <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                            <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                        </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Maria Martinez</h5>
                            <p class="card-text">Pilates & CrossFit Specialist</p>
                            <a href="/trainer" class="btn btn-info">Meet TrainerName</a>
                        </div>
                        <div style={{display:"flex" , justifyContent:"space-around", marginBottom:10}}>
                            <img src="https://1.bp.blogspot.com/-ssV20xX14DM/U0V14txKTiI/AAAAAAAACtA/ngiQhHmhzaw/s1600/union-jack-flag.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                            <img src="https://i.pinimg.com/736x/d0/8e/74/d08e7498895627d303c84ea60ceff42f.jpg" class="rounded-circle" alt="trainer"style={{height:25, width:25}}/>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/4109Z2o0HuL._AC_SL1005_.jpg" class="rounded-circle" alt="trainer" style={{height:25, width:25}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
