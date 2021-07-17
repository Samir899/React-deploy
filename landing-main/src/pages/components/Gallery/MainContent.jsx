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
            {/* Gallery */}
            <div className="gallery row">
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img4.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Photoshoot for 2017</h4>
                      <div className="gallery__date">December 17th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img
                      src="soccer-dark/assets/images/soccer/samples/_soccer_post-img1.jpg"
                      alt
                    />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">
                        California Playoffs 2016
                      </h4>
                      <div className="gallery__date">January 24th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img
                      src="soccer-dark/assets/images/soccer/samples/_soccer_post-img1.jpg"
                      alt
                    />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Player Portraits 2016</h4>
                      <div className="gallery__date">January 14th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img3.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">The Alchemists Stadium</h4>
                      <div className="gallery__date">December 17th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img1.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Player Photoshoot</h4>
                      <div className="gallery__date">January 24th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img17.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">The National Team</h4>
                      <div className="gallery__date">January 14th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img5.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Charity Activities</h4>
                      <div className="gallery__date">December 17th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img2.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Cheerleader Squad</h4>
                      <div className="gallery__date">January 24th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="gallery__item col-6 col-sm-4">
                <a
                  href="_soccer_team-gallery-album.html"
                  className="gallery__item-inner card"
                >
                  <figure className="gallery__thumb">
                    <img src="soccer-dark/assets/images/samples/post-img13.jpg" alt />{" "}
                    <span className="btn-fab gallery__btn-fab" />
                  </figure>
                  <div className="gallery__content card__content">
                    <span className="gallery__icon">
                      <span className="icon-camera" />
                    </span>
                    <div className="gallery__details">
                      <h4 className="gallery__name">Meal Plan 2015</h4>
                      <div className="gallery__date">January 14th, 2016</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Gallery / End */}
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
