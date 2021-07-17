import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

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

  SwiperCore.use([Pagination]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        {/* Hero Slider */}
        <div className="hero-slider-wrapper">
          <Swiper
            autoplay={{ delay: 3000 }}
            loop="true"
            pagination={{ clickable: true }}
          >
            {/* <div className="hero-slider"> */}
            {/* Slide #0 */}
            <SwiperSlide>
              <div className="hero-slider__item hero-slider__item--img1">
                <div className="container hero-slider__item-container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {/* Post Meta - Top */}
                      <div className="post__meta-block post__meta-block--top">
                        {/* Post Category */}
                        <div className="post__category">
                          <span className="label posts__cat-label">
                            The Team
                          </span>
                        </div>
                        {/* Post Category / End */}
                        {/* Post Title */}
                        <h1 className="page-heading__title">
                          <a href="index.html">
                            Kutumba FC{" "}
                            <span className="highlight">
                              won the last game{" "}
                            </span>
                            2-0 against Clovers
                          </a>
                        </h1>
                        {/* Post Title / End */}
                        {/* Post Meta Info */}
                        <ul className="post__meta meta">
                          <li className="meta__item meta__item--date">
                            <time dateTime="2017-08-23">August 28th, 2018</time>
                          </li>
                          <li className="meta__item meta__item--views">2369</li>
                          <li className="meta__item meta__item--likes">
                            <a href="#">
                              <i className="meta-like meta-like--active icon-heart" />
                              530
                            </a>
                          </li>
                          <li className="meta__item meta__item--comments">
                            <a href="#">18</a>
                          </li>
                        </ul>
                        {/* Post Meta Info / End */}
                        {/* Post Author */}
                        <div className="post-author">
                          <figure className="post-author__avatar">
                            <img
                              src="soccer-dark/assets/images/samples/avatar-1.jpg"
                              alt="Post Author Avatar"
                            />
                          </figure>
                          <div className="post-author__info">
                            <h4 className="post-author__name">James Spiegel</h4>
                            <span className="post-author__slogan">
                              Kutumba Ninja
                            </span>
                          </div>
                        </div>
                        {/* Post Author / End */}
                      </div>
                      {/* Post Meta - Top / End */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide #0 / End */}
            {/* Slide #1 */}
            <SwiperSlide>
              <div className="hero-slider__item hero-slider__item--img2">
                <div className="container hero-slider__item-container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {/* Post Meta - Top */}
                      <div className="post__meta-block post__meta-block--top">
                        {/* Post Category */}
                        <div className="post__category">
                          <span className="label posts__cat-label">
                            Injuries
                          </span>
                        </div>
                        {/* Post Category / End */}
                        {/* Post Title */}
                        <h1 className="page-heading__title">
                          <a href="index.html">
                            Franklin Stevens has{" "}
                            <span className="highlight">a knee fracture</span>{" "}
                            and is gona be out
                          </a>
                        </h1>
                        {/* Post Title / End */}
                        {/* Post Meta Info */}
                        <ul className="post__meta meta">
                          <li className="meta__item meta__item--date">
                            <time dateTime="2017-08-23">August 28th, 2018</time>
                          </li>
                          <li className="meta__item meta__item--views">2369</li>
                          <li className="meta__item meta__item--likes">
                            <a href="#">
                              <i className="meta-like meta-like--active icon-heart" />
                              530
                            </a>
                          </li>
                          <li className="meta__item meta__item--comments">
                            <a href="#">18</a>
                          </li>
                        </ul>
                        {/* Post Meta Info / End */}
                        {/* Post Author */}
                        <div className="post-author">
                          <figure className="post-author__avatar">
                            <img
                              src="soccer-dark/assets/images/samples/avatar-1.jpg"
                              alt="Post Author Avatar"
                            />
                          </figure>
                          <div className="post-author__info">
                            <h4 className="post-author__name">James Spiegel</h4>
                            <span className="post-author__slogan">
                              Kutumba Ninja
                            </span>
                          </div>
                        </div>
                        {/* Post Author / End */}
                      </div>
                      {/* Post Meta - Top / End */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide #1 / End */}
            {/* Slide #2 */}
            <SwiperSlide>
              <div className="hero-slider__item hero-slider__item--img3">
                <div className="container hero-slider__item-container">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {/* Post Meta - Top */}
                      <div className="post__meta-block post__meta-block--top">
                        {/* Post Category */}
                        <div className="post__category">
                          <span className="label posts__cat-label">
                            The Team
                          </span>
                        </div>
                        {/* Post Category / End */}
                        {/* Post Title */}
                        <h1 className="page-heading__title">
                          <a href="index.html">
                            The New{" "}
                            <span className="highlight">
                              Eco Friendly Stadium{" "}
                            </span>
                            won a leafy award
                          </a>
                        </h1>
                        {/* Post Title / End */}
                        {/* Post Meta Info */}
                        <ul className="post__meta meta">
                          <li className="meta__item meta__item--date">
                            <time dateTime="2017-08-23">August 28th, 2018</time>
                          </li>
                          <li className="meta__item meta__item--views">2369</li>
                          <li className="meta__item meta__item--likes">
                            <a href="#">
                              <i className="meta-like meta-like--active icon-heart" />
                              530
                            </a>
                          </li>
                          <li className="meta__item meta__item--comments">
                            <a href="#">18</a>
                          </li>
                        </ul>
                        {/* Post Meta Info / End */}
                        {/* Post Author */}
                        <div className="post-author">
                          <figure className="post-author__avatar">
                            <img
                              src="soccer-dark/assets/images/samples/avatar-1.jpg"
                              alt="Post Author Avatar"
                            />
                          </figure>
                          <div className="post-author__info">
                            <h4 className="post-author__name">James Spiegel</h4>
                            <span className="post-author__slogan">
                              Kutumba Ninja
                            </span>
                          </div>
                        </div>
                        {/* Post Author / End */}
                      </div>
                      {/* Post Meta - Top / End */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide #2 / End */}
          </Swiper>
        </div>
        <div className="spacer py-md-5"></div>
        <div className="container">
          <div className="card-columns">
            {/* Players Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/players"}>
                  <img src="soccer-dark/assets/images/samples/team.jpeg" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/players"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Playing 11, coaches &amp; the rest of the squad
                </time>
                <h6 className="posts__title">
                  <Link to={"/players"}>Check out our lineup</Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <Link to={"/players"}>
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to Player Profiles
                      </h4>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
            {/* Players End */}
            {/* Store Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <a href="https://store.kutumbafc.com">
                  <img src="soccer-dark/assets/images/samples/ecommerce.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="https://store.kutumbafc.com" className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Buy T-shirts, hoodies &amp; badges
                </time>
                <h6 className="posts__title">
                  <a href="https://store.kutumbafc.com">Visit our store</a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <a href="https://store.kutumbafc.com">
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to store
                      </h4>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
            {/* Store End */}
            {/* Account Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <a to="https://accounts.kutumbafc.com/register">
                  <img src="soccer-dark/assets/images/samples/account.png" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a
                  to="https://accounts.kutumbafc.com/register"
                  className="posts__cta"
                />
                <time dateTime="2016-08-23" className="posts__date">
                  Merch subscriptions &amp; exclusive content
                </time>
                <h6 className="posts__title">
                  <a to="https://accounts.kutumbafc.com/register">
                    Create your account today for free
                  </a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <a to="https://accounts.kutumbafc.com/register">
                      <h4 className="post-author__name text-white font-weight-bold">
                        Register now
                      </h4>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
            {/* Account End */}
            {/* YouTube Start */}
            <div className="posts__item posts__item--card posts__item--category-2 card">
              <figure className="posts__thumb">
                <a href="https://www.youtube.com/channel/UCrEK3tcWn52yhJ1w9LaEBFg">
                  <img src="soccer-dark/assets/images/samples/youtube.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a
                  href="https://www.youtube.com/channel/UCrEK3tcWn52yhJ1w9LaEBFg"
                  className="posts__cta"
                />
                <time dateTime="2016-08-23" className="posts__date">
                  Matches, coaching &amp; practice sessions
                </time>
                <h6 className="posts__title">
                  <a href="https://www.youtube.com/channel/UCrEK3tcWn52yhJ1w9LaEBFg">
                    Stream your favourite KuTumba FC moments
                  </a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <a href="https://www.youtube.com/channel/UCrEK3tcWn52yhJ1w9LaEBFg">
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to YouTube
                      </h4>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
            {/* YouTube End */}
            {/* Quote Start */}
            <div className="posts__item posts__item--card posts__item--quote card">
              <div className="card__content">
                <blockquote className="blockquote blockquote--card">
                  <p className="blockquote__content">
                    The most{" "}
                    <span className="blockquote-stress">important</span> thing
                    about soccer is{" "}
                    <span className="blockquote-stress">the passion</span> you
                    feel
                  </p>
                  <footer className="blockquote__footer">
                    <cite className="blockquote__cite">
                      <span className="blockquote__author-name">
                        Johann Ratnaiya
                      </span>{" "}
                      <span className="blockquote__author-info">
                        KuTumba FC Coach
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            {/* Quote End */}
            {/* About Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/about"}>
                  <img src="soccer-dark/assets/images/samples/about-us.png" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/about"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Founding, the vision &amp; Our future
                </time>
                <h6 className="posts__title">
                  <Link to={"/about"}>Get to know us better</Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <Link to={"/about"}>
                      <h4 className="post-author__name text-white font-weight-bold">
                        Read our story
                      </h4>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
            {/* About End */}
            {/* Sponsors Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/sponsors"}>
                  <img src="soccer-dark/assets/images/samples/sponsors.jpg" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/sponsors"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Technology partners &amp; investors
                </time>
                <h6 className="posts__title">
                  <Link to={"/sponsors"}>Learn more about our sponsors</Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <Link to={"/sponsors"}>
                    <h4 className="post-author__name text-white font-weight-bold">
                      Go to sponsor profiles
                    </h4>
                  </Link>
                </div>
              </footer>
            </div>
            {/* Sponsors End */}
            {/* Facebook Start */}
            <a
              href="https://facebook.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--fb card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-facebook.png"
                  alt="Facebook"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Like Our Facebook Page
                </h6>
                <span className="btn-social-counter__count">83600 Likes</span>
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            {/* Facebook End */}
            {/* Careers Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/careers"}>
                  <img src="soccer-dark/assets/images/samples/careers.jpg" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/careers"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Coaching, production &amp; engineering
                </time>
                <h6 className="posts__title">
                  <Link to={"/careers"}>Apply for a career at KuTumba FC</Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <Link to={"/careers"}>
                    <h4 className="post-author__name text-white font-weight-bold">
                      Apply for a career
                    </h4>
                  </Link>
                </div>
              </footer>
            </div>
            {/* Careers End */}
            {/* Twitter Start */}
            <a
              href="https://twitter.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--twitter card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-twitter.png"
                  alt="Twitter"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Follow Us on Twitter
                </h6>
                <span className="btn-social-counter__count">580 Followers</span>{" "}
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            {/* Twitter End */}
            {/* Blog Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <a href="https://kutumbafc.medium.com">
                  <img src="soccer-dark/assets/images/samples/blog.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="https://kutumbafc.medium.com" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  Match reviews &amp; plenty more
                </time>
                <h6 className="posts__title">
                  <a href="https://kutumbafc.medium.com">
                    Read our blog to stay updated
                  </a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <a href="https://kutumbafc.medium.com">
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to blog
                      </h4>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
            {/* Blog End */}
            {/* Newsroom Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/newsroom"}>
                  <img src="soccer-dark/assets/images/samples/newsroom.png" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/newsroom"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Fixtures, recruitments and other news
                </time>
                <h6 className="posts__title">
                  <Link to={"/newsroom"}>
                    Stay up to date on the latest news
                  </Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <Link to={"/newsroom"}>
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to Newsroom
                      </h4>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
            {/* Newsroom End */}
            {/* Instagram Start */}
            <a
              href="https://instagram.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--instagram card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-instagram.png"
                  alt="Google+"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Follow us on Instagram
                </h6>
                <span className="btn-social-counter__count">
                  10250 Followers
                </span>
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            {/* Instagram End */}
            {/* Gallery Start */}
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <Link to={"/gallery"}>
                  <img src="soccer-dark/assets/images/samples/gallery.jpg" />
                </Link>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/gallery"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  Matches, practice &amp; behind-the-scenes
                </time>
                <h6 className="posts__title">
                  <Link to={"/gallery"}>Your favourite moments in 4k</Link>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <Link to={"/gallery"}>
                      <h4 className="post-author__name text-white font-weight-bold">
                        Go to Gallery
                      </h4>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
            {/* Gallery End */}
          </div>
          {/* Card columns end */}
        </div>
        {/* Container end */}
        <div className="spacer py-md-5"></div>
      </motion.div>
    </motion.div>
  );
}
