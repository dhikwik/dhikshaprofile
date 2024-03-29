import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import NewsPic from '../../assets/news-image.webp';
import Emoji from '../../assets/emoji.jpg';
import {Link} from 'react-router-dom'
import '../../styles/home.css';

function Home({email}){
    return(
        <div>
            <Header email={email}/>
            <div className="container">
                <h1 className="text-center fw-bold">Hey Champs, Whats on your mind. Are you up for some interesting things</h1>
 
            <div class="row">
            <div className="col-md-6">
                <img src ={NewsPic} alt="news icon" className="main_page_icon"></img>
                <div className="text-center">
                <h2>News Feeds</h2>
                <h5>Know your surrounding by clicking here</h5>
                <Link to="/newsFeed"><button type="button" class="btn btn-primary">View More</button></Link>
                </div>
            </div>    
            <div className="col-md-6">
                         
                 <img src = {Emoji} alt="happy face" className="main_page_icon"></img>
                 <div className="text-center">
                 <h2>Mood Lifter</h2>
                <h5>If you want some positive vibes,Click here</h5>
                <Link to="/moodLifter"><button type="button" className="btn btn-success">View More</button></Link>
                </div>
             </div>
             </div>
            </div>
            <div class="content-space"></div>
             <Footer/>
        </div>
    )
}

export default Home