import React, { Component } from 'react'

export default class HeaderHome extends Component {
   s
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/" title="HOME"><i className="ion-paper-airplane" /> Best $ Ploy <span>travel</span></a>
                    </div> {/* /.navbar-header */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                        <li ><a href="/">Home</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/join">Join with US</a></li>
                        <li><a href="/contact">contact</a></li>
                        <li className="active"><a href="/login">Sign In</a></li>
                        </ul> {/* /.nav */}
                    </div>{/* /.navbar-collapse */}
                    </div>{/* /.container */}
                </nav>
            </div>
        )
    }
}
