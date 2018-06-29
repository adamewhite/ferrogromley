import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import handleBackgroundChange from '../helper/_background';
import '../stylesheets/board.css';

class Board extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(e) {
    handleBackgroundChange(e,
                            "#boardContainer",
                            [
                              [255,195,198],
                              [255,255,255],
                              [254,251,210]
                            ],
                            3
                           );

  }

  render() {
    return (<div id="boardContainer">

            <div className="firstPane">
              <NavLink exact to="/"><span id="banner"><div className="no-break">The Ferro-Grumley</div> <div className="no-break">Literary Award</div></span></NavLink>
              <ul>
                <li><NavLink to="/winners" activeClassName="active">Winners</NavLink></li>
                <li><NavLink to="/board" activeClassName="active">Board</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              </ul>
              <span id="marqueeText1">Advisory</span>
              <span id="marqueeText2">Board</span>
              <div id="bigBlueHalfCircle"></div>
              <div id="mediumPinkCircle"></div>
              <div id="mediumRedBar"></div>
            </div>

            <div id="boardPane">
              <p>The Ferro-Grumley advisory board includes</p>
              <ul>
                <li>Matthew Bank, Publisher </li>
                <li>Victor Bumbalo, Playwright</li>
                <li>Lili Chopra, Arts Administrator</li>
                <li>Andrew Holleran, Author</li>
                <li>Michael Lowenthal, Author</li>
                <li>Felice Picano, Author</li>
                <li>Ned Rorem, Composer</li>
                <li>Sarah Schulman, Author</li>
                <li>Lizzie Simon, Author and Producer</li>
                <li>Sarah Van Arsdale, Author</li>
                <li>Edmund White, Author</li>
              </ul>
              <p>The Executive Director of The Ferro-Grumley Literary Awards is Stephen Greco.</p>
              <div id="bigTriangle"></div>
              <div id="smallSquare"></div>
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

export default Board;
