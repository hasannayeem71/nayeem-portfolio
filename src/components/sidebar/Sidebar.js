import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src='https://cdn6.f-cdn.com/contestentries/1482384/31969832/5c93ba7aa4725_thumb900.jpg' alt='logo' />
                <h1><Link smooth to="/#start" className="h1_links">Mahmudul Hasan Nayeem</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> hasannayeem71@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/mahmudulnayeem71/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/hasannayeem71" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/mahmudulhasannayeem/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:hasannayeem71@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/hasannayeem5010" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar