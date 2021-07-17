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
                  News <span className="highlight">V2</span>
                </h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="_soccer_index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    News V2
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="post-filter">
          <div className="container">
            <form action="#" className="post-filter__form clearfix">
              <div className="post-filter__select">
                <label className="post-filter__label">Category</label>{" "}
                <div className="cs-select cs-skin-border" tabIndex={0}>
                  <span className="cs-placeholder">All Articles</span>
                  <div className="cs-options">
                    <ul>
                      <li data-option data-value="all">
                        <span>All Articles</span>
                      </li>
                      <li data-option data-value="team">
                        <span>The Team</span>
                      </li>
                      <li data-option data-value="playoffs">
                        <span>Playoffs</span>
                      </li>
                      <li data-option data-value="injuries">
                        <span>Injuries</span>
                      </li>
                    </ul>
                  </div>
                  <select className="cs-select cs-skin-border">
                    <option value disabled="disabled" selected="selected">
                      All Articles
                    </option>
                    <option value="all">All Articles</option>
                    <option value="team">The Team</option>
                    <option value="playoffs">Playoffs</option>
                    <option value="injuries">Injuries</option>
                  </select>
                </div>
              </div>
              <div className="post-filter__select">
                <label className="post-filter__label">Filter By</label>{" "}
                <div className="cs-select cs-skin-border" tabIndex={0}>
                  <span className="cs-placeholder">Article Date</span>
                  <div className="cs-options">
                    <ul>
                      <li data-option data-value="date">
                        <span>Article Date</span>
                      </li>
                      <li data-option data-value="id">
                        <span>Article ID</span>
                      </li>
                      <li data-option data-value="comments">
                        <span>Last Comments</span>
                      </li>
                      <li data-option data-value="random">
                        <span>Random</span>
                      </li>
                    </ul>
                  </div>
                  <select className="cs-select cs-skin-border">
                    <option value disabled="disabled" selected="selected">
                      Article Date
                    </option>
                    <option value="date">Article Date</option>
                    <option value="id">Article ID</option>
                    <option value="comments">Last Comments</option>
                    <option value="random">Random</option>
                  </select>
                </div>
              </div>
              <div className="post-filter__select">
                <label className="post-filter__label">Order</label>{" "}
                <div className="cs-select cs-skin-border" tabIndex={0}>
                  <span className="cs-placeholder">Ascending</span>
                  <div className="cs-options">
                    <ul>
                      <li data-option data-value="ascending">
                        <span>Ascending</span>
                      </li>
                      <li data-option data-value="descending">
                        <span>Descending</span>
                      </li>
                    </ul>
                  </div>
                  <select className="cs-select cs-skin-border">
                    <option value disabled="disabled" selected="selected">
                      Ascending
                    </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </div>
              <div className="post-filter__select">
                <label className="post-filter__label">Author</label>{" "}
                <div className="cs-select cs-skin-border" tabIndex={0}>
                  <span className="cs-placeholder">All Authors</span>
                  <div className="cs-options">
                    <ul>
                      <li data-option data-value="all">
                        <span>All Authors</span>
                      </li>
                      <li data-option data-value="author1">
                        <span>James Spiegel</span>
                      </li>
                      <li data-option data-value="author2">
                        <span>Jessica Hoops</span>
                      </li>
                      <li data-option data-value="author3">
                        <span>Mark Johnson</span>
                      </li>
                    </ul>
                  </div>
                  <select className="cs-select cs-skin-border">
                    <option value disabled="disabled" selected="selected">
                      All Authors
                    </option>
                    <option value="all">All Authors</option>
                    <option value="author1">James Spiegel</option>
                    <option value="author2">Jessica Hoops</option>
                    <option value="author3">Mark Johnson</option>
                  </select>
                </div>
              </div>
              <div className="post-filter__submit">
                <button
                  type="submit"
                  className="btn btn-default btn-lg btn-block"
                >
                  Filter News
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="site-content">
          <div className="container">
            <div className="row">
              {/* Content */}
              <div className="content col-lg-8">
                {/* Posts List */}
                <div className="posts posts--cards posts--cards-thumb-left post-list">
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img4-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              The Planetrotters will perform this May 4th at
                              Madison Cube
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img3-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              The new eco friendly stadium won a Leafy Award in
                              2016
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-2.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                Jessica Hoops
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img5-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              The Alchemists team is appearing in L.A. Beach for
                              charity
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-2 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img1-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              Injuries
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              Mark Johnson has a Tibia Fracture and is gonna be
                              out
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img9-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              The team is taking a summer vacation on Woody
                              Valley
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                Jessica Hoops
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img10-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              Jeremy Rittersen was called to be in the National
                              Team
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="post-list__item">
                    <div className="posts__item posts__item--card posts__item--category-1 card card--block">
                      <figure className="posts__thumb">
                        <a href="#">
                          <img
                            src="assets/images/samples/post-img11-m.jpg"
                            alt
                          />
                        </a>
                        <a href="#" className="posts__cta" />
                      </figure>
                      <div className="posts__inner">
                        <div className="card__content">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <h6 className="posts__title">
                            <a href="#">
                              Alchemists New Stadium is gonna be ready in
                              September 2017
                            </a>
                          </h6>
                          <time dateTime="2016-08-23" className="posts__date">
                            August 23rd, 2018
                          </time>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="assets/images/samples/avatar-2.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                Jessica Hoops
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Posts List / End */}
                {/* Post Pagination */}
                <nav className="post-pagination" aria-label="Blog navigation">
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
                {/* Post Pagination / End */}
              </div>
              {/* Content / End */}
              {/* Sidebar */}
              <div id="sidebar" className="sidebar col-lg-4">
                {/* Widget: Popular News */}
                <aside className="widget widget--sidebar card widget-popular-posts">
                  <div className="widget__title card__header mb-3">
                    <h4>Popular News</h4>
                  </div>
                  <div className="container mb-3">
                    <a
                      href="https://facebook.com/kutumbafc/"
                      className="btn-social-counter btn-social-counter--fb"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fab fa-facebook" />
                      </div>
                      <h6 className="btn-social-counter__title">
                        Like Our Facebook Page
                      </h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num" />
                        Live Videos &amp; highlights
                      </span>
                      <span className="btn-social-counter__add-icon" />
                    </a>

                    <a
                      href="https://twitter.com/kutumbafc"
                      className="btn-social-counter btn-social-counter--twitter"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fab fa-twitter" />
                      </div>
                      <h6 className="btn-social-counter__title">
                        Follow Us on Twitter
                      </h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num" />
                        Quick updates &amp; news snippets
                      </span>
                      <span className="btn-social-counter__add-icon" />
                    </a>

                    <a
                      href="https://instagram.com/kutumbafc"
                      className="btn-social-counter btn-social-counter--instagram"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fab fa-instagram" />
                      </div>
                      <h6 className="btn-social-counter__title">
                        Follow Us on Instagram
                      </h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num" />
                        Pictures, reels &amp; more
                      </span>
                      <span className="btn-social-counter__add-icon" />
                    </a>

                    <a
                      href="https://youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA"
                      className="btn-social-counter btn-social-counter--youtube"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fab fa-youtube" />
                      </div>
                      <h6 className="btn-social-counter__title">
                        Subscribe to our YouTube
                      </h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num" />
                        Live streams &amp; highlights
                      </span>
                      <span className="btn-social-counter__add-icon" />
                    </a>

                    <a
                      href="https://youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA"
                      className="btn-social-counter btn-social-counter--medium"
                      target="_blank"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fab fa-medium-m" />
                      </div>
                      <h6 className="btn-social-counter__title">
                        Subscribe to our YouTube
                      </h6>
                      <span className="btn-social-counter__count">
                        <span className="btn-social-counter__count-num" />
                        Live streams &amp; highlights
                      </span>
                      <span className="btn-social-counter__add-icon" />
                    </a>
                  </div>
                </aside>
                {/* Widget: Popular News / End */}
                {/* Widget: Trending News */}
                <aside className="widget widget--sidebar card widget-tabbed">
                  <div className="widget__title card__header">
                    <h4>Top Trending News</h4>
                  </div>
                  <div className="widget__content card__content">
                    <div className="widget-tabbed__tabs">
                      {/* Widget Tabs */}
                      <ul
                        className="nav nav-tabs nav-justified widget-tabbed__nav"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            href="#widget-tabbed-sm-newest"
                            className="nav-link active"
                            aria-controls="widget-tabbed-sm-newest"
                            role="tab"
                            data-toggle="tab"
                          >
                            Newest
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#widget-tabbed-sm-commented"
                            className="nav-link"
                            aria-controls="widget-tabbed-sm-commented"
                            role="tab"
                            data-toggle="tab"
                          >
                            Most Commented
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#widget-tabbed-sm-popular"
                            className="nav-link"
                            aria-controls="widget-tabbed-sm-popular"
                            role="tab"
                            data-toggle="tab"
                          >
                            Popular
                          </a>
                        </li>
                      </ul>
                      {/* Widget Tab panes */}
                      <div className="tab-content widget-tabbed__tab-content">
                        {/* Newest */}
                        <div
                          role="tabpanel"
                          className="tab-pane fade show active"
                          id="widget-tabbed-sm-newest"
                        >
                          <ul className="posts posts--simple-list">
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    Jake Dribbler Announced that he is retiring
                                    next month
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    The Alchemists news coach is bringin a new
                                    shooting guard
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    This Saturday starts the intensive training
                                    for the Final
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* Commented */}
                        <div
                          role="tabpanel"
                          className="tab-pane fade"
                          id="widget-tabbed-sm-commented"
                        >
                          <ul className="posts posts--simple-list">
                            <li className="posts__item posts__item--category-3">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    Playoffs
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    New York Islanders are now flying to
                                    California for the big game
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    The Female Division is growing strong after
                                    their third game
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    The Alchemists news coach is bringin a new
                                    shooting guard
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* Popular */}
                        <div
                          role="tabpanel"
                          className="tab-pane fade"
                          id="widget-tabbed-sm-popular"
                        >
                          <ul className="posts posts--simple-list">
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    The Alchemists news coach is bringin a new
                                    shooting guard
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    This Saturday starts the intensive training
                                    for the Final
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                            <li className="posts__item posts__item--category-1">
                              <div className="posts__inner">
                                <div className="posts__cat">
                                  <span className="label posts__cat-label">
                                    The Team
                                  </span>
                                </div>
                                <h6 className="posts__title">
                                  <a href="#">
                                    Jake Dribbler Announced that he is retiring
                                    next month
                                  </a>
                                </h6>
                                <time
                                  dateTime="2016-08-23"
                                  className="posts__date"
                                >
                                  August 23rd, 2018
                                </time>
                                <div className="posts__excerpt">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisi ng elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                {/* Widget: Trending News / End */}
                {/* Widget: Latest Comments */}
                <aside className="widget widget--sidebar card widget-comments">
                  <div className="widget__title card__header">
                    <h4>Latest Comments</h4>
                  </div>
                  <div className="widget__content card__content">
                    <ul className="comments-list">
                      <li className="comments-list__item">
                        <header className="comments-list__header">
                          <figure className="comments-list__avatar">
                            <img
                              src="assets/images/samples/avatar-11.jpg"
                              alt
                            />
                          </figure>
                          <div className="comments-list__info">
                            <h5 className="comments-list__author-name">
                              Samantha Rodgers
                            </h5>
                            <time
                              className="comments-list__date"
                              dateTime="2016-08-23"
                            >
                              25 mins ago
                            </time>
                          </div>
                          <a href="#" className="comments-list__link">
                            <span className="icon-options" />
                          </a>
                        </header>
                        <div className="comments-list__body">
                          Lorem ipsum dolor sit amet, consectetur adipisi ng
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </div>
                      </li>
                      <li className="comments-list__item">
                        <header className="comments-list__header">
                          <figure className="comments-list__avatar">
                            <img src="assets/images/samples/avatar-2.jpg" alt />
                          </figure>
                          <div className="comments-list__info">
                            <h5 className="comments-list__author-name">
                              Alexandra Dason
                            </h5>
                            <time
                              className="comments-list__date"
                              dateTime="2016-08-23"
                            >
                              48 mins ago
                            </time>
                          </div>
                          <a href="#" className="comments-list__link">
                            <span className="icon-options" />
                          </a>
                        </header>
                        <div className="comments-list__body">
                          Lorem ipsum dolor sit amet, consectetur adipisi ng
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad mini veniam, quis
                          nostrud en derum sum laborem.
                        </div>
                      </li>
                      <li className="comments-list__item">
                        <header className="comments-list__header">
                          <figure className="comments-list__avatar">
                            <img src="assets/images/samples/avatar-9.jpg" alt />
                          </figure>
                          <div className="comments-list__info">
                            <h5 className="comments-list__author-name">
                              Jake Casspon
                            </h5>
                            <time
                              className="comments-list__date"
                              dateTime="2016-08-23"
                            >
                              23 hours ago
                            </time>
                          </div>
                          <a href="#" className="comments-list__link">
                            <span className="icon-options" />
                          </a>
                        </header>
                        <div className="comments-list__body">
                          Lorem ipsum dolor sit amet, consectetur adipisi ng
                          elit, sed do eiusmod tempor incididunt.
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
                {/* Widget: Latest Comments / End */}
                {/* Widget: Twitter */}
                <aside className="widget widget--sidebar card widget-twitter">
                  <div className="widget__title card__header">
                    <h4>Twitter Widget</h4>
                  </div>
                  <div className="widget__content card__content">
                    <ul className="twitter-feed" data-count={2}>
                      <li className="twitter-feed__item">
                        <header className="twitter-feed__header">
                          <figure className="twitter-feed__thumb">
                            <a
                              href="https://twitter.com/odindesign_tw"
                              target="_blank"
                            >
                              <img
                                src="https://pbs.twimg.com/profile_images/883368005878636545/A4XPOCxr_normal.jpg"
                                width={40}
                                height={40}
                                alt="Avatar"
                              />
                            </a>
                          </figure>
                          <div className="twitter-feed__info">
                            <h5 className="twitter-feed__name">Odin Design</h5>
                            <h6 className="twitter-feed__username">
                              <a
                                href="https://twitter.com/odindesign_tw"
                                target="_blank"
                              >
                                @odindesign_tw
                              </a>
                            </h6>
                          </div>
                        </header>
                        <div className="twitter-feed__body">
                          RT{" "}
                          <a
                            href="http://twitter.com/odindesign_tw"
                            style={{ fontWeight: "lighter" }}
                          >
                            @odindesign_tw
                          </a>
                          : As part of our Vikinger latest update, we added 5
                          new dark color presets so you can change them with
                          just one click!! Th…
                        </div>
                        <footer className="twitter-feed__footer">
                          <div className="twitter-feed__timestamp">
                            <a href="https://twitter.com/odindesign_tw/status/1330916963472830464">
                              1 day ago
                            </a>
                          </div>
                          <div className="twitter-feed__actions">
                            <a
                              href="https://twitter.com/intent/tweet?in_reply_to=1330916963472830464"
                              className="twitter-feed__reply"
                            />
                            <a
                              href="https://twitter.com/intent/retweet?tweet_id=1330916963472830464"
                              className="twitter-feed__retweet"
                            />
                            <a
                              href="https://twitter.com/intent/favorite?tweet_id=1330916963472830464"
                              className="twitter-feed__favorite"
                            />
                          </div>
                        </footer>
                      </li>
                      <li className="twitter-feed__item">
                        <header className="twitter-feed__header">
                          <figure className="twitter-feed__thumb">
                            <a
                              href="https://twitter.com/danfisher_dev"
                              target="_blank"
                            >
                              <img
                                src="https://pbs.twimg.com/profile_images/735227553682751493/VdASDQRW_normal.jpg"
                                width={40}
                                height={40}
                                alt="Avatar"
                              />
                            </a>
                          </figure>
                          <div className="twitter-feed__info">
                            <h5 className="twitter-feed__name">Dan Fisher</h5>
                            <h6 className="twitter-feed__username">
                              <a
                                href="https://twitter.com/danfisher_dev"
                                target="_blank"
                              >
                                @danfisher_dev
                              </a>
                            </h6>
                          </div>
                        </header>
                        <div className="twitter-feed__body">
                          7 Ways to Keep Your Sports Team Active During COVID-19{" "}
                          <a href="https://t.co/CiGx8EFzL9">
                            https://t.co/CiGx8EFzL9
                          </a>
                        </div>
                        <footer className="twitter-feed__footer">
                          <div className="twitter-feed__timestamp">
                            <a href="https://twitter.com/danfisher_dev/status/1331194708622774273">
                              1 day ago
                            </a>
                          </div>
                          <div className="twitter-feed__actions">
                            <a
                              href="https://twitter.com/intent/tweet?in_reply_to=1331194708622774273"
                              className="twitter-feed__reply"
                            />
                            <a
                              href="https://twitter.com/intent/retweet?tweet_id=1331194708622774273"
                              className="twitter-feed__retweet"
                            />
                            <a
                              href="https://twitter.com/intent/favorite?tweet_id=1331194708622774273"
                              className="twitter-feed__favorite"
                            />
                          </div>
                        </footer>
                      </li>
                    </ul>
                  </div>
                </aside>
                {/* Widget: Twitter / End */}
              </div>
              {/* Sidebar / End */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
