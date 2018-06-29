import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import data from '../winners.json';
import handleBackgroundChange from '../helper/_background';
import '../index.css';
import '../stylesheets/winners.css';


class Winners extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(e) {
    handleBackgroundChange(e,
                            "#WinnerContainer",
                            [
                              [255,195,198],
                              [255,255,255],
                              [254,251,210]
                            ],
                            16
                           );
  }

  createWinnerBox(winner, number) {
    let url = require("../../src/" + winner.bookImageLocation);
    return (<LazyLoad height={'100%'} offset={-100}>
    					<div className="individualWinnerBox">
              	<img src={url} alt={winner.name} />
                <ul>
                  <li className="winnerName">{winner.name}</li>
                  <li className="winnerTitle">{winner.title}</li>
                </ul>
              </div>
            </LazyLoad>);
  }

  createWinnerList(winners) {
    let winnerList = [];
    // let currentBox;
    let lastYear = 0;
    let lastWinner;
    // let winnersGrouped = {};
    // let left = true;

    winners.map((winner, index) => {
      if (winner.year === lastYear && winner.year <= 2007) {
        if (winner.year % 2 === 0) {
          winnerList.push(<div key={index} className="winnerSection leftWinnerSection">
                            <span className="winnerYear">{winner.year}</span>
                            <div className="groupWinnerBox">
                              {this.createWinnerBox(lastWinner, index)}
                              {this.createWinnerBox(winner, index)}
                            </div>
                          </div>);
        } else {
          winnerList.push(<div key={index} className="winnerSection rightWinnerSection">
                            <div className="groupWinnerBox">
                              {this.createWinnerBox(lastWinner, index)}
                              {this.createWinnerBox(winner, index)}
                            </div>
                            <span className="winnerYear">{winner.year}</span>
                          </div>);
        }
      } else if (winner.year !== lastYear && winner.year <= 2007) {
        lastWinner = winner;
        lastYear = winner.year;
      } else if (winner.year > 2007) {
        if (winner.year % 2 === 0) {
          winnerList.push(<div key={index} className="winnerSection leftWinnerSection">
                            <span className="winnerYear">{winner.year}</span>
                            <div className="groupWinnerBox">
                              {this.createWinnerBox(winner, index)}
                            </div>
                          </div>);
        } else {
          winnerList.push(<div key={index} className="winnerSection rightWinnerSection">
                            <div className="groupWinnerBox">
                              {this.createWinnerBox(winner, index)}
                            </div>
                            <span className="winnerYear">{winner.year}</span>
                          </div>);
        }
      }
    });

    return winnerList;
  }

  render () {
      return (<div id="WinnerContainer">
                <div className="firstPane">
                <NavLink exact to="/"><span id="banner"><div className="no-break">The Ferro-Grumley</div> <div className="no-break">Literary Award</div></span></NavLink>
                <ul>
                  <li><NavLink to="/winners" activeClassName="active">Winners</NavLink></li>
                  <li><NavLink to="/board" activeClassName="active">Board</NavLink></li>
                  <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
                <span id="marqueeText1">Past</span>
                <span id="marqueeText2">Winners</span>
                <div id="longRedRectangle"></div>
                <div id="longWhiteRectangle"></div>
                <div id="thinBlueLine"></div>
                <div id="mediumAquaCircle"></div>
                <div id="yellowTriangle"></div>
                </div>
                <div id="winnerPane">
                  {this.createWinnerList(data.winners)}
                  <div className="sideDecor leftSideDecor" id="_1989">
                    <div className="babyBar spinning"></div>
                    <div className="mediumTriangle tweaking"></div>
                  </div>
                  <div className="sideDecor" id="_1990">
                    <div className="babyTriangle bobbing"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_1991">
                    <div className="blackBarBox spinning">
                     <div className="subBlackBar subBlackBar1"></div>
                     <div className="subBlackBar subBlackBar2"></div>
                     <div className="subBlackBar subBlackBar3"></div>
                     <div className="subBlackBar subBlackBar4"></div>
                     <div className="subBlackBar subBlackBar5"></div>
                    </div>
                  </div>
                  <div className="sideDecor" id="_1992">
                    <div className="mediumCircle tweaking"></div>
                    <div className="babyTriangle sashaying"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_1993">
                  <div className="babyBar rotating"></div>
                  <div className="bigSquare"></div>
                  </div>
                  <div className="sideDecor" id="_1994">
                    <div className="mediumHalfCircle tweaking"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_1995">
                   <div className="thinBar spinning" id=""></div>
                   <div className="mediumCircle" id=""></div>
                  </div>
                  <div className="sideDecor" id="_1996">
                    <div className="babyBar tweaking"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_1997">
                    <div className="babyCircle bobbing"></div>
                  </div>
                  <div className="sideDecor" id="_1998">
                    <div className="thinBar spinning" id=""></div>
                    <div className="mediumTriangle tweaking" id=""></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_1999">
                    <div className="babyBar"></div>
                    <div className="bigCircle"></div>
                  </div>
                  <div className="sideDecor" id="_2000">
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2001">
                    <div className="mediumCircle tweaking" id=""></div>
                  </div>
                  <div className="sideDecor" id="_2002">
                    <div className="blackBarBox spinning">
                     <div className="subBlackBar subBlackBar1"></div>
                     <div className="subBlackBar subBlackBar2"></div>
                     <div className="subBlackBar subBlackBar3"></div>
                     <div className="subBlackBar subBlackBar4"></div>
                     <div className="subBlackBar subBlackBar5"></div>
                    </div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2003">
                    <div className="bigHalfCircle spinning"></div>
                   </div>
                  <div className="sideDecor" id="_2004">
                   <div className="babyTriangle bobbing"></div>
                   </div>
                  <div className="sideDecor leftSideDecor" id="_2005">
                   <div className="babyBar"></div>
                   <div className="babySquare"></div>
                  </div>
                  <div className="sideDecor" id="_2006">
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2007">
                   <div className="babyBar spinning" id=""></div>
                   <div className="mediumHalfCircle bobbing"></div>
                  </div>
                  <div className="sideDecor" id="_2008">
                   <div className="bigTriangle sashaying"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2009">
                    <div className="thinBar bobbing"></div>
                    <div className="bigHalfCircle spinning"></div>
                  </div>
                  <div className="sideDecor" id="_2010">
                    <div className="mediumSquare tweaking"></div>
                    <div className="babyCircle sashaying"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2011">
                    <div className="babyTriangle tweaking"></div>
                    <div className="mediumCircle bobbing"></div>
                  </div>
                  <div className="sideDecor" id="_2012">
                    <div className="bigSquare sashaying"></div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2013">
                   <div className="babyBar bobbing"></div>
                   <div className="mediumHalfCircle tweaking"></div>
                 </div>
                  <div className="sideDecor" id="_2014">
                    <div className="blackBarBox spinning">
                     <div className="subBlackBar subBlackBar1"></div>
                     <div className="subBlackBar subBlackBar2"></div>
                     <div className="subBlackBar subBlackBar3"></div>
                     <div className="subBlackBar subBlackBar4"></div>
                     <div className="subBlackBar subBlackBar5"></div>
                    </div>
                  </div>
                  <div className="sideDecor leftSideDecor" id="_2015">
                    <div className="bigCircle tweaking"></div>
                  </div>
                  <div className="sideDecor" id="_2016">
                    <div className="thinBar spinning"></div>
                    <div className="babyHalfCircle bobbing"></div>
                  </div>
                </div>
                <div className="finalPane">
                  <div id="bigYellowCircle"></div>
                  <div id="littleRedCircle"></div>
                  <div id="littleBlueBar"></div>
                  <div id="longRedBar"></div>
                  <div id="littleGreenTriangle"></div>
                  <ul className="bottomNav">
                    <li><NavLink exact to="/" activeClassName="active">Intro</NavLink></li>
                    <li><NavLink to="/winners" activeClassName="active">Past Winners</NavLink></li>
                    <li><NavLink to="/board" activeClassName="active">Advisory Board</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                  </ul>
                </div>
              </div>)
    }
}

export default Winners;
