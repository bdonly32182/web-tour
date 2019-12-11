import React, { Component } from 'react'
import FooterHome from './contenthome/FooterHome'

export default class About extends Component {
    render() {
        return (
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
          <a className="navbar-brand" href="/" title="HOME"><i className="ion-paper-airplane" /> euro <span>travel</span></a>
        </div> {/* /.navbar-header */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/">Home</a></li>
            <li className="active"><a href="/about">about</a></li>
            <li><a href="/join">Join with US</a></li>
            <li><a href="/contact">contact</a></li>
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
        our story
      </h2>
      <ol className="breadcrumb">
        <li><a href="/">Home</a></li>
        <li className="active">&nbsp;about</li>
      </ol>
    </div> {/* /.container */}
  </section> {/* /.section-background */}
  {/* Who we are */}
  <section className="wwa section-wrapper">
    <div className="container">
      <h2 className="section-title">
        Who we are?
      </h2>
      <p className="section-subtitle">
        Lorem Ipsum is simply dummy text of the industry.
      </p>
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <div className="who">
            <img src="assets/images/ab-1.png" alt className="img-responsive who-img" />
            <h3>
              We Advance
            </h3>
            <p className="who-detail">
              Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus malesuada ex.
            </p>
          </div>
        </div> {/* /.col-sm-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="who">
            <img src="assets/images/ab-2.png" alt className="img-responsive who-img" />
            <h3>
              Helpul Guide
            </h3>
            <p className="who-detail">
              Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus malesuada ex.
            </p>
          </div>
        </div> {/* /.col-sm-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="who">
            <img src="assets/images/ab-3.png" alt className="img-responsive who-img" />
            <h3>
              Travel anywhere
            </h3>
            <p className="who-detail">
              Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus malesuada ex.
            </p>
          </div>
        </div> {/* /.col-sm-3 */}
        <div className="col-sm-3 col-xs-6">
          <div className="who">
            <img src="assets/images/ab-4.png" alt className="img-responsive who-img" />
            <h3>
              our best transport
            </h3>
            <p className="who-detail">
              Praesent dapibus eleifend aug eget sollicitudin velit malesuada Aliquam blandit diam feugiat tellus malesuada ex.
            </p>
          </div>
        </div> {/* /.col-sm-3 */}
      </div> {/* /.row */}
    </div> {/* /.container */}
  </section> {/* /.wwa */}
  {/* Story and Client */}
  <section className="story-and-client section-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="story">
            <h2 className="section-title">
              Our Story
            </h2>
            <img src="assets/images/client.png" alt="story" className="story-img" />
            <p className="story-detail">
              Ut cursus massa at urnaaculis estie. Sed aliquamellus vitae ultr condmentum leo massa mollis estiegittis miristum nulla auris quam tristique, dignissim. Morbi tempus mauris eget leo ullamcorper, et tempus risus dignissim. Proin ullamcorper eleifend est quis eleifend.
            </p>
            <p className="story-detail">
              molestie felis Fusce tristique, elit nec vehicula imperdiet, eros est egestas odio aliquet elit nulla sed massa. Morbi tempus mauris eget leo ullamcorper, et tempus risus dignissim. Proin ullamcorper eleifend est quis eleifend. Ut cursus massa at urnaaculis estie eget leo ullamcorper tempus risus dignissim.
            </p>
          </div> {/* /.story */}
        </div> {/* /.col-sm-6 */}
        <div className="col-sm-6">
          <div className="story">
            <h2 className="section-title">
              Client feedback
            </h2>
            <table className="table _table-bordered">
              <tbody>
                <tr>
                  <td>
                    5 Stars
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                        <span className="sr-only">70% Complete</span>
                      </div> {/* /.progress-bar */}
                    </div> {/* /.progress */}
                  </td>
                  <td>
                    50%
                  </td>
                </tr>
                <tr>
                  <td>
                    4 Stars
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                        <span className="sr-only">90% Complete</span>
                      </div> {/* /.progress-bar */}
                    </div> {/* /.progress */}
                  </td>
                  <td>
                    90%
                  </td>
                </tr>
                <tr>
                  <td>
                    3 Stars
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                        <span className="sr-only">75% Complete</span>
                      </div> {/* /.progress-bar */}
                    </div> {/* /.progress */}
                  </td>
                  <td>
                    75%
                  </td>
                </tr>
                <tr>
                  <td>
                    2 Stars
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '33%'}}>
                        <span className="sr-only">33% Complete</span>
                      </div> {/* /.progress-bar */}
                    </div> {/* /.progress */}
                  </td>
                  <td>
                    33%
                  </td>
                </tr>
                <tr>
                  <td>
                    1 Stars
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '82%'}}>
                        <span className="sr-only">82% Complete</span>
                      </div> {/* /.progress-bar */}
                    </div> {/* /.progress */}
                  </td>
                  <td>
                    82%
                  </td>
                </tr>
              </tbody>
            </table> {/* /.table */}
          </div> {/* /.story */}
        </div> {/* /.col-sm-6 */}
      </div> {/* /.row */}
    </div> {/* /.container */}
  </section> {/* /.story-and-client */}
  <div className="container">	
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="http://www.youtube.com/embed/qUHLCobRgaE" frameBorder={0} allowFullScreen>
      </iframe>
    </div>
  </div> {/* /.container */}
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
