import React, { Component } from 'react'

export default class FooterHome extends Component {
    render() {
        return (
            <div>
                <div className="subscribe section-wrapper">
    <a className="brand-logo" href="/" title="HOME"><i className="ion-paper-airplane" /> Euro <span>Travel</span></a>
    <p className="subscribe-now">
      Subscribe to our Newsletter
    </p>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
          <div className="input-group">
            <input type="email" className="form-control border-radius" placeholder="Email address" />
            <span className="input-group-btn">
              <button className="btn btn-default border-radius custom-sub-btn" type="button">DONE</button>
            </span>
          </div>{/* /input-group */}
        </div>
      </div>
    </div>
    <ul className="social-icon">
      <li><a href="#"><i className="ion-social-twitter" /></a></li>
      <li><a href="#"><i className="ion-social-facebook" /></a></li>
      <li><a href="#"><i className="ion-social-linkedin-outline" /></a></li>
      <li><a href="#"><i className="ion-social-googleplus" /></a></li>
    </ul>
  </div> {/* /.subscribe */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-4">
          <div className="text-left">
            © Copyright Euro Travels
          </div>
        </div>
        <div className="col-xs-4">
          Theme by <a href="http://www.themewagon.com">THEMEWAGON</a>
        </div>
       
      </div>
    </div>		
  </footer>
            </div>
        )
    }
}
