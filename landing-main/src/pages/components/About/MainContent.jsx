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
        <div className="page-heading page-heading--overlay page-heading--post-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Post Meta - Top */}
                <div className="post__meta-block post__meta-block--top">
                  {/* Post Category */}
                  <div className="post__category">
                    <span className="label posts__cat-label">Wiki</span>
                  </div>
                  {/* Post Category / End */}
                  {/* Post Title */}
                  <h1 className="page-heading__title">About Us</h1>
                  {/* Post Title / End */}
                  {/* Post Meta Info */}
                  {/* <ul className="post__meta meta">
                    <li className="meta__item meta__item--date">
                      <time dateTime="2021-02-06" className="font-weight-bold">
                        Effective - February 6th, 2021
                      </time>
                    </li>
                  </ul> */}
                  {/* Post Meta Info / End */}
                  {/* Post Author */}
                  {/* <div className="post-author">
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
                  </div> */}
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
                    <div className="post__content text-justify">
                      <h4>Introduction</h4>
                      <p>
                        The use of this website and services on this website
                        provided by Vision Sees Beyond Sight Pvt. Ltd.
                        (hereinafter referred to as <b>"Owner"</b>) are subject
                        to the following Terms &amp; Conditions (hereinafter the{" "}
                        <b>"Terms of Service"</b>), all parts and sub-parts of
                        which are specifically incorporated by reference here
                        together with the Privacy Policy. Following are the
                        Terms of Service governing your use of www.kutumbafc.com
                        / www.kutumbafc.in (the <b>"Website"</b>), all pages on
                        the Website and any services provided by or on this
                        Website (<b>"Services"</b>)
                      </p>
                      <p>
                        By accessing either directly or through a hyperlink, the
                        Website, and/ or purchasing something from us, you
                        engage in our "Service" and agree to be bound by the
                        Terms of Service including those additional terms and
                        conditions and policies referenced herein and/or
                        available by hyperlink. These Terms of Service apply to
                        all users of the site, including without limitation
                        vendors, buyers, customers, merchants, browsers and/ or
                        contributors of content. You acknowledge and agree that
                        the Website may use your personal information in the
                        manner described in our Privacy Policy which sets forth
                        how information collected about you is collected, used
                        and stored.
                      </p>
                      <div className="spacer" />
                      <h4>1) Definitions</h4>
                      <p>
                        The parties referred to in these Terms of Service shall
                        be defined as follows:
                        <br />
                        a) Owner, Us, We: The Owner, as the creator, operator,
                        and publisher of the Website, makes the Website, and
                        certain Services on it, available to users. Vision Sees
                        Beyond Sight Pvt. Ltd., Owner, Us, We, Our, Ours and
                        other first-person pronouns will refer to the Owner, as
                        well as all employees and affiliates of the Owner.
                        <br />
                        b) You, the User, the Client: You, as the user of the
                        Website, will be referred to throughout these Terms of
                        Service with second-person pronouns such as You, Your,
                        Yours, or as User or Client. For the purpose of these
                        Terms of Service, the term <b>"user"</b> or <b>"you"</b>{" "}
                        shall mean any natural or legal person who person is
                        accessing the Website. The term <b>"your"</b> shall be
                        construed accordingly.
                        <br />
                        c) Parties: Collectively, the parties to these Terms of
                        Service (the Owner and You) will be referred to as
                        Parties.
                      </p>
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
