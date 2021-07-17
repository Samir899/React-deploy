import React from "react";
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";

function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: easing,
      },
    },
  };

  const fade2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4,
        ease: easing,
      },
    },
  };

  const fade3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 5,
        ease: easing,
      },
    },
  };

  const fade4 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 6,
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
                <h1 className="page-heading__title">
                  Your <span className="highlight">Account</span>
                </h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="_soccer_index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="_soccer_shop-grid.html">Shop</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Your Account
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="site-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Account Navigation */}
                <div className="card">
                  <div className="card__header">
                    <h4>Welcome Back!</h4>
                  </div>
                  <div className="card__content">
                    <nav className="df-account-navigation">
                      <ul>
                        <li className="df-account-navigation__link">
                          <a href="#">Profile Information</a>
                        </li>
                        <li className="df-account-navigation__link">
                          <a href="#">Billing Information</a>
                        </li>
                        <li className="df-account-navigation__link">
                          <a href="#">Shipping Information</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Account Navigation / End */}
              </div>
              <div className="col-lg-8">
                {/* Personal Information */}
                <div className="card card--lg">
                  <div className="card__header">
                    <h4>Personal Information</h4>
                  </div>
                  <div className="card__content">
                    <form action="#" className="df-personal-info">
                      <div className="form-group form-group--upload">
                        <div className="form-group__avatar">
                          <img
                            src="soccer-dark/assets/images/samples/avatar-empty.png"
                          />
                          <div className="form-group__label">
                            <h6>Profile Photo</h6>
                            <span>Minimum size 60x60px</span>
                          </div>
                        </div>
                        <div className="form-group__upload">
                          <label className="btn btn-default btn-xs btn-file">
                            Upload Image...{" "}
                            <input type="file" style={{ display: "none" }} />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-email">Email</label>{" "}
                            <input
                              type="email"
                              className="form-control"
                              defaultValue
                              name="account-email"
                              id="account-email"
                              placeholder="jamesgirobilli@yourmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-username">Username</label>{" "}
                            <input
                              type="text"
                              className="form-control"
                              defaultValue
                              name="account-username"
                              id="account-username"
                              placeholder="James Girobilli MVP "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-password">
                              Change Password
                            </label>{" "}
                            <input
                              type="password"
                              className="form-control"
                              defaultValue
                              name="account-password"
                              id="account-password"
                              placeholder="**********"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-password-repeat">
                              Repeat Password
                            </label>{" "}
                            <input
                              type="password"
                              className="form-control"
                              defaultValue
                              name="account-password-repeat"
                              id="account-password-repeat"
                              placeholder="**********"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-first-name">
                              First Name
                            </label>{" "}
                            <input
                              type="text"
                              className="form-control"
                              defaultValue
                              name="account-first-name"
                              id="account-first-name"
                              placeholder="Your first name..."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-last-name">Last Name</label>{" "}
                            <input
                              type="text"
                              className="form-control"
                              defaultValue
                              name="account-last-name"
                              id="account-last-name"
                              placeholder="Your last name..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-group--sm">
                        <label htmlFor="account-address-1">Full Address</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          name="account-address-1"
                          id="account-address-1"
                          placeholder="Enter your street address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          name="account-address-2"
                          id="account-address-2"
                          placeholder="Enter your apartment, floor, suite, etc..."
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="account-country">Country</label>{" "}
                        <select
                          name="account-country"
                          id="account-country"
                          className="form-control"
                        >
                          <option value={0}>Select your country...</option>
                          <option value="Canada">Canada</option>
                          <option value="Italy">Italy</option>
                          <option value="Spain">Spain</option>
                          <option value="Greece">Greece</option>
                        </select>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-city">State or City</label>{" "}
                            <select
                              name="account-city"
                              id="account-city"
                              className="form-control"
                            >
                              <option value={0}>
                                Select your state or city...
                              </option>
                              <option value={1}>New York</option>
                              <option value={2}>Barcelona</option>
                              <option value={3}>Paris</option>
                              <option value={4}>London</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-postcode">Zip Code</label>{" "}
                            <input
                              type="text"
                              name="account-postcode"
                              id="account-postcode"
                              className="form-control"
                              placeholder="Your zip or postal code..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group--submit">
                        <button
                          type="submit"
                          className="btn btn-default btn-lg btn-block"
                        >
                          See all the changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Personal Information / End */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default withRouter(MainContent);
