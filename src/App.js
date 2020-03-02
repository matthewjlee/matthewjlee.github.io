import React, { Component} from "react";
import "./App.css";
import github_icon from "../public/images/github-72.png"
import twitter_icon from "../public/images/twitter-72.png"
import linkedin_icon from "../public/images/linkedin-72.png"

class App extends Component{
  render(){
    return (
        <div className="content">
            <header>
                <h1 className="intro">
                    Hi! I’m Matthew Lee, a fullstack engineer <br/> working on different things.
                </h1>
            </header>
            <footer className="footer">
                <div className="link-container">
                    <img className='icon' src={github_icon}/>
                    <img className='icon' src={twitter_icon}/>
                    <img className='icon' src={linkedin_icon}/>
                </div>
            </footer>
        </div>
    );
  }
}

export default App;
