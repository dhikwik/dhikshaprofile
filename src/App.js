import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import NewsFeed from './components/NewsFeed/NewsFeed';
import MoodLifter from './components/MoodLifter/MoodLifter'

function App() {
     const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        sessionStorage.setItem('email', profile.email);
                        console.log("p",profile.email)

                     })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
    
    return (
        <div>
            {profile ? (
  
                <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home email={profile.email} />} />
                <Route path="/newsFeed" element={<NewsFeed />} />
                <Route path="/moodLifter" element={<MoodLifter />} />
                </Routes>
                </BrowserRouter>
             ) : (
                <>
                <br />
                <h2 className="text-center">React Google Login</h2>
                <button onClick={login} className="btn btn-primary signIn">Sign in with Google </button>
                </>
            )}
        </div>
    );
}
export default App;