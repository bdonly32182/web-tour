import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    {/* Logo */}
                    <a href="index2.html" className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini"><b>A</b>LT</span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg"><b>PROJECT-</b>ToUR</span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                        {/* Sidebar toggle button*/}
                        <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                            
                                {/* User Account: style can be found in dropdown.less */}
                                <li className="dropdown user user-menu">
                                    <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* User image */}
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                                            <p>
                                                Alexander Pierce - Web Developer
                                                 <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        {/* Menu Body */}
                                        <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                    <a href="fake_url">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="fake_url">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="fake_url">Friends</a>
                                                </div>
                                            </div>
                                            {/* /.row */}
                                        </li>
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="fake_url" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="fake_url" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* Control Sidebar Toggle Button */}
                                <li>
                                    <a href="fake_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}
