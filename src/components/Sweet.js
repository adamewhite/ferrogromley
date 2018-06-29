import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import handleBackgroundChange from '../helper/_background';
import '../index.css';
import '../stylesheets/sweet.css';


class Sweet extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(e) {
    handleBackgroundChange(e,
                            "#AppContainer",
                            [
                              [248,248,248],
                              [255,255,255],
                              [37,29,52]
                            ],
                            5
                           );
  }

  render () {
    return (<div id="AppContainer">

              <div id="firstPane">
                <NavLink exact to="/"><span id="banner"><div className="no-break">The Ferro-Grumley</div> <div className="no-break">Literary Award</div></span></NavLink>
                <ul>
                  <li><NavLink to="/winners" activeClassName="active">Winners</NavLink></li>
                  <li><NavLink to="/board" activeClassName="active">Board</NavLink></li>
                  <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
                <div id="thinBlackBar"></div>
                <div id="blueCircle"></div>
                <div id="yellowBar"></div>
                <div id="smallRedHalfCircle"></div>
                <div id="aquaHalfCircle"></div>
                <div className="blackBarBox" id="blackBarBox1">
                  <div className="subBlackBar subBlackBar1"></div>
                  <div className="subBlackBar subBlackBar2"></div>
                  <div className="subBlackBar subBlackBar3"></div>
                  <div className="subBlackBar subBlackBar4"></div>
                  <div className="subBlackBar subBlackBar5"></div>
                </div>
                <span id="splashHeadline">An annual prize for the
                year’s best LGBTQ-themed novel or collection of short stories</span>
              </div>

              <div id="secondPane">
                <div id="paleBlueHalfCircle"></div>
                <div id="largeRedHalfCircle"></div>
                <div id="largeBlackBar"></div>
                <div id="smallYellowSquare"></div>
                <span className="splashDescription" id="splashDescription1">The Ferro-Grumley Award was created in 1988, in the memory of authors
                 Robert Ferro and Michael Grumley, who were life partners and
                 died that year of AIDS, within weeks of each other. </span>
                <span className="splashDescription" id="splashDescription2">Each year, the award is given
                  at a public ceremony at the New School in New York,
                  co-produced with the Publishing Triangle.</span>
              </div>

              <div id="thirdPane">
                <div className="splashDescription" id="splashDescription3">
                  <p>The Ferro-Grumley Award is decided each year by a different panel of judges, selected from
                  writers, publishers, editors, booksellers, and other book industry workers across the United States,
                  with an emphasis on geographic and cultural diversity and gender parity.</p>
                </div>
                <div id="largePaleBlueCircle"></div>
                <div id="largeYellowSquare"></div>
                <div id="smallRedCircle"></div>
                <div id="largeAquaRectangle"></div>
                <div id="blueTriangle"></div>
                <div className="blackBarBox" id="blackBarBox2">
                  <div className="subBlackBar subBlackBar1"></div>
                  <div className="subBlackBar subBlackBar2"></div>
                  <div className="subBlackBar subBlackBar3"></div>
                  <div className="subBlackBar subBlackBar4"></div>
                  <div className="subBlackBar subBlackBar5"></div>
                </div>
              </div>

              <div id="fourthPane">
                <div className="splashDescription" id="splashDescription4">
                  <p>The criteria for the award are threefold.</p>

                  <ul>
                    <li>The strength, full development and accomplishment of the writing</li>
                    <li>The development of LGBTQ themes, whether in content, imagination, and/or spirit</li>
                    <li>The importance to LGBTQ culture, reflecting some of the most broadly
                      resonant LGBTQ thinking during the current year</li>
                  </ul>
                </div>
                <div id="largeOrangeSquare"></div>
                <div id="mediumRedCircle"></div>
                <div id="smallYellowTriangle"></div>
                <div id="mediumGreenRectangle"></div>
                <div id="mediumBlueBar"></div>
              </div>

              <div id="fifthPane">
                <div id="bigYellowCircle"></div>
                <div id="littleRedCircle"></div>
                <div id="littleBlueBar"></div>
                <div id="longRedBar"></div>
                <div id="littleGreenTriangle"></div>
                <ul className="bottomNav" id="sweetBottomNav">
                  <li><NavLink exact to="/">Intro</NavLink></li>
                  <li><NavLink to="/winners">Past Winners</NavLink></li>
                  <li><NavLink to="/board">Advisory Board</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>);
  }
}

export default Sweet;
