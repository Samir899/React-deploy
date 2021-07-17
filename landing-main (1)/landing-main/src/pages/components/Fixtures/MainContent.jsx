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
        <div className="site-content">
          <div className="container">
            {/* Schedule & Tickets */}
            <div className="card card--has-table">
              <div className="card__header">
                <h4>Schedule and Tickets</h4>
              </div>
              <div className="card__content">
                <div className="table-responsive">
                  <table className="table table-hover team-schedule team-schedule--full">
                    <thead>
                      <tr>
                        <th className="team-schedule__date">Date</th>
                        <th className="team-schedule__versus">Versus</th>
                        <th className="team-schedule__status">Status</th>
                        <th className="team-schedule__time">Time</th>
                        <th className="team-schedule__compet">Competition</th>
                        <th className="team-schedule__venue">Venue</th>
                        <th className="team-schedule__tickets">Tickets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="team-schedule__date">
                          Saturday, Mar 24
                        </td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/lucky_clovers_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Lucky Clovers</h6>
                              <span className="team-meta__place">
                                St. Patrick’s Institute
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Away</td>
                        <td className="team-schedule__time">9:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Madison Cube Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">Friday, May 31</td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/red_wings_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Red Wings</h6>
                              <span className="team-meta__place">
                                Icarus College
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Home</td>
                        <td className="team-schedule__time">9:30PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Alchemists Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block disabled"
                          >
                            Sold Out
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">Saturday, May 8</td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/draconians_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Draconians</h6>
                              <span className="team-meta__place">
                                Wyvern College
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Away</td>
                        <td className="team-schedule__time">10:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Scalding Rock Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">Friday, May 14</td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/aqua_keyes_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Aqua Keyes</h6>
                              <span className="team-meta__place">
                                Pacific Institute
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Home</td>
                        <td className="team-schedule__time">10:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Alchemists Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">
                          Saturday, May 22
                        </td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/icarus_wings_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Icarus Wings</h6>
                              <span className="team-meta__place">
                                Waxer College
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Away</td>
                        <td className="team-schedule__time">10:30PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          The FireStar Arena
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block disabled"
                          >
                            Sold Out
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">
                          Saturday, May 29
                        </td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/bloody_wave_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Bloody Wave</h6>
                              <span className="team-meta__place">
                                Atlantic School
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Home</td>
                        <td className="team-schedule__time">9:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Alchemists Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">Friday, Jun 5</td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/sharks_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Sharks</h6>
                              <span className="team-meta__place">
                                Marine College
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Away</td>
                        <td className="team-schedule__time">9:30PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Great Hammerhead Arena
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block disabled"
                          >
                            Sold Out
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">
                          Saturday, Jun 13
                        </td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/pirates_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">L.A. Pirates</h6>
                              <span className="team-meta__place">
                                Bebop Institute
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Home</td>
                        <td className="team-schedule__time">10:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Alchemists Stadium
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="team-schedule__date">Thursday, Jun 8</td>
                        <td className="team-schedule__versus">
                          <div className="team-meta">
                            <figure className="team-meta__logo">
                              <img
                                src="assets/images/samples/logos/ocean_kings_shield.png"
                                alt
                              />
                            </figure>
                            <div className="team-meta__info">
                              <h6 className="team-meta__name">Ocean Kings</h6>
                              <span className="team-meta__place">
                                Bay College
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="team-schedule__status">Away</td>
                        <td className="team-schedule__time">10:00PM EST</td>
                        <td className="team-schedule__compet">
                          West Bay Playoffs 2018
                        </td>
                        <td className="team-schedule__venue">
                          Coral Reef LA Institute
                        </td>
                        <td className="team-schedule__tickets">
                          <a
                            href="#"
                            className="btn btn-xs btn-default btn-outline btn-block"
                          >
                            Buy Game Tickets
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Schedule & Tickets / End */}
            {/* Team Pagination */}
            <nav className="team-pagination" aria-label="Team navigation">
              <ul className="pagination pagination--condensed pagination--lg justify-content-center">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    16
                  </a>
                </li>
              </ul>
            </nav>
            {/* Team Pagination / End */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
