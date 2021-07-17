import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h1 className="page-heading__title">Careers At KuTumba FC</h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Careers
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
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
                          Events and Streams modules{" "}
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
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minimam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          modo sequat. Duis aute irure dolor in reprehenderit in
                          voluriatur.
                        </p>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam ede corporis suscipit laboriosam, nisi ut
                          aliquid ex ea commodi consequatur? Quis autem vel eum
                          iure nderit qui in ea voluptate velit esse quam nihil
                          molestiae consequatur, vel illum qui dolorem.
                        </p>
                        <h4>Events Calendar</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minimam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          modo sequat. Duis aute irure dolor in reprehenderit in
                          voluriatur.
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
                          Applying for the California teams{" "}
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam ede corporis suscipit laboriosam, nisi ut
                          aliquid ex ea commodi consequatur? Quis autem vel eum
                          iure nderit qui in ea voluptate velit esse quam nihil
                          molestiae consequatur, vel illum qui dolorem.
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
                          Buying our Merchandise{" "}
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam ede corporis suscipit laboriosam, nisi ut
                          aliquid ex ea commodi consequatur? Quis autem vel eum
                          iure nderit qui in ea voluptate velit esse quam nihil
                          molestiae consequatur, vel illum qui dolorem.
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
                          Bring the Alchemists to your country{" "}
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam ede corporis suscipit laboriosam, nisi ut
                          aliquid ex ea commodi consequatur? Quis autem vel eum
                          iure nderit qui in ea voluptate velit esse quam nihil
                          molestiae consequatur, vel illum qui dolorem.
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
                          Charity drives and another events{" "}
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam ede corporis suscipit laboriosam, nisi ut
                          aliquid ex ea commodi consequatur? Quis autem vel eum
                          iure nderit qui in ea voluptate velit esse quam nihil
                          molestiae consequatur, vel illum qui dolorem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* FAQs / End */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
