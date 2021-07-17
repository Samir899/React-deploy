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
                  Team <span className="highlight">Sponsors</span>
                </h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="_soccer_index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sponsors
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="container">
            <div className="sponsors-grid row">
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="#">
                        <img
                          src="soccer-dark/assets/images/the mixspace logo.png"
                          alt="Sponsor Name #1"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      <h4>MixSpace Internet Services</h4>
                      MixSpace is an internet company with a focus on IT
                      services, enterprise systems and cloud computing.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="https://linkedin.com/company/mixspaceio"
                          className="social-links__link"
                          title="LinkedIn"
                        >
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="https://instagram.com/mixspaceio"
                          className="social-links__link"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="https://facebook.com/mixspaceio"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="https://mixspace.io/"
                      className="sponsor-card__link"
                    >
                      www.mixspace.io
                    </a>
                  </footer>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="http://www.dan-fisher.com">
                        <img
                          src="assets/images/sponsor-sample-gray.png"
                          alt="Sponsor Name #2"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimam, quisrud exercitation ullamco
                      laboris nisi ut aliquip ex ea modo sequat. Duis aute irure
                      dolorem.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="http://www.dan-fisher.com"
                      className="sponsor-card__link"
                    >
                      www.dan-fisher.com
                    </a>
                  </footer>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="http://www.dan-fisher.com">
                        <img
                          src="assets/images/sponsor-sample-gray.png"
                          alt="Sponsor Name #3"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimam, quisrud exercitation ullamco
                      laboris nisi ut aliquip ex ea modo sequat. Duis aute irure
                      dolorem.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitch"
                        >
                          <i className="fab fa-twitch" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="http://www.dan-fisher.com"
                      className="sponsor-card__link"
                    >
                      www.dan-fisher.com
                    </a>
                  </footer>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="http://www.dan-fisher.com">
                        <img
                          src="assets/images/sponsor-sample-gray.png"
                          alt="Sponsor Name #4"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimam, quisrud exercitation ullamco
                      laboris nisi ut aliquip ex ea modo sequat. Duis aute irure
                      dolorem.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitch"
                        >
                          <i className="fab fa-twitch" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="http://www.dan-fisher.com"
                      className="sponsor-card__link"
                    >
                      www.dan-fisher.com
                    </a>
                  </footer>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="http://www.dan-fisher.com">
                        <img
                          src="assets/images/sponsor-sample-gray.png"
                          alt="Sponsor Name #5"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimam, quisrud exercitation ullamco
                      laboris nisi ut aliquip ex ea modo sequat. Duis aute irure
                      dolorem.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="http://www.dan-fisher.com"
                      className="sponsor-card__link"
                    >
                      www.dan-fisher.com
                    </a>
                  </footer>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card sponsor-card">
                  <header className="card__header sponsor-card__header">
                    <figure className="sponsor-card__logo">
                      <a href="http://www.dan-fisher.com">
                        <img
                          src="assets/images/sponsor-sample-gray.png"
                          alt="Sponsor Name #6"
                        />
                      </a>
                    </figure>
                  </header>
                  <div className="card__content sponsor-card__content">
                    <div className="sponsor-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minimam, quisrud exercitation ullamco
                      laboris nisi ut aliquip ex ea modo sequat. Duis aute irure
                      dolorem.
                    </div>
                    <ul className="social-links sponsor-card__social">
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item">
                        <a
                          href="#"
                          className="social-links__link"
                          title="Twitch"
                        >
                          <i className="fab fa-twitch" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <footer className="card__footer sponsor-card__footer">
                    <a
                      href="http://www.dan-fisher.com"
                      className="sponsor-card__link"
                    >
                      www.dan-fisher.com
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
