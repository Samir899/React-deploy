import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import "./subscription.css";

export default function PricingTab() {
  const [openPlan1Modal, setPlan1ModalOpen] = useState(false);
  const [openPlan2Modal, setPlan2ModalOpen] = useState(false);
  const [openPlan3Modal, setPlan3ModalOpen] = useState(false);
  const [openPlan4Modal, setPlan4ModalOpen] = useState(false);

  const onClosePlan1Modal = () => setPlan1ModalOpen(false);
  const onOpenPlan1Modal = () => setPlan1ModalOpen(true);
  const onClosePlan2Modal = () => setPlan2ModalOpen(false);
  const onOpenPlan2Modal = () => setPlan2ModalOpen(true);
  const onClosePlan3Modal = () => setPlan3ModalOpen(false);
  const onOpenPlan3Modal = () => setPlan3ModalOpen(true);
  const onClosePlan4Modal = () => setPlan4ModalOpen(false);
  const onOpenPlan4Modal = () => setPlan4ModalOpen(true);

  function subscribe(plan, months) {
    console.log("called Subscribe");
    window.location.replace(
      localStorage.accounts +
        "register?subscribe=" +
        plan +
        "&months=" +
        months
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

  //   useEffect(() => {
  //     var card9 = document.querySelector(".card--9");

  //     card9.addEventListener("mousemove", function (e) {
  //       var wh = window.innerHeight / 2,
  //         ww = window.innerWidth / 2;
  //       card9.style.setProperty("--mouseX9", (e.clientX - ww) / 25);
  //       card9.style.setProperty("--mouseY9", (e.clientY - wh) / 25);
  //     });

  //     card9.addEventListener("mouseleave", function (e) {
  //       card9.style.setProperty("--mouseX9", 0);
  //       card9.style.setProperty("--mouseY9", 0);
  //     });
  //   }, []);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} id="pricing-cards">
        <div className="col-12 mb-4 p-0">
          <div className="card border-0 card-shadow h-100">
            <div className="card-body p-4 p-xl-5">
              <h4 className="mb-3">
                I Want To Help An Indian Football Club Set A World Record!
              </h4>
              <div className="d-flex align-items-center">
                <h3 className="mb-0 font-weight-bold">&#8377;99.99</h3>
                <del className="text-muted font-weight-normal ml-5">
                  &#8377;149.99
                </del>
              </div>
              <h6 className="mb-4">One Time Payment</h6>

              {/* Card Test */}
              <img
                src="soccer-dark/assets/images/ticket.png"
                className="mt-2 mb-5"
              />

              {/* <div className="ticket_ticket-visual-wrapper__2z-Zb">
                <div className="ticket_ticket-visual__1YC6I utils_appear__2_wHv utils_appear-fourth__Lzvee">
                  <div
                    className="ticket-visual_visual__2-uAa"
                    style={{ size: 1 }}
                  >
                    <div className="ticket-visual_horizontal-ticket__qV1LM">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 650 330"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 0C8.95431 0 0 8.95431 0 20V138C14.9117 138 27 150.088 27 165C27 179.912 14.9117 192 0 192V310C0 321.046 8.9543 330 20 330H630C641.046 330 650 321.046 650 310V192C635.088 192 623 179.912 623 165C623 150.088 635.088 138 650 138V20C650 8.95431 641.046 0 630 0H20Z"
                          fill="#6741D9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21 5C12.1634 5 5 12.1634 5 21V133.388C20.2981 135.789 32 149.028 32 165C32 180.972 20.2981 194.211 5 196.612V309C5 317.837 12.1634 325 21 325H629C637.837 325 645 317.837 645 309V196.612C629.702 194.211 618 180.972 618 165C618 149.028 629.702 135.789 645 133.388V21C645 12.1634 637.837 5 629 5H21Z"
                          fill="black"
                        />
                        <path
                          d="M512 5V326"
                          stroke="#444444"
                          strokeDasharray="6 6"
                        />
                      </svg>
                    </div>
                    <div className="ticket-visual_vertical-ticket__3i_8d">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 330 560"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.9193e-06 540C3.40212e-06 551.046 8.95431 560 20 560L138 560C138 545.088 150.088 533 165 533C179.912 533 192 545.088 192 560L310 560C321.046 560 330 551.046 330 540L330 20C330 8.95427 321.046 -1.40334e-05 310 -1.35505e-05L192 -8.39259e-06C192 14.9117 179.912 27 165 27C150.088 27 138 14.9117 138 -6.03217e-06L20 -8.74228e-07C8.95428 -3.91405e-07 -2.41646e-05 8.95428 -2.36041e-05 20L2.9193e-06 540Z"
                          fill="#6741D9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 539C5 547.837 12.1634 555 21 555L133.388 555C135.789 539.702 149.028 528 165 528C180.972 528 194.211 539.702 196.612 555L309 555C317.837 555 325 547.837 325 539L325 21C325 12.1634 317.837 4.99999 309 4.99999L196.612 4.99999C194.211 20.2981 180.972 32 165 32C149.028 32 135.789 20.2982 133.388 4.99999L21 5C12.1634 5 4.99998 12.1635 4.99998 21L5 539Z"
                          fill="black"
                        />
                        <path
                          d="M326 446H5"
                          stroke="#444444"
                          strokeDasharray="6 6"
                        />
                      </svg>
                    </div>
                    <div className="ticket-visual_profile__2tP1G">
                      <div className="ticket-profile_profile__2QLF0">
                        <span className="ticket-profile_skeleton__3ApYA ticket-profile_wrapper__2tyBQ ticket-profile_inline__3-79J ticket-profile_rounded__3S2Nc">
                          <img
                            src="https://github.com/thedanielmark.png"
                            alt="thedanielmark"
                            className="ticket-profile_image__2md3V"
                          />
                        </span>
                        <div className="ticket-profile_text__19o-s">
                          <p className="ticket-profile_name__1Lz-y">
                            <span className="ticket-profile_skeleton__3ApYA ticket-profile_wrapper__2tyBQ">
                              Daniel Mark
                            </span>
                          </p>
                          <p className="ticket-profile_username___l_WH">
                            <span className="ticket-profile_skeleton__3ApYA ticket-profile_wrapper__2tyBQ">
                              <span className="ticket-profile_githubIcon__1PJwk">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 17 16"
                                  width={20}
                                  height={20}
                                  fill="none"
                                >
                                  <g clipPath="url(githublogo)">
                                    <path
                                      fill="var(--secondary-color)"
                                      fillRule="evenodd"
                                      d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
                                      clipRule="evenodd"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="githublogo">
                                      <path
                                        fill="transparent"
                                        d="M0 0h15.86v15.86H0z"
                                        transform="translate(.253906 .0493164)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              thedanielmark
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-visual_info__UfWqf">
                      <div className="ticket-info_info__1h3gV">
                        <div className="ticket-info_logo__244g2">
                          <div className="logo_logo__hDeA3">
                            <div className="logo_icon__3cHv1">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  rx={16}
                                  fill="var(--accents-1)"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div className="logo_text__1nQ-j">
                              <div>ACME</div>
                              <div
                                style={{ color: "var(--brand)" }}
                                className="logo_text-secondary__1fwHP"
                              >
                                Conf
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ticket-info_date__1S3AR">
                          <div>October 27, 2020</div>
                          <div>ONLINE</div>
                        </div>
                        <div className="utils_hide-on-mobile__343Q_">
                          <div className="ticket-info_created-by__2n8fD">
                            <div className="ticket-info_created-by-text__1QrVI">
                              Created by{" "}
                            </div>
                            <div className="ticket-info_created-by-logo__3z8xX">
                              <svg
                                height="100%"
                                viewBox="0 0 283 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                                  fill="var(--accents-4)"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="ticket-info_url__1dOXQ">
                          demo.vercel.events
                        </div>
                        <div className="utils_show-on-mobile__2dRKu">
                          <div className="ticket-info_created-by__2n8fD">
                            <div className="ticket-info_created-by-text__1QrVI">
                              Created by{" "}
                            </div>
                            <div className="ticket-info_created-by-logo__3z8xX">
                              <svg
                                height="100%"
                                viewBox="0 0 283 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                                  fill="var(--accents-4)"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-visual_ticket-number-wrapper__1fVzH">
                      <div className="ticket-visual_ticket-number__1liyY">
                        № {/* *00{/* *1109
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              

              {/* End Card Test */}

              <button className="btn btn-warning btn-block mb-4">
                Buy Now
              </button>
              <ul className="list-unstyled font-weight-semi-bold">
                <li>
                  <i className="fas fa-check text-warning mr-3"></i>
                  Digital Membership Card
                </li>
                <li>
                  <i className="fas fa-shopping-bag text-warning mr-3"></i>
                  20% Off On All Store Purchases
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        {/* Nav tabs */}
        <ul
          className="nav nav-pills pricing-nav-pills mb-5 d-flex justify-content-center"
          id="pricingTabTwo"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pricing-two-mnthly-tab"
              data-toggle="tab"
              href="#pricing-two-mnthly"
              role="tab"
              aria-controls="pricing-two-mnthly"
              aria-selected="true"
            >
              Monthly Plan
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pricing-two-yearly-tab"
              data-toggle="tab"
              href="#pricing-two-yearly"
              role="tab"
              aria-controls="pricing-two-yearly"
              aria-selected="false"
            >
              Annual Plan
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="pricing-two-mnthly"
            role="tabpanel"
            aria-labelledby="pricing-two-mnthly-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5 pb-0">
                    <h4 className="mb-3">Call Me A Fan!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;69
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;99
                      </del>
                    </div>
                    <h6 className="mb-4">Monthly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan1Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(1, 1)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me A Friend!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;99
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;149
                      </del>
                    </div>
                    <h6 className="mb-4">Monthly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan2Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(2, 1)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Cap
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me A Best Friend!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;129
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;149
                      </del>
                    </div>
                    <h6 className="mb-4">Monthly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan3Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(3, 1)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Jersey
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me KuTumba!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;199
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;249
                      </del>
                    </div>
                    <h6 className="mb-4">Monthly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan4Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(4, 1)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Home/Away Jersey
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Cap
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Badge
                        </span>
                        <span className="text-secondary">4 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End of row */}
          </div>
          <div
            className="tab-pane"
            id="pricing-two-yearly"
            role="tabpanel"
            aria-labelledby="pricing-two-yearly-tab"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5 pb-0">
                    <h4 className="mb-3">Call Me A Fan!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;755
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;839
                      </del>
                    </div>
                    <h6 className="mb-4">Yearly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan1Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(1, 12)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-check-circle text-success mr-3"></i>
                        One Month Free
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me A Friend!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;1079
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;1199
                      </del>
                    </div>
                    <h6 className="mb-4">Yearly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan2Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(2, 12)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Cap
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-check-circle text-success mr-3"></i>
                        One Month Free
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me A Best Friend!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;1403
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;1559
                      </del>
                    </div>
                    <h6 className="mb-4">Yearly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan3Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(3, 12)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Jersey
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          T-Shirt
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-check-circle text-success mr-3"></i>
                        One Month Free
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-0 card-shadow h-100">
                  <div className="card-body p-4 p-xl-5">
                    <h4 className="mb-3">Call Me KuTumba!</h4>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-auto font-weight-bold">
                        &#8377;1979
                      </h3>
                      <del className="text-muted font-weight-normal">
                        &#8377;2199
                      </del>
                    </div>
                    <h6 className="mb-4">Yearly</h6>
                    <button
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => onOpenPlan4Modal()}
                    >
                      What's Inside?
                    </button>
                    <button
                      className="btn btn-primary-inverse btn-block mb-4"
                      onClick={() => subscribe(4, 12)}
                    >
                      Subscribe Now
                    </button>
                    <ul className="list-unstyled font-weight-semi-bold">
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Home/Away Jersey
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Mug
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Cap
                        </span>
                        <span className="text-secondary">1 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Badge
                        </span>
                        <span className="text-secondary">4 pc</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>
                          <i className="fas fa-check text-primary mr-3"></i>
                          Membership Card
                        </span>
                        <span className="text-secondary">1 yr</span>
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-check-circle text-success mr-3"></i>
                        One Month Free
                      </li>
                      <li className="mt-3">
                        <i className="fas fa-shopping-bag text-warning mr-3"></i>
                        10% Off On Store Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call Me A Fan Plan */}
        <Modal
          open={openPlan1Modal}
          onClose={onClosePlan1Modal}
          blockScroll={false}
          closeOnEsc={true}
          closeOnOverlayClick={true}
          showCloseIcon={true}
          classNames={{
            overlay: "subscriptionOverlay",
            modal: "subscriptionModal",
          }}
          focusTrapped={false}
          center
        >
          <div>
            <h4>
              <i className="fas fa-shopping-bag mr-2"></i>"Call Me A Fan" Plan
            </h4>
            <p className="font-weight-semi-bold"></p>
            <div className="container d-flex justify-content-center">
              <img src="soccer-dark/assets/images/merch/adidas-jersey.jpg" />
            </div>
          </div>
        </Modal>
        {/* End Of Call Me A Fan Plan */}
        {/* Call Me A Friend Plan */}
        <Modal
          open={openPlan2Modal}
          onClose={onClosePlan2Modal}
          blockScroll={false}
          closeOnEsc={true}
          closeOnOverlayClick={true}
          showCloseIcon={true}
          classNames={{
            overlay: "subscriptionOverlay",
            modal: "subscriptionModal",
          }}
          focusTrapped={false}
          center
        >
          <div>
            <h4>
              <i className="fas fa-shopping-bag mr-2"></i>"Call Me A Friend"
              Plan
            </h4>
            <p className="font-weight-semi-bold"></p>
            <div className="container d-flex justify-content-center">
              <img src="soccer-dark/assets/images/merch/adidas-jersey.jpg" />
            </div>
          </div>
        </Modal>
        {/* End Of Call Me A Friend Plan */}
        {/* Call Me A Best Friend Plan */}
        <Modal
          open={openPlan3Modal}
          onClose={onClosePlan3Modal}
          blockScroll={false}
          closeOnEsc={true}
          closeOnOverlayClick={true}
          showCloseIcon={true}
          classNames={{
            overlay: "subscriptionOverlay",
            modal: "subscriptionModal",
          }}
          focusTrapped={false}
          center
        >
          <div>
            <h4>
              <i className="fas fa-shopping-bag mr-2"></i>"Call Me A Best
              Friend" Plan
            </h4>
            <p className="font-weight-semi-bold"></p>
            <div className="container d-flex justify-content-center">
              <img src="soccer-dark/assets/images/merch/adidas-jersey.jpg" />
            </div>
          </div>
        </Modal>
        {/* End Of Call Me A Best Friend Plan */}
        {/* Call Me A KuTumba Plan */}
        <Modal
          open={openPlan4Modal}
          onClose={onClosePlan4Modal}
          blockScroll={false}
          closeOnEsc={true}
          closeOnOverlayClick={true}
          showCloseIcon={true}
          classNames={{
            overlay: "subscriptionOverlay",
            modal: "subscriptionModal",
          }}
          focusTrapped={false}
          center
        >
          <div>
            <h4>
              <i className="fas fa-shopping-bag mr-2"></i>"Call Me KuTumba" Plan
            </h4>
            <p className="font-weight-semi-bold"></p>
            <div className="container d-flex justify-content-center">
              <img src="soccer-dark/assets/images/merch/adidas-jersey.jpg" />
            </div>
          </div>
        </Modal>
        {/* End Of Call Me A KuTumba Plan */}
      </motion.div>
    </motion.div>
  );
}
