import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCookies } from "react-cookie";
import axios from "axios";

import "./layout.css";

export default function Layout(props) {
  // Check if cookies are accepted
  function getCookie(name) {
    var match = document.cookie.match(
      RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
    );
    return match ? match[1] : null;
  }

  useEffect(() => {
    // Check if cookie consent is needed
    var cookieStatus = getCookie("cookies");
    if (cookieStatus === null) {
      setCookieModalOpen(true);
    }
  }, []);

  const [openLanguageModal, setLanguageModalOpen] = useState(false);
  const [openCookieModal, setCookieModalOpen] = useState(false);

  const onOpenLanguageModal = () => setLanguageModalOpen(true);
  const onCloseLanguageModal = () => setLanguageModalOpen(false);
  const onOpenCookieModal = () => setCookieModalOpen(true);

  const closeIcon = () => {
    return '<i class="fas fa-times"></i>';
  };

  // Function to accept cookies and close modal
  const onCloseCookieModal = () => {
    removeCookie("cookies");
    setCookie("cookies", true, {
      domain: ".kutumbafc.com",
      maxAge: "2147483647",
    });

    // Remove before production
    setCookie("cookies", true, {
      domain: "",
      maxAge: "2147483647",
    });
    setCookieModalOpen(false);
  };

  // Function to reject cookies and redirect
  const rejectCookies = () => {
    (function () {
      var cookies = document.cookie.split("; ");
      for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
          var cookieBase =
            encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
            "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.kutumbafc.com" +
            d.join(".") +
            " ;path=";
          var p = window.location.pathname.split("/");
          document.cookie = cookieBase + "/";
          while (p.length > 0) {
            document.cookie = cookieBase + p.join("/");
            p.pop();
          }
          d.shift();
        }
      }
    })();
    window.location.replace("https://nocookie.kutumbafc.com");
  };

  function logout() {
    var phone = getCookie("phone");
    var auth_token = getCookie("auth_token");

    axios
      .post(
        localStorage.APIRoute +
          "logout.php?phone=" +
          phone +
          "&auth_token=" +
          auth_token
      )
      .then(function (response) {
        console.log(response);
        if (response.data === "success") {
          removeCookie("email");
          removeCookie("phone");
          removeCookie("auth_token");
          localStorage.isLoggedIn = false;
          window.location.reload();
        } else {
          removeCookie("email");
          removeCookie("phone");
          removeCookie("auth_token");
          localStorage.isLoggedIn = false;
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function toggleMenu() {
    document
      .getElementById("site-wrapper")
      .classList.toggle("site-wrapper--has-overlay");
  }

  let isLoggedIn = localStorage.isLoggedIn;
  const renderAuthButton = () => {
    if (isLoggedIn === true) {
      return (
        <a href="#!" onClick={() => logout()}>
          Logout
        </a>
      );
    } else {
      return <a href={localStorage.accounts}>Login</a>;
    }
  };

  const [cookies, setCookie, removeCookie] = useCookies([
    "cookies",
    "email",
    "phone",
    "auth_token",
  ]);

  return (
    <div id="site-wrapper" className="site-wrapper clearfix">
      <div className="site-overlay" onClick={() => toggleMenu()}></div>
      {/* Header Mobile */}
      <div className="header-mobile clearfix" id="header-mobile">
        <div className="header-mobile__logo">
          <Link to={"/"}>
            <img
              src="soccer-dark/assets/images/soccer/logo.png"
              srcSet="soccer-dark/assets/images/soccer/logo_2x.png 2x"
              alt="Kutumba"
              className="header-mobile__logo-img"
            />
          </Link>
        </div>
        <div className="header-mobile__inner">
          <span className="burger-menu-icon" onClick={() => toggleMenu()}>
            <span className="burger-menu-icon__line" />
          </span>
        </div>
      </div>
      {/* Header Desktop */}
      <header className="header header--layout-1">
        {/* Header Top Bar */}
        <div className="header__top-bar clearfix">
          <div className="container">
            <div className="header__top-bar-inner">
              {/* Account Navigation */}
              <ul className="nav-account">
                <li className="nav-account__item">
                  <a
                    href="https://myaccount.kutumbafc.com/"
                    data-toggle="modal"
                    data-target="#modal-login-register-tabs"
                  >
                    My Account
                  </a>
                </li>
                <li
                  className="nav-account__item nav-account__item--logout"
                  id="login-button"
                >
                  {renderAuthButton()}
                </li>
                <li className="nav-account__item">
                  <a href="https://instagram.com/kutumbafc">
                    <i className="fab fa-instagram text-secondary font-weight-bold"></i>
                  </a>
                  <a href="https://twitter.com/kutumbafc">
                    <i className="fab fa-twitter text-secondary font-weight-bold mx-lg-3"></i>
                  </a>
                  <a href="https://facebook.com/kutumbafc">
                    <i className="fab fa-facebook-f text-secondary font-weight-bold"></i>
                  </a>
                </li>
                {/* <li
                  className="nav-account__item nav-account__item--logout"
                  id="logout-button"
                >
                  <a href={localStorage.accounts} onClick={() => logout()}>Logout</a>
                </li> */}
              </ul>
              {/* Account Navigation / End */}
            </div>
          </div>
        </div>
        {/* Header Top Bar / End */}
        {/* Header Secondary */}
        <div className="header__secondary">
          <div className="container">
            {/* Header Search Form */}
            {/* <div className="header-search-form">
              <form action="#" id="mobile-search-form" className="search-form">
                <input
                  type="text"
                  className="form-control header-mobile__search-control"
                  defaultValue
                  placeholder="Enter your search here..."
                />{" "}
                <button type="submit" className="header-mobile__search-submit">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div> */}
            {/* Header Search Form / End */}
            <ul className="info-block info-block--header">
              <li className="info-block__item info-block__item--contact-primary">
                <svg role="img" className="df-icon df-icon--whistle">
                  <use xlinkHref="soccer-dark/assets/images/icons-soccer.svg#whistle" />
                </svg>
                <h6 className="info-block__heading">Write to us!</h6>
                <a
                  className="info-block__link"
                  href="mailto:info@kutumbafc.com"
                >
                  info@kutumbafc.com
                </a>
              </li>
              <li className="info-block__item info-block__item--contact-secondary">
                <svg role="img" className="df-icon df-icon--soccer-ball">
                  <use xlinkHref="soccer-dark/assets/images/icons-soccer.svg#soccer-ball" />
                </svg>
                <h6 className="info-block__heading">Got Questions?</h6>
                <a
                  className="info-block__link"
                  href="mailto:support@kutumbafc.com"
                >
                  support@kutumbafc.com
                </a>
              </li>
              <li className="info-block__item info-block__item--contact-secondary">
                <div className="df-icon-stack df-icon-stack--bag">
                  <svg role="img" className="df-icon df-icon--bag">
                    <use xlinkHref="soccer-dark/assets/images/icons-basket.svg#bag" />
                  </svg>{" "}
                  <svg role="img" className="df-icon df-icon--bag-handle">
                    <use xlinkHref="soccer-dark/assets/images/icons-basket.svg#bag-handle" />
                  </svg>
                </div>
                <h6 className="info-block__heading">Buy Our Merchandise</h6>
                <a
                  className="info-block__link"
                  href="https://store.kutumbafc.com"
                >
                  KuTumba FC Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Header Secondary / End */}
        {/* Header Primary */}
        <div className="header__primary">
          <div className="container">
            <div className="header__primary-inner">
              {/* Header Logo */}
              <div className="header-logo">
                <a href="index.html">
                  <img
                    src="soccer-dark/assets/images/soccer/logo.png"
                    srcSet="soccer-dark/assets/images/soccer/logo_2x.png 2x"
                    alt="Kutumba"
                    className="header-logo__img"
                  />
                </a>
              </div>
              {/* Header Logo / End */}
              {/* Main Navigation */}
              <nav className="main-nav clearfix">
                <ul className="main-nav__list">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/players"}>Players</Link>
                  </li>
                  {/* <li>
                    <Link to={"/fixtures"}>Fixtures</Link>
                  </li> */}
                  <li>
                    <Link to={"/subscribe"}>Subscribe</Link>
                  </li>
                  <li>
                    <Link to={"/newsroom"}>Newsroom</Link>
                  </li>
                  <li>
                    <Link to={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <a href="https://kutumbafc.medium.com/">Blog</a>
                  </li>
                </ul>
              </nav>
              {/* Main Navigation / End */}
            </div>
          </div>
        </div>
        {/* Header Primary / End */}
      </header>
      {/* Header / End */}

      {props.children}

      <footer className="footer">
        {/* Footer Widgets */}
        <div className="footer-widgets">
          <div className="footer-widgets__inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 ml-5 ml-lg-0">
                  {/* Footer Logo */}
                  <div className="footer-logo footer-logo--has-txt">
                    <img
                      src="soccer-dark/assets/images/soccer/logo-footer.png"
                      srcSet="soccer-dark/assets/images/soccer/logo-footer_2x.png 2x"
                      className="footer-logo__img"
                    />
                    <div className="footer-logo__heading">
                      <h5 className="footer-logo__txt notranslate">
                        Kutumba FC
                      </h5>
                      <span className="footer-logo__tagline">
                        Elric Bros School
                      </span>
                    </div>
                  </div>
                  {/* Footer Logo / End */}
                </div>

                <div className="col-lg-9 ml-5 ml-lg-0 mt-4 mt-md-2 mt-lg-0">
                  <div className="col-sm-6 col-md-3 col-6 p-0 float-left mb-3">
                    <h5 className="mb-4 font-weight-bold text-uppercase">
                      Site
                    </h5>
                    <ul className="list-group footer-links text-left">
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/players"}>Players</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/fixtures"}>Fixtures</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/gallery"}>Gallery</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://store.kutumbafc.com/">Store</a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/newsroom"}>Newsroom</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                    <h5 className="mb-4 font-weight-bold text-uppercase">
                      Company
                    </h5>
                    <ul className="list-group footer-links text-left">
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/about"}>About</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://medium.kutumbafc.com" target="top">
                          Blog
                        </a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to={"/sponsors"}>Sponsors</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h5 className="mb-4 font-weight-bold text-uppercase">
                      Legal
                    </h5>
                    <ul className="list-group footer-links text-left">
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/terms-of-service">Terms</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/privacy-policy">Privacy</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/data-processing-addendum">DPA</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <Link to="/california-consumer-privacy-act">CCPA</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a role="button" onClick={onOpenCookieModal}>
                          Cookies
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                    <h5 className="mb-4 font-weight-bold text-uppercase">
                      Connect
                    </h5>
                    <ul className="list-group footer-links text-left">
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://instagram.com/kutumbafc" target="top">
                          <i className="fab fa-instagram mr-2"></i>Instagram
                        </a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://twitter.com/kutumbafc" target="top">
                          <i className="fab fa-twitter mr-2"></i>Twitter
                        </a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://kutumbafc.medium.com" target="top">
                          <i className="fab fa-medium-m mr-2"></i>Medium
                        </a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://facebook.com/kutumbafc/" target="top">
                          <i className="fab fa-facebook-f mr-2"></i>Facebook
                        </a>
                      </li>
                      <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a
                          href="https://youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA"
                          target="top"
                        >
                          <i className="fab fa-youtube mr-2"></i>YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sponsors */}
          <div className="container">
            <div className="sponsors">
              <h6 className="sponsors-title">Our Sponsors</h6>
              <ul className="sponsors-logos">
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-visa.png" />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-mixspace.png" />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-paypal.png" />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-skrill.png" />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-westernunion.png" />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="https://kutumbafc.com/sponsors" target="_blank">
                    <img src="soccer-dark/assets/images/soccer/sponsor-payoneer.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Sponsors / End */}
        </div>
        {/* Footer Widgets / End */}
        {/* Footer Secondary */}
        <div className="footer-secondary">
          <div className="container">
            <div className="footer-secondary__inner">
              <div className="row">
                <div className="col-lg-6 d-lg-flex">
                  <div className="footer-copyright">
                    <a href="https://kutumbafc.com" className="notranslate">
                      Kutumba FC
                    </a>{" "}
                    <span className="notranslate">&copy; 2021</span> &nbsp; |
                    &nbsp; &nbsp;
                    <a
                      href="https://mixspace.io"
                      target="top"
                      className="notranslate"
                    >
                      MixSpace Internet Services
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 mt-2 mt-lg-0">
                  <ul className="footer-nav footer-nav--right footer-nav--condensed footer-nav--sm">
                    <span
                      role="button"
                      className="text-white d-flex justify-content-center justify-content-lg-end"
                      onClick={onOpenLanguageModal}
                    >
                      <span className="h6">
                        <i className="fas fa-globe-americas mr-2"></i>
                      </span>
                      <span className="mt-1">
                        {localStorage.sitelanguage} - Change Language
                      </span>
                    </span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Secondary / End */}
      </footer>

      <Modal
        open={openLanguageModal}
        onClose={onCloseLanguageModal}
        blockScroll={false}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        showCloseIcon={true}
        closeIcon={closeIcon}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        focusTrapped={false}
        center
      >
        <h5>KuTumba FC is available in multiple languages</h5>
        <div className="container d-flex mt-4 flex-wrap">
          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en")}
            >
              English
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/bn")}
            >
              বাংলা
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/hi")}
            >
              हिंदी
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/kn")}
            >
              ಕನ್ನಡ
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/ml")}
            >
              മലയാളം
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/mr")}
            >
              मराठी
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/ta")}
            >
              தமிழ்
            </button>
          </div>

          <div className="col-6 col-md-4">
            <button
              className="btn btn-primary-inverse w-100 my-2 notranslate"
              onClick={() => changeLanguage("/en/te")}
            >
              తెలుగు
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={openCookieModal}
        onClose={onCloseCookieModal}
        blockScroll={false}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        showCloseIcon={false}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        focusTrapped={false}
        center
      >
        <h5>
          <i className="fas fa-cookie-bite mr-2"></i>Cookie Notice
        </h5>
        <p>
          KuTumba FC uses various types of cookies to provide you with its
          services. You can find a list of all the cookies{" "}
          <a href="https://kutumbafc.com/cookie-policy" className="text-white">
            here
          </a>
          .
        </p>
        <button
          className="btn btn-primary-inverse btn-xs-block"
          onClick={onCloseCookieModal}
        >
          Accept All Cookies
        </button>
        <button
          className="btn btn-primary btn-xs-block ml-md-2 mt-2 mt-md-0"
          onClick={rejectCookies}
        >
          Reject All Cookies
        </button>
      </Modal>
      {/* Footer / End */}
    </div>
  );
}
