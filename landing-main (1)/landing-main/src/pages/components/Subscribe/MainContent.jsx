import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import PricingTab from "./PricingTab";
import FAQ from "./FAQ";

export default function MainContent() {
  function subscribe(plan) {
    console.log("called subscribe");
    window.location.replace(
      localStorage.accounts + "register?subscribe=" + plan
    );
  }

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
                    <span className="label posts__cat-label">
                      Subscriptions
                    </span>
                  </div>
                  {/* Post Category / End */}
                  {/* Post Title */}
                  <h1 className="page-heading__title">Subscribe For Merch</h1>
                  {/* Post Title / End */}
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
                  <div className="card__content p-3">
                    <div className="callout callout-primary p-4">
                      <h4>Become a part of KuTumba FC</h4>
                      <p className="mb-0 mb-lg-3">
                        Subscribe to one of our monthly or annual plans to
                        support us and receive exclusive merch at the end of
                        each cycle delivered to your doorstep.
                      </p>
                    </div>
                    <div className="spacer" />
                    <PricingTab></PricingTab>
                    <div className="spacer"></div>
                    <div className="callout callout-primary p-4">
                      <h4>FAQs About Billing</h4>
                      <p className="mb-0 mb-lg-3">
                        Take a look at some of the most common questions about
                        our subscriptions and learn exactly what you're paying
                        for!
                      </p>
                    </div>
                    <FAQ></FAQ>
                    <div className="spacer"></div>
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
