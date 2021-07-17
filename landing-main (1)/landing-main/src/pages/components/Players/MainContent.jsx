import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h1 className="page-heading__title">
                  Team <span className="highlight">Gallery</span>
                </h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="_soccer_index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="_soccer_team-overview.html">Team</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Gallery
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="container">
            <div className="col-lg-4"></div>
            {/* Team Roster: Table */}
            <div className="card card--has-table">
              <div className="card__header">
                <h4>Complete Roster</h4>
              </div>
              <div className="card__content">
                <div className="table-responsive">
                  <table className="table table--lg team-roster-table">
                    <thead>
                      <tr>
                        <th className="team-roster-table__number">NBR</th>
                        <th className="team-roster-table__position">Pos</th>
                        <th className="team-roster-table__name">Player Name</th>
                        <th className="team-roster-table__foot">Foot</th>
                        <th className="team-roster-table__age">Age</th>
                        <th className="team-roster-table__height">Height</th>
                        <th className="team-roster-table__weight">Weight</th>
                        <th className="team-roster-table__goals">Goals</th>
                        <th className="team-roster-table__assists">Assists</th>
                        <th className="team-roster-table__fouls">Fouls</th>
                        <th className="team-roster-table__card-y">Y.CRDS</th>
                        <th className="team-roster-table__card-r">R.CRDS</th>
                        <th className="team-roster-table__college hidden-xs hidden-sm">
                          College
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="team-roster-table__number">01</td>
                        <td className="team-roster-table__position">GK</td>
                        <td className="team-roster-table__name">
                          Nick Rodgers
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">6’6’’</td>
                        <td className="team-roster-table__weight">205 lbs</td>
                        <td className="team-roster-table__goals">2</td>
                        <td className="team-roster-table__assists">0</td>
                        <td className="team-roster-table__fouls">24</td>
                        <td className="team-roster-table__card-y">1</td>
                        <td className="team-roster-table__card-r">0</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          South Beach College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">04</td>
                        <td className="team-roster-table__position">DF</td>
                        <td className="team-roster-table__name">
                          Mark Ironson
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">6’1’’</td>
                        <td className="team-roster-table__weight">189 lbs</td>
                        <td className="team-roster-table__goals">4</td>
                        <td className="team-roster-table__assists">24</td>
                        <td className="team-roster-table__fouls">68</td>
                        <td className="team-roster-table__card-y">4</td>
                        <td className="team-roster-table__card-r">2</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">03</td>
                        <td className="team-roster-table__position">DF</td>
                        <td className="team-roster-table__name">
                          Brian Kingster
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">16</td>
                        <td className="team-roster-table__height">5’2’’</td>
                        <td className="team-roster-table__weight">186 lbs</td>
                        <td className="team-roster-table__goals">6</td>
                        <td className="team-roster-table__assists">26</td>
                        <td className="team-roster-table__fouls">76</td>
                        <td className="team-roster-table__card-y">8</td>
                        <td className="team-roster-table__card-r">1</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">22</td>
                        <td className="team-roster-table__position">DF</td>
                        <td className="team-roster-table__name">
                          James Girobilli
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">6’2’’</td>
                        <td className="team-roster-table__weight">198 lbs</td>
                        <td className="team-roster-table__goals">5</td>
                        <td className="team-roster-table__assists">25</td>
                        <td className="team-roster-table__fouls">72</td>
                        <td className="team-roster-table__card-y">6</td>
                        <td className="team-roster-table__card-r">0</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          The Sand Bay Institute
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">05</td>
                        <td className="team-roster-table__position">DF</td>
                        <td className="team-roster-table__name">
                          Thomas Black
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">5’8’’</td>
                        <td className="team-roster-table__weight">194 lbs</td>
                        <td className="team-roster-table__goals">8</td>
                        <td className="team-roster-table__assists">31</td>
                        <td className="team-roster-table__fouls">53</td>
                        <td className="team-roster-table__card-y">5</td>
                        <td className="team-roster-table__card-r">2</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          South Beach College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">08</td>
                        <td className="team-roster-table__position">MF</td>
                        <td className="team-roster-table__name">
                          Christofer Grass
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">5’6’’</td>
                        <td className="team-roster-table__weight">176 lbs</td>
                        <td className="team-roster-table__goals">7</td>
                        <td className="team-roster-table__assists">28</td>
                        <td className="team-roster-table__fouls">70</td>
                        <td className="team-roster-table__card-y">8</td>
                        <td className="team-roster-table__card-r">0</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          The Sand Bay Institute
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">02</td>
                        <td className="team-roster-table__position">MF</td>
                        <td className="team-roster-table__name">
                          Spike Arrowhead
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">5’5’’</td>
                        <td className="team-roster-table__weight">180 lbs</td>
                        <td className="team-roster-table__goals">12</td>
                        <td className="team-roster-table__assists">39</td>
                        <td className="team-roster-table__fouls">56</td>
                        <td className="team-roster-table__card-y">7</td>
                        <td className="team-roster-table__card-r">3</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">26</td>
                        <td className="team-roster-table__position">MF</td>
                        <td className="team-roster-table__name">
                          Griffin Peterson
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">6’6’’</td>
                        <td className="team-roster-table__weight">184 lbs</td>
                        <td className="team-roster-table__goals">34</td>
                        <td className="team-roster-table__assists">36</td>
                        <td className="team-roster-table__fouls">59</td>
                        <td className="team-roster-table__card-y">4</td>
                        <td className="team-roster-table__card-r">0</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          South Beach College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">07</td>
                        <td className="team-roster-table__position">MF</td>
                        <td className="team-roster-table__name">
                          James Messinal
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">5’8’’</td>
                        <td className="team-roster-table__weight">176 lbs</td>
                        <td className="team-roster-table__goals">68</td>
                        <td className="team-roster-table__assists">42</td>
                        <td className="team-roster-table__fouls">64</td>
                        <td className="team-roster-table__card-y">8</td>
                        <td className="team-roster-table__card-r">4</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">09</td>
                        <td className="team-roster-table__position">FD</td>
                        <td className="team-roster-table__name">
                          Franklin Stevens
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">16</td>
                        <td className="team-roster-table__height">5’9’’</td>
                        <td className="team-roster-table__weight">196 lbs</td>
                        <td className="team-roster-table__goals">62</td>
                        <td className="team-roster-table__assists">46</td>
                        <td className="team-roster-table__fouls">69</td>
                        <td className="team-roster-table__card-y">9</td>
                        <td className="team-roster-table__card-r">2</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          The Sand Bay Institute
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">18</td>
                        <td className="team-roster-table__position">FD</td>
                        <td className="team-roster-table__name">
                          David Hawkins
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">6’3’’</td>
                        <td className="team-roster-table__weight">202 lbs</td>
                        <td className="team-roster-table__goals">60</td>
                        <td className="team-roster-table__assists">43</td>
                        <td className="team-roster-table__fouls">77</td>
                        <td className="team-roster-table__card-y">7</td>
                        <td className="team-roster-table__card-r">2</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          South Beach College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">32</td>
                        <td className="team-roster-table__position">GK</td>
                        <td className="team-roster-table__name">
                          Taylor Redner
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">5’6’’</td>
                        <td className="team-roster-table__weight">176 lbs</td>
                        <td className="team-roster-table__goals">1</td>
                        <td className="team-roster-table__assists">0</td>
                        <td className="team-roster-table__fouls">70</td>
                        <td className="team-roster-table__card-y">0</td>
                        <td className="team-roster-table__card-r">0</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          The Sand Bay Institute
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">02</td>
                        <td className="team-roster-table__position">DF</td>
                        <td className="team-roster-table__name">
                          Christian Netteron
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">5’5’’</td>
                        <td className="team-roster-table__weight">180 lbs</td>
                        <td className="team-roster-table__goals">13</td>
                        <td className="team-roster-table__assists">16</td>
                        <td className="team-roster-table__fouls">56</td>
                        <td className="team-roster-table__card-y">6</td>
                        <td className="team-roster-table__card-r">1</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">26</td>
                        <td className="team-roster-table__position">MF</td>
                        <td className="team-roster-table__name">
                          Alex Walterston
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">17</td>
                        <td className="team-roster-table__height">6’6’’</td>
                        <td className="team-roster-table__weight">184 lbs</td>
                        <td className="team-roster-table__goals">24</td>
                        <td className="team-roster-table__assists">24</td>
                        <td className="team-roster-table__fouls">59</td>
                        <td className="team-roster-table__card-y">9</td>
                        <td className="team-roster-table__card-r">3</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          South Beach College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">07</td>
                        <td className="team-roster-table__position">FD</td>
                        <td className="team-roster-table__name">
                          Kirk Hetfield
                        </td>
                        <td className="team-roster-table__foot">Left</td>
                        <td className="team-roster-table__age">18</td>
                        <td className="team-roster-table__height">5’8’’</td>
                        <td className="team-roster-table__weight">176 lbs</td>
                        <td className="team-roster-table__goals">32</td>
                        <td className="team-roster-table__assists">45</td>
                        <td className="team-roster-table__fouls">64</td>
                        <td className="team-roster-table__card-y">4</td>
                        <td className="team-roster-table__card-r">4</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          Green Palm College
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number">09</td>
                        <td className="team-roster-table__position">FD</td>
                        <td className="team-roster-table__name">
                          James Hammet
                        </td>
                        <td className="team-roster-table__foot">Right</td>
                        <td className="team-roster-table__age">16</td>
                        <td className="team-roster-table__height">5’9’’</td>
                        <td className="team-roster-table__weight">196 lbs</td>
                        <td className="team-roster-table__goals">30</td>
                        <td className="team-roster-table__assists">48</td>
                        <td className="team-roster-table__fouls">69</td>
                        <td className="team-roster-table__card-y">5</td>
                        <td className="team-roster-table__card-r">2</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          The Sand Bay Institute
                        </td>
                      </tr>
                      <tr>
                        <td className="team-roster-table__number" colSpan={2}>
                          Team Coach
                        </td>
                        <td className="team-roster-table__name">
                          Robert Frankson
                        </td>
                        <td className="team-roster-table__foot">-</td>
                        <td className="team-roster-table__age">52</td>
                        <td className="team-roster-table__height">-</td>
                        <td className="team-roster-table__weight">-</td>
                        <td className="team-roster-table__goals">-</td>
                        <td className="team-roster-table__assists">-</td>
                        <td className="team-roster-table__fouls">-</td>
                        <td className="team-roster-table__card-y">-</td>
                        <td className="team-roster-table__card-r">-</td>
                        <td className="team-roster-table__college hidden-xs hidden-sm">
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Team Roster: Table / End */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
