import './ProfileCard.css'
import { Instagram, Linkedin, GitHub } from './images/index.js'


const ProfileCard = () => {
    return (
        <div className="containerof">
            <div className="containerof-1">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
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
            <div className="containerof-2">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>Lucifurr Fracking</h2>
                            <p>CEO, India</p>
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
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
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
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
                        </div>
                        <div className="back">
                            <h1>Lucifurr <span>Fracking</span></h1>
                            <p>I am the Chief Executive Officer of <span>Cat Memes.com</span></p>
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