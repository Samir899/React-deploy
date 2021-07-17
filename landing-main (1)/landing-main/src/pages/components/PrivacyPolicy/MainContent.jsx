import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./Styles.css";

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
        <div className="page-heading page-heading--overlay page-heading--post-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Post Meta - Top */}
                <div className="post__meta-block post__meta-block--top">
                  {/* Post Category */}
                  <div className="post__category">
                    <span className="label posts__cat-label">Legal</span>
                  </div>
                  {/* Post Category / End */}
                  {/* Post Title */}
                  <h1 className="page-heading__title">Privacy Policy</h1>
                  {/* Post Title / End */}
                  {/* Post Meta Info */}
                  <ul className="post__meta meta">
                    <li className="meta__item meta__item--date">
                      <time dateTime="2021-02-06" className="font-weight-bold">
                        Effective - February 6th, 2021
                      </time>
                    </li>
                  </ul>
                  {/* Post Meta Info / End */}
                  {/* Post Author */}
                  <div className="post-author">
                    <figure className="post-author__avatar">
                      <img
                        src="soccer-dark/assets/images/soccer/logo.png"
                        alt="Post Author Avatar"
                      />
                    </figure>
                    <div className="post-author__info">
                      <h4 className="post-author__name">Websites Covered</h4>
                      <span className="post-author__slogan text-white pt-1">
                        kutumbafc.com / kutumbafc.in / accounts.kutumbafc.com /
                        myaccount.kutumbafc.com / store.kutumbafc.com
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

        <div className="site-content">
          <div className="container">
            <div className="row">
              {/* Content */}
              <div className="col-lg-2"></div>
              <div className="content col-lg-8">
                {/* Article */}
                <article className="card card--lg post post--single post--extra-top">
                  <div className="card__content">
                    <div
                      className="post__content text-justify"
                      id="article-custom-list"
                    >
                      <ol>
                        <li className="heading">Introduction</li>
                        <ol>
                          <li>
                            We are committed to safeguarding the privacy of [our
                            website visitors, service users, individual
                            customers and customer personnel].
                          </li>
                          <li>
                            This policy applies where we are acting as a data
                            controller with respect to the personal data of such
                            persons; in other words, where we determine the
                            purposes and means of the processing of that
                            personal data.
                          </li>
                          <li>
                            Our website incorporates privacy controls which
                            affect how we will process your personal data. By
                            using the privacy controls, you can specify whether
                            you would like to receive direct marketing
                            communications and limit the collection, sharing and
                            publication of your personal data.
                          </li>
                          <li>
                            We use cookies on our website. Insofar as those
                            cookies are not strictly necessary for the provision
                            of our website and services, we will ask you to
                            consent to our use of cookies when you first visit
                            our website.
                          </li>
                          <li>
                            In this policy, "we", "us" and "our" refer to [data
                            controller name].[ For more information about us,
                            see Section 14.]
                          </li>
                        </ol>
                      </ol>
                      <div className="spacer" />
                    </div>
                  </div>
                </article>
                {/* Article / End */}
              </div>
              {/* Content / End */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
