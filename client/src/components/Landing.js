import React, { Component } from 'react';
import './Landing.css'

export default class Landing extends Component {
    render() {
        
        return (
            <div>
                <h1 className="landing-title">Your journey <span>to fitness beggins here</span></h1>
                <img src="https://i.pinimg.com/originals/78/28/96/782896bfd43094785993acaf3931cc69.png" alt="" className="landing-image" height="400" width="400"/>
                <button className="landing-btn">Start</button>
                <div style={{display:"flex", width:"920px", position:"absolute", top:"10%", left:"20%", border:"1px solid #C5B358", borderRadius:10}}>
                    {/* <div className="alt-div" >
                        <div className="grid-container">
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/31/15/07/weights-869225_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_1280.jpg")`}}></div>  
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2014/12/20/09/18/running-573762_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg")`}}></div>
                            <div id="guy-bar" className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_1280.jpg")`}}></div>  
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2014/09/28/19/49/fitness-465203_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/10/11/01/58/woman-1730325_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2018/06/02/18/22/fitness-3448864_1280.jpg")`}}></div> 
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/03/08/22/14/sport-1244925_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/01/19/08/kickboxer-1561793_1280.jpg")`}}></div> 
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2017/09/06/15/22/control-2721901_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2017/09/27/18/52/gym-2793007_1280.jpg")`}}></div>
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2018/04/21/11/29/people-3338256_1280.jpg")`}}></div>   
                            <div className="grid-item" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2019/02/19/14/38/fitness-4006934_1280.jpg")`}}></div>   
                        </div>
                    </div>  */}
                    <div className="row" style={{width:250}}>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2015/07/31/15/07/weights-869225_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>

                    </div>
                    <div className="row" style={{width:250}}>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2014/09/28/19/49/fitness-465203_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2016/10/11/01/58/woman-1730325_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2018/06/02/18/22/fitness-3448864_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    

                    </div>
                    <div className="row" style={{width:250}}>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2016/03/08/22/14/sport-1244925_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2016/08/01/19/08/kickboxer-1561793_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2017/09/06/15/22/control-2721901_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    

                    </div>
                    <div className="row" style={{width:250}}>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2017/09/27/18/52/gym-2793007_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2018/04/21/11/29/people-3338256_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2019/02/19/14/38/fitness-4006934_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    <div class="cube">
                        <div class="flip">
                            <span><img src="https://cdn.pixabay.com/photo/2014/12/20/09/18/running-573762_1280.jpg" alt="" height="200" width="250"/></span>
                        </div>
                        <div class="flop">
                            <span></span>
                        </div>
                    </div>
                    

                    </div>
            </div>

            </div>
        )
    }
}