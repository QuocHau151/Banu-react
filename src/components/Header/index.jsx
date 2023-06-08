import React from "react";

export default function Header() {
  return (
    <header className="ib-header header-default header-fixed header--sticky fluid-header">
      <div className="header-inner d-flex align-items-center justify-content-between">
        <div className="header-left d-flex align-items-center">
          <div className="logo-wrapper">
            <a href="index.html" className="logo logo-light">
              <img src="./images/logo-white.png" alt="brand" />{" "}
            </a>
            <a href="index.html" className="logo logo-dark">
              <img src="./images/logo-dark.png" alt="brand" />{" "}
            </a>
          </div>
          {/* End .logo-wrapper */}
          <div className="mainmenu-wrapper">
            <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
              {/* Start Mainmanu Nav */}
              <ul className="mainmenu">
                <li className="has-dropdown has-menu-child-item">
                  <a className="active" href="index-2.html">
                    Home
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="index.html" className="active">
                        Home Style One{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Style Two</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Style Three</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Style Four </a>
                    </li>
                    <li>
                      <a href="index-5.html">Home Style Five</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home Style Six</a>
                    </li>
                    <li>
                      <a href="index-7.html">
                        Home Style Seven<span className="new">(New)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown has-menu-child-item">
                  <a href="#">Explore</a>
                  <ul className="submenu">
                    <li>
                      <a href="explore-filter.html">Explore Filter</a>
                    </li>
                    <li>
                      <a href="explore-isotop.html">Explore Isotop</a>
                    </li>
                    <li>
                      <a href="explore-carousel.html">Explore Carousel</a>
                    </li>
                    <li>
                      <a href="explore-filter-sidebar.html">Explore Filter Sidebar</a>
                    </li>
                    <li>
                      <a href="live-auction-1.html">Live Auction 1</a>
                    </li>
                    <li>
                      <a href="live-auction-2.html">Live Auction 2</a>
                    </li>
                    <li>
                      <a href="live-auction-3.html">Live Auction 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="activity.html">Activity</a>
                </li>
                <li className="has-dropdown has-menu-child-item">
                  <a href="#">Community</a>
                  <ul className="submenu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown has-menu-child-item">
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="product-details.html">Item Details</a>
                    </li>
                    <li>
                      <a href="authors.html">Authors</a>
                    </li>
                    <li>
                      <a href="author-profile.html">Author Profile</a>
                    </li>
                    <li>
                      <a href="all-sellers.html">All Sellers</a>
                    </li>
                    <li>
                      <a href="all-sellers-2.html">All Sellers 2</a>
                    </li>
                    <li>
                      <a href="popular-collections.html">Popular Collections</a>
                    </li>
                    <li>
                      <a href="popular-collections-2.html">Popular Collections-2</a>
                    </li>
                    <li>
                      <a href="wallet.html">Wallet Connect</a>
                    </li>
                    <li>
                      <a href="create.html">Create Item</a>
                    </li>
                    <li>
                      <a href="notification.html">Notification</a>
                    </li>
                    <li>
                      <a href="signin.html">Sign In</a>
                    </li>
                    <li>
                      <a href="signin-2.html">Sign In 2</a>
                    </li>
                    <li>
                      <a href="forgot-password.html">Forgot Password</a>
                    </li>
                    <li>
                      <a href="signup.html">SignUp</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              {/* End Mainmanu Nav */}
            </nav>
          </div>
        </div>
        {/* End .header-left */}
        <div className="header-right d-flex align-items-center">
          <ul className="header-right-inner">
            <li className=" d-none d-lg-block">
              <form action="#" className="search-bar">
                <input
                  type="text"
                  name="search"
                  placeholder="Collection, item or user"
                  id="search"
                />
                <button className="search-btn" type="submit">
                  {" "}
                  <i className="ri-search-line" />
                </button>
              </form>
            </li>
            {/* End .search-bar */}
            <li className="setting-option d-block  d-lg-none ">
              <div className="icon-box search-mobile-icon">
                <button>
                  <i className="ri-search-line" />
                </button>
              </div>
              <form
                id="header-search-1"
                action="#"
                method="GET"
                className="large-mobile-blog-search search-bar">
                <input
                  type="text"
                  name="search"
                  placeholder="Collection, item or user"
                  id="search_2"
                />
                <button className="search-btn" type="submit">
                  {" "}
                  <i className="ri-search-line" />
                </button>
              </form>
            </li>
            {/* End .search-mobile-icon */}
            <li className="wallet-button">
              {" "}
              <a href="wallet.html" className="btn btn-gradient btn-small">
                <span>
                  <i className="ri-wallet-3-line" />
                  Connect
                </span>
              </a>
            </li>
            {/* End .wallet-button */}
            <li className="setting-option mobile-menu-bar d-block d-xl-none">
              <button className="hamberger-button">
                <i className="ri-menu-2-fill" />
              </button>
            </li>
            {/* End .mobile-menu-bar */}
            <li className="avatar-info">
              {" "}
              <a href="#">
                <img src="./images/avatar/user.png" alt="user avatar" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="author-profile.html">
                    <i className="ri-user-line" /> Profile
                  </a>
                </li>
                <li>
                  <a href="create.html">
                    <i className="ri-edit-line" /> Create Item
                  </a>
                </li>
                <li>
                  <a href="authors.html">
                    <i className="ri-layout-grid-line" />
                    Authors
                  </a>
                </li>
                <li>
                  <a href="signin.html">
                    <i className="ri-logout-box-r-line" />
                    Sign in
                  </a>
                </li>
              </ul>
            </li>
            {/* End .avatar-info */}
            <li>
              <label className="theme-switcher-label d-flex" htmlFor="theme-switcher">
                <input type="checkbox" className="theme-switcher" id="theme-switcher" />
                <div className="switch-handle">
                  <i className="ri-sun-line light-text" />
                  <i className="ri-moon-line dark-text" />
                </div>
              </label>
            </li>
            {/* End Dark & Light Swither */}
          </ul>
        </div>
        {/* End .header-left */}
      </div>
    </header>
  );
}
