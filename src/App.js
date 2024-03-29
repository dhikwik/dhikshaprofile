import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import NewsFeed from './components/NewsFeed/NewsFeed';
import MoodLifter from './components/MoodLifter/MoodLifter'
 
const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                        <Route path="newsFeed" element={<NewsFeed/>}></Route>
                        <Route path="moodLifter" element={<MoodLifter/>}></Route>
                       
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing