import React from 'react';
import {Link} from 'react-router-dom'
 

function Header(props){
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    
                    <Link  className="navbar-brand" to="/">WonderSite</Link>
                    </div>
                  
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">             
                            <li>Signed In - {props.email}</li>
                        </ul>
                        <button class="btn btn-danger navbar-btn">{props.email}</button>

                    </div>
                 </div>
            </nav>
              <hr/>
        </>
    )
}

export default Header