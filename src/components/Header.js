import React from 'react';
import {Outlet,Link} from 'react-router-dom'
import Footer from './Footer';


function Header(props){
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link  className="navbar-brand" to="/">WonderSite</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">             
                            <li><Link to="/home">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
             <Outlet/>
            </div>
              <hr/>
        </>
    )
}

export default Header