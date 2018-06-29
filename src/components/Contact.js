import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import handleBackgroundChange from '../helper/_background';
import '../stylesheets/contact.css';

class Contact extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(e) {
    handleBackgroundChange(e,
                            "#contactContainer",
                            [
                              [181,247,169],
                              [255,255,255],
                              [109,118,244]
                            ],
                            3
                           );
  }

  render() {
    return (<div id="contactContainer">

            <div className="firstPane">
              <NavLink exact to="/"><span id="banner"><div className="no-break">The Ferro-Grumley</div> <div className="no-break">Literary Award</div></span></NavLink>
              <ul>
                <li><NavLink to="/winners" activeClassName="active">Winners</NavLink></li>
                <li><NavLink to="/board" activeClassName="active">Board</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              </ul>
              <span id="marqueeText1">Contact</span>
              <span id="marqueeText2">Information</span>
              <div id="bigYellowSquare"></div>
              <div id="mediumBlueCircle"></div>
              <div id="mediumRedBar"></div>
            </div>

            <div id="contactPane">
              <p>Information about nominating books for the Ferro-Grumley Award is
                available at <a href="http://www.publishingtriangle.org" target="_blank">The Publishing Triangle</a>.</p>

              <p>For information on making a tax-deductible contribution to the Ferro-Grumley Award,
                please contact Stephen Greco at ferrogrumley@earthlink.net.</p>

              <div id="smallHalfCircle"></div>
              <div className="blackBarBox" id="blackBarBox1">
                <div className="subBlackBar subBlackBar1"></div>
                <div className="subBlackBar subBlackBar2"></div>
                <div className="subBlackBar subBlackBar3"></div>
                <div className="subBlackBar subBlackBar4"></div>
                <div className="subBlackBar subBlackBar5"></div>
              </div>
            </div>

              <div className="finalPane">
                <div id="bigYellowCircle"></div>
                <div id="littleRedCircle"></div>
                <div id="littleBlueBar"></div>
                <div id="longRedBar"></div>
                <div id="littleGreenTriangle"></div>
                <ul className="bottomNav">
                  <li><NavLink exact to="/">Intro</NavLink></li>
                  <li><NavLink to="/winners">Past Winners</NavLink></li>
                  <li><NavLink to="/board">Advisory Board</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>

          </div>
        )
  }
}

export default Contact;
