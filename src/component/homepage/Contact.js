import React, { Component } from 'react'
import FooterHome from './contenthome/FooterHome'

export default class Contact extends Component {
    render() {
        return (
            <div>
                    <div>
        <section className="header">
            <nav className="navbar navbar-default">
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/join">Join with US</a></li>
                    <li className="active"><a href="/contact">contact</a></li>
                    <li><a href="/login">Sign In</a></li>
                </ul> {/* /.nav */}
                </div>{/* /.navbar-collapse */}
            </div>{/* /.container */}
            </nav>
        </section> {/* /#header */}
        {/* Section Background */}
        <section className="section-background">
            <div className="container">
            <h2 className="page-header">
                get in touch with us
            </h2>
            <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li className="active">&nbsp;contact</li>
            </ol>
            </div> {/* /.container */}
        </section> {/* /.section-background */}
        <section className="section-wrapper contact-and-map">
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
                <h2 className="section-title">
                    Send Message
                </h2>
                <div className="form">
                    <div className="input-group">		
                    <input className="form-control border-radius border-right" type="text" placeholder="Name" required />
                    <span className="input-group-addon  border-radius custom-addon">
                        <i className="ion-person" />
                    </span>
                    </div>
                    <div className="input-group">		
                    <input className="form-control border-radius border-right" name="email" type="email" placeholder="Email address" required />
                    <span className="input-group-addon  border-radius custom-addon">
                        <i className="ion-email" />
                    </span>
                    </div>
                    <div className="input-group">		
                    <input className="form-control border-radius border-right" type="tel" placeholder="Phone number" />
                    <span className="input-group-addon  border-radius custom-addon">
                        <i className="ion-ios-telephone" />
                    </span>
                    </div>
                    <div className="input-group">
                    <textarea className="form-control border-radius border-right" rows={8} placeholder="Write Message" defaultValue={""} />	
                    {/* <input type="text" name="text" rows="8" class="form-control border-radius border-right message" placeholder="Write Message"> */}
                    <span className="input-group-addon border-radius custom-addon">
                        <i className="ion-chatbubbles" />
                    </span>
                    </div>
                    <button type="submit" className="btn btn-default border-radius custom-button">SEND MESSAGE </button>
                </div>
                </div> {/* /.col-sm-6 */}
                <div className="col-sm-6">
                <h2 className="section-title">
                    Find Us Via Google Map
                </h2>
                <div id="googleMap" />
                </div> {/* /.col-sm-6 */}
            </div>
            </div>
        </section>
        <section className="contacts section-wrapper">
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <div className="contact">
                    <div className="contact-icon">
                    <i className="ion-android-map" />
                    </div>
                    <div className="contact-name">
                    Address
                    </div>
                    <div className="contact-detail">
                    Asowld Avenew P.O Box <br />
                    353 Mountain View. United States of America. 
                    </div>
                </div> {/* /.contact */}
                </div> {/* /.col-sm-4 */}
                <div className="col-sm-4">
                <div className="contact">
                    <div className="contact-icon">
                    <i className="ion-ios-telephone" />
                    </div>
                    <div className="contact-name">
                    Phone
                    </div>
                    <div className="contact-detail">
                    Local: 1-800-523-hello <br />
                    Mobile: 1-400-623-hello
                    </div>
                </div> {/* /.contact */}
                </div> {/* /.col-sm-4 */}
                <div className="col-sm-4">
                <div className="contact">
                    <div className="contact-icon">
                    <i className="ion-email" />
                    </div>
                    <div className="contact-name">
                    Email Address
                    </div>
                    <div className="contact-detail">
                    info@themewagon.com <br />
                    <a href="http://www.themewagon.com">www.themewagon.com</a>
                    </div>
                </div> {/* /.contact */}
                </div> {/* /.col-sm-4 */}
            </div> {/* /.row */}
            </div> {/* /.container */}
        </section> {/* /.contacts */}
        <FooterHome />
        </div>


            </div>
        )
    }
}
