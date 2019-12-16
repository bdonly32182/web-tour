import React, { Component } from 'react'

import FooterHome from './contenthome/FooterHome'

export default class Home extends Component {
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
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/join">Join with US</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Sign In</a></li>
        </ul> {/* /.nav */}
      </div>{/* /.navbar-collapse */}
    </div>{/* /.container */}
  </nav>
  {/* Home */}
  <div id="header">
    <div className="flexslider">
      <ul className="slides">
        <li className="slider-item" style={{backgroundImage: 'url("assets/images/item-1.png")'}}>
          <div className="intro container">
            <div className="inner-intro">
              <h1 className="header-title">
                <span>traveling</span> always "good idea"
              </h1>
              <p className="header-sub-title">
                it leaves you speecless, then turns your into a storyteller.
              </p>
              <button className="btn custom-btn">
                book now
              </button>
            </div>
          </div>
        </li> {/* /.slider-item */}
        <li className="slider-item" style={{backgroundImage: 'url("assets/images/item-2.png")'}}>
          <div className="intro">
            <div className="inner-intro">
              <h1 className="header-title">
                to <span>travel</span> is to <span>live</span>
              </h1>
              <p className="header-sub-title">
                it leaves you speecless, then turns your into a storyteller.
              </p>
              <button className="btn custom-btn">
                book now
              </button>
            </div>
          </div>
        </li> {/* /.slider-item */}
      </ul> {/* /.slides */}
    </div> {/* /.flexslider */}
  </div> {/* /#header */}
  {/* Find a Tour */}
  <section className="tour section-wrapper container">
    <h2 className="section-title">
      Find a Tour
    </h2>
    <p className="section-subtitle">
      Where would you like to go?
    </p>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <form role="form" className="form-dropdown">
          <div className="form-group">
            <label htmlFor="sel1">Select list (select one):</label>
            <select className="form-control border-radius" id="sel1">
              <option>America</option>
              <option>Bangladesh</option>
              <option>Canada</option>
              <option>India</option>
            </select>
          </div>
        </form>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="input-group">
          <input type="text" className="form-control border-radius border-right" placeholder="Arrival" />
          <span className="input-group-addon border-radius custom-addon">
            <i className="ion-ios-calendar" />
          </span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="input-group">
          <input type="text" className="form-control border-radius border-right" placeholder="Departure" />
          <span className="input-group-addon border-radius custom-addon">
            <i className="ion-ios-calendar" />
          </span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="btn btn-default border-radius custom-button">
          Search
        </div>
      </div>
    </div>
  </section> {/* /.tour */}
  {/* Our Blazzing offers */}
  <section className="offer section-wrapper">
    <div className="container">
      <h2 className="section-title">
        Our Blazzing offers
      </h2>
      <p className="section-subtitle">
        Lorem Ipsum is simply dummy text of the industry.
      </p>
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <div className="offer-item">
            <div className="icon">
              <i className="ion-social-euro" />
            </div>
            <h3>
              Affordable Pricing
            </h3>
            <p>
              Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
            </p>
          </div>
        </div> {/* /.col-md-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="offer-item">
            <div className="icon">
              <i className="ion-ios-home" />
            </div>
            <h3>
              High class Hotels
            </h3>
            <p>
              Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
            </p>
          </div>
        </div> {/* /.col-md-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="offer-item">
            <div className="icon">
              <i className="ion-android-bus" />
            </div>
            <h3>
              Luxury Transport
            </h3>
            <p>
              Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
            </p>
          </div>
        </div> {/* /.col-md-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="offer-item">
            <div className="icon">
              <i className="ion-ios-locked" />
            </div>
            <h3>
              Highest Security
            </h3>
            <p>
              Class aptent taciti sociosutn tora torquent conub nost reptos himenaeos.
            </p>
          </div>
        </div> {/* /.col-md-3 */}
      </div> {/* /.row */}
    </div> {/* /.container */}
  </section> {/* /.offer */}
  {/* Top place to visit */}
  <section className="visit section-wrapper">
    <div className="container">
      <h2 className="section-title">
        Top place to visit
      </h2>
      <p className="section-subtitle">
        Lorem Ipsum is simply dummy text of the industry.
      </p>
      <div className="owl-carousel visit-carousel" id>
        <div className="item">
          <img src="assets/images/visit-1.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
        <div className="item">
          <img src="assets/images/visit-2.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
        <div className="item">
          <img src="assets/images/visit-3.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
        <div className="item">
          <img src="assets/images/visit-1.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
        <div className="item">
          <img src="assets/images/visit-2.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
        <div className="item">
          <img src="assets/images/visit-3.png" alt="visit-image" className="img-responsive visit-item" />
        </div>
      </div>
    </div> {/* /.container */}
  </section> {/* /.visit */}
  <div className="offer-cta">
    <div className="container">
      <div className="offering">
        <div className="percent">
          <span>15%</span> off
        </div>
        <div className="FTour">
          for <strong>Family Tour</strong>
        </div>
        <a className="btn btn-default price-btn" href="#">
          see our price
        </a>
      </div> {/* /.offering */}
    </div> {/* /.container */}
  </div> {/* /.offer-cta */}
  <section className="additional-services section-wrapper">
    <div className="container">
      <h2 className="section-title">
        Additional services
      </h2>
      <p className="section-subtitle">
        Lorem Ipsum is simply dummy text of the industry.
      </p>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-1.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Photography
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-2.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Cycling
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-3.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Waking
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-4.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Skiing
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-5.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Sea beach
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
        <div className="col-md-4 col-sm-6">
          <div className="custom-table">
            <img src="assets/images/add-srvc-6.png" alt className="add-srvc-img" />
            <div className="add-srvc-detail">
              <h4 className="add-srvc-heading">
                Hill tracking
              </h4>
              <p className="add-srvc">
                Etiam pharetra ut ante eget ehy efficitur. Nullam quis felis at nunc vehicula sollicitudin euliquam quis felis atblan dit.
              </p>
            </div> {/* /.add-srvc-detail */}
          </div> {/* /.custom-table */}
        </div> {/* /.col-md-4 col-sm-6 */}
      </div> {/* /.row */}
    </div> {/* /.container */}
  </section> {/* /.Additional-services */}
  <div className="section-wrapper sponsor">
    <div className="container">
      <div className="owl-carousel sponsor-carousel">
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-1.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-2.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-3.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-4.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-5.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-6.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-1.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-2.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-3.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-4.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-5.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-6.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-1.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-2.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-3.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-4.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-5.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="assets/images/sp-6.png" alt="sponsor-brand" className="img-responsive sponsor-item" />
          </a>
        </div>
      </div> {/* /.owl-carousel */}
    </div> {/* /.container */}
  </div> {/* /.sponsor */}
  <FooterHome />
</div>

        )
    }
}
