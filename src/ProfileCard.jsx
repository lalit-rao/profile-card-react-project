import './ProfileCard.css'
import { Instagram, Linkedin, GitHub } from './images/index.js'


const ProfileCard = () => {
    return (
        <div className="container">
            <div className="container-1">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                            {/*<button>
                            hover me
                        </button>*/}
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            {/*<div class="row">
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                        </div>*/}
                            <div className="row">
                                <button>follow</button>
                                <a href="#"><img src={Instagram} alt="instagram" /></a>
                                <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                                <a href="#"><img src={GitHub} alt="github" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                            {/*<button>
                            hover me
                        </button>*/}
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            {/*<div class="row">
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                        </div>*/}
                            <div className="row">
                                <button>follow</button>
                                <a href="#"><img src={Instagram} alt="instagram" /></a>
                                <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                                <a href="#"><img src={GitHub} alt="github" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                            {/*<button>
                            hover me
                        </button>*/}
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            {/*<div class="row">
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                        </div>*/}
                            <div className="row">
                                <button>follow</button>
                                <a href="#"><img src={Instagram} alt="instagram" /></a>
                                <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                                <a href="#"><img src={GitHub} alt="github" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                            {/*<button>
                            hover me
                        </button>*/}
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
                            {/*<div class="row">
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                            <div class="col">
                                <h2>12K</h2>
                                <p>Followers</p>
                            </div>
                        </div>*/}
                            <div className="row">
                                <button>follow</button>
                                <a href="#"><img src={Instagram} alt="instagram" /></a>
                                <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                                <a href="#"><img src={GitHub} alt="github" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;