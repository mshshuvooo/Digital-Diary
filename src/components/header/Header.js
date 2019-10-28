import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'



class Header extends Component {

    render() {

        return (
            <header className="site-header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo">
                                    <h3><Link to="/digital-diary">Digital Diary</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
