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
                    <span className="label posts__cat-label">Careers</span>
                  </div>
                  {/* Post Category / End */}
                  {/* Post Title */}
                  <h1 className="page-heading__title">Careers at KuTumba FC</h1>
                  {/* Post Title / End */}
                </div>
                {/* Post Meta - Top / End */}
              </div>
            </div>
          </div>
        </div>

        {/* <nav className="content-filter">
          <div className="container">
            <a href="#" className="content-filter__toggle" />
            <ul className="content-filter__list">
              <li className="content-filter__item content-filter__item--active">
                <a
                  href="_soccer_team-overview.html"
                  className="content-filter__link"
                >
                  <small>Careers</small>Overview
                </a>
              </li>
              <li className="content-filter__item">
                <a
                  href="_soccer_team-roster.html"
                  className="content-filter__link"
                >
                  <small>Temporary</small>Positions
                </a>
              </li>
              <li className="content-filter__item">
                <a
                  href="_soccer_team-standings.html"
                  className="content-filter__link"
                >
                  <small>Permanent</small>Positions
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="site-content">
          <div className="container">
            <div className="row">
              {/* Content */}
              <div className="col-lg-2"></div>
              <div className="content col-lg-8">
                {/* Article */}
                <article className="card card--lg post post--single post--extra-top">
                  <div className="card__content">
                    <h4>Introduction</h4>
                    <p>
                      <h4 className="text-white font-weight-normal">
                        At KuTumba FC we aim to be the best on and off the pitch
                        – and the quality of our behind-the-scenes team sets us
                        apart from the competition.
                      </h4>
                    </p>
                    <p>
                      Our people are as committed to the success of the company
                      as the players are to winning trophies. We offer a unique
                      and exciting working environment, excellent training, with
                      recognition and rewards for the part each individual
                      plays.
                    </p>
                    <p>
                      Permanent &amp; Temporary positions include: Venue
                      Operations &amp; Hospitality (e.g. Catering, Museum, Venue
                      Sales, Ticketing &amp; Membership Services); Facilities
                      Management (e.g. Plumbers, Joiners, Cleaners); Corporate
                      Services (e.g. Finance, IT, HR, Communications);
                      Commercial Services (e.g. Financial Services, Relationship
                      Marketing); and Media (e.g. Social Media, Website, MUTV).
                    </p>
                    <p>
                      Roles within Matchday &amp; Events include Matchday
                      Catering (e.g. Kiosk, Waiting On, Bar Staff, Chef,
                      Supervisors, Managers).
                    </p>
                    <div className="spacer" />
                    <h4>How to apply?</h4>
                    <p>
                      Select the type of position you'd like below, either
                      Matchday &amp; Events or Permanent &amp; Temporary, then
                      pick the appropriate role and apply online.
                    </p>
                    <p>
                      You can register here for Permanent &amp; Temporary
                      positions. Once you are registered you will be able to
                      return and edit your account or set up job alerts that
                      match your search criteria.
                    </p>
                    <p>
                      For Matchday &amp; Events, please complete and submit the
                      online form for your desired role.
                    </p>
                    <p>
                      Please note: KuTumba FC predominantly recruit staff
                      directly through our website channels and work with a
                      select number of recognised recruitment agencies to
                      recruit additional staff when needed. KuTumba FC do not
                      engage with specific individuals to recruit on behalf of
                      the Company and we will never ask for payment in respect
                      of any uniform, or similar items, prior to an offer of
                      work being made.
                    </p>
                    <div className="spacer" />
                    {/* FAQs */}
                    <div
                      className="accordion accordion--space-between"
                      id="accordionFaqs"
                    >
                      <div className="card">
                        <div className="card__header" id="heading-0">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link accordion__header-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-0"
                              aria-expanded="false"
                              aria-controls="collapse-0"
                            >
                              Assistant Lead Phase Scout U9-11
                              <span className="accordion__header-link-icon" />
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse-0"
                          className="collapse"
                          aria-labelledby="heading-0"
                          data-parent="#accordionFaqs"
                        >
                          <div className="card__content">
                            <h4>Live Featured Streams!</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad
                              minimam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea modo sequat. Duis aute irure
                              dolor in reprehenderit in voluriatur.
                            </p>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam ede corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure nderit qui in ea voluptate velit esse
                              quam nihil molestiae consequatur, vel illum qui
                              dolorem.
                            </p>
                            <h4>Events Calendar</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad
                              minimam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea modo sequat. Duis aute irure
                              dolor in reprehenderit in voluriatur.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card__header" id="heading-1">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link accordion__header-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-1"
                              aria-expanded="false"
                              aria-controls="collapse-1"
                            >
                              Assistant Tax Manager
                              <span className="accordion__header-link-icon" />
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse-1"
                          className="collapse"
                          aria-labelledby="heading-1"
                          data-parent="#accordionFaqs"
                        >
                          <div className="card__content">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam ede corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure nderit qui in ea voluptate velit esse
                              quam nihil molestiae consequatur, vel illum qui
                              dolorem.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card__header" id="heading-2">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link accordion__header-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-2"
                              aria-expanded="false"
                              aria-controls="collapse-2"
                            >
                              Part-Time Admin Assistant
                              <span className="accordion__header-link-icon" />
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse-2"
                          className="collapse"
                          aria-labelledby="heading-2"
                          data-parent="#accordionFaqs"
                        >
                          <div className="card__content">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam ede corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure nderit qui in ea voluptate velit esse
                              quam nihil molestiae consequatur, vel illum qui
                              dolorem.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card__header" id="heading-3">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link accordion__header-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              Strategy Intern
                              <span className="accordion__header-link-icon" />
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse-3"
                          className="collapse"
                          aria-labelledby="heading-3"
                          data-parent="#accordionFaqs"
                        >
                          <div className="card__content">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam ede corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure nderit qui in ea voluptate velit esse
                              quam nihil molestiae consequatur, vel illum qui
                              dolorem.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card__header" id="heading-4">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link accordion__header-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-4"
                              aria-expanded="false"
                              aria-controls="collapse-4"
                            >
                              Software Engineer
                              <span className="accordion__header-link-icon" />
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse-4"
                          className="collapse"
                          aria-labelledby="heading-4"
                          data-parent="#accordionFaqs"
                        >
                          <div className="card__content">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam ede corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum iure nderit qui in ea voluptate velit esse
                              quam nihil molestiae consequatur, vel illum qui
                              dolorem.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* FAQs / End */}
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
