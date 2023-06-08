import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import Slider from "react-slick";

export const Home = () => {
  return (
    <div>
      {/* End mobile menu area */}
      {/* Start banner area */}
      <section className="hero-banner-style bg-1 bg-image top-section-gap hero-banner-style-one">
        <div className="hero-banner_inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-8 col-xl-7 col-lg-7">
                <div className="banner-content">
                  <h1 className="mb-6 title" data-aos="fade-up">
                    Collect your <br />
                    <span>digital art NFTs</span>
                  </h1>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    Marketplace for monster character collections <br />
                    non fungible token NFTs.
                  </p>
                  <div className="group-btn mt-8" data-aos="fade-up" data-aos-delay={200}>
                    <a href="explore-filter-sidebar.html" className="btn btn-gradient">
                      <span>
                        <i className="ri-rocket-line" />
                        Explore
                      </span>
                    </a>
                    <a href="create.html" className="btn btn-outline">
                      <span>
                        <i className="ri-edit-line" /> Create
                      </span>
                    </a>
                  </div>
                  <img
                    src="./images/shape/2.png"
                    alt="shape"
                    className="shape shape-2 dark rotate-360"
                  />
                  <img
                    src="./images/shape/3.png"
                    alt="shape"
                    className="shape shape-3 dark rotate-360"
                  />
                  <img
                    src="./images/shape/2-light.png"
                    alt="shape"
                    className="shape shape-2 light rotate-360"
                  />
                  <img
                    src="./images/shape/3-light.png"
                    alt="shape"
                    className="shape shape-3 light rotate-360"
                  />
                </div>
                {/* End banner-content */}
              </div>
              {/* End .col */}
              <div className="col-xxl-4 col-xl-5 col-lg-5">
                <div className="explore-style-two">
                  <Slider
                    className="slider slider-activation-banner-3"
                    infinite={true}
                    slidesToShow={1}
                    autoplay={true}
                    fade={true}
                    speed={500}
                    arrows={false}
                    dots={true}>
                    <a href="product-details.html" className="thumb">
                      <img src="./images/explore/hero/1.jpg" alt="explore-item" />
                    </a>
                    <a href="product-details.html" className="thumb">
                      <img src="./images/explore/hero/2.jpg" alt="explore-item" />
                    </a>
                    <a href="product-details.html" className="thumb">
                      <img src="./images/explore/hero/4.jpg" alt="explore-item" />
                    </a>
                  </Slider>
                  <span className="sticker">Featured Art</span>
                  <div className="explore-content ">
                    <div className="price">
                      <span>Rederve Price</span>
                      <h6>
                        <img src="./images/explore/hero/reward.png" alt="reward" /> 68.4 ETH
                      </h6>
                    </div>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-gradient btn-small rounded-3 ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place a bid
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End banner area */}
      {/* Start nft gallery area */}
      <section className="ptb-120 section-bg-separation-2">
        <div className="section-title text-center">
          <span className="subtitle">Exclusive Assets</span>
          <h2>NFT Gallery</h2>
        </div>
        {/* End .section-title */}
        <Slider
          className="nft-gallery-activation slider slick-pagination-50"
          infinite={true}
          slidesToShow={7}
          slidesToScroll={3}
          centerMode={true}
          centerPadding={1000}
          autoplay={true}
          autoplaySpeed={1000}
          arrows={false}
          adaptiveHeight={true}
          dots={true}
          responsive={[
            {
              breakpoint: 2919,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                centerPadding: "120px",
              },
            },
            {
              breakpoint: 1919,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                centerPadding: "120px",
              },
            },
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3,
                centerPadding: "60px",
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
                centerPadding: "1px",
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                centerMode: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
              },
            },
          ]}>
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/1.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/2.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/3.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/4.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/5.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/6.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/7.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/8.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/9.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/10.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/11.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/12.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/13.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/14.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
          <div className="gallery-thumb">
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/6.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
            <a href="popular-collections.html" className="thumb d-block">
              <div className="inner">
                <img src="./images/gallery/8.jpg" alt="nft gallery" />
              </div>
            </a>
            {/* End .thumb  */}
          </div>
          {/* End Gallery-thumb */}
        </Slider>
      </section>
      {/* End nft gallery area */}
      {/* Start Explore */}
      <section className="pt-120 pb-90 masonary-wrapper-activation">
        <div className="container">
          <div className="d-flex-between flex-wrap">
            <div className="section-title">
              <span className="subtitle">Exclusive Assets</span>
              <h2>Explore</h2>
            </div>
            {/* End .section-title */}
            <div className="button-group default-tab-list isotop-filter flex-wrap filters-button-group d-flex justify-content-start justify-content-lg-end mb-6 ">
              <button data-filter="*" className="is-checked">
                <span className="filter-text">All NFTs</span>
              </button>
              <button data-filter=".cat--1">
                <span className="filter-text">Art</span>
              </button>
              <button data-filter=".cat--2">
                <span className="filter-text">Collectibles</span>
              </button>
              <button data-filter=".cat--3">
                <span className="filter-text">Virtual Worlds</span>
              </button>
              <button data-filter=".cat--4">
                <span className="filter-text">Tranding Cards</span>
              </button>
            </div>
            {/* End isotop-filter */}
          </div>
          <div className="grid-filter-wrapper mesonry-list">
            <div className="resizer" />
            <div className="grid-item cat--4">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    {" "}
                    <img src="./images/explore/28.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>49</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">BruceTheGoose.Eth™</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Zuckerberg</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--4">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="./images/explore/29.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>12</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">Dead Rover Club</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Zuckerberg</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--1 cat--2 ">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="./images/explore/27.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>19</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">SudsyPanda</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Jacson Rio</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--3">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="./images/explore/6.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>08</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">TrapMonkie 3D</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Fuliani</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--1 cat--4">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    {" "}
                    <img src="./images/explore/16.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>55</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">TrapMonkie - Meditation</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Kartik</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--2 cat--3">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="./images/explore/20.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>25</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">Illustrations</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Richardson</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--4">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    {" "}
                    <img src="./images/explore/7.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>14</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">Collectibeles</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Mark Keni</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
            <div className="grid-item cat--1 cat--3">
              <div className="explore-style-one">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="./images/explore/30.jpg" alt="nft live auction thumbnail" />
                  </a>
                  <button className="reaction-btn">
                    <i className="ri-heart-fill" />
                    <span>32</span>
                  </button>
                  {/* End .reaction-count */}
                </div>
                {/* End .thumb */}
                <div className="content">
                  <div className="header d-flex-between pt-4 pb-3">
                    <h3 className="title">
                      <a href="product-details.html">Virtual Worlds</a>
                    </h3>
                    <div className="more-dropdown ">
                      <i className="ri-more-fill" data-bs-toggle="dropdown" />
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .header */}
                  <div className="product-share-wrapper">
                    <div className="profile-share d-flex-center">
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Banuri Bari">
                        <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark Keni">
                        <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                      </a>
                      <a
                        href="authors.html"
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Diago Smith">
                        <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                      </a>
                      <a className="more-author-text" href="#" tabIndex={0}>
                        20+ People Place Bit
                      </a>
                    </div>
                  </div>
                  {/* End product-share-wrapper */}
                  <div className="product-owner py-4 d-flex-between">
                    <span className="bid-owner">
                      Owned By{" "}
                      <strong>
                        <a href="author-profile.html">Banuri</a>
                      </strong>
                    </span>
                    <span className="biding-price d-flex-center">
                      <i className="ri-arrow-up-line" />
                      76.4 ETH
                    </span>
                  </div>
                  {/* End .product-owner */}
                  <div className="action-wrapper d-flex-between pt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#bid_history"
                      className="history d-flex-center">
                      <i className="ri-history-line" />
                      View History
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBit"
                      className="btn btn-outline btn-small ">
                      <span>
                        <i className="ri-shopping-bag-line" /> Place Bid
                      </span>
                    </a>
                  </div>
                  {/* action-wrapper */}
                </div>
                {/* End .content */}
              </div>
            </div>
            {/* End .explore-style-one */}
          </div>
          {/* End .grid-filter-wrapper */}
        </div>
        {/* End .container */}
      </section>
      {/* End Explore */}
      {/* Start Top Seller */}
      <section className="section-bg-separation-2 ptb-120">
        <div className="container">
          <div className="d-flex-between">
            <div className="section-title">
              <span className="subtitle">Creators</span>
              <h2>Top Sellers</h2>
            </div>
            {/* End .section-title */}
            <div className="text-large">
              <a href="all-sellers-2.html">Sell All Sellers</a>
            </div>
          </div>
          {/* End .d-flex-between */}
          <div className="slider top-seller-activation-1 slick-gutter-15 slick-arrow-between ">
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/1.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Oliver</a>
              </h4>
              <span className="price">214.6 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/2.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Hasina</a>
              </h4>
              <span className="price">78.1 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/3.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Monalisa</a>
              </h4>
              <span className="price">24.6 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/4.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">James Tonny</a>
              </h4>
              <span className="price">23 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/5.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Jacklin</a>
              </h4>
              <span className="price">45.6 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/1.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Belly Dia</a>
              </h4>
              <span className="price">22.6 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/4.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Jankar Jio</a>
              </h4>
              <span className="price">214.6 ETH</span>
            </div>
            {/* End .col */}
            <div className="top-seller-style-one">
              <a href="author-profile.html" className="thumb mb-2">
                <img src="./images/top-seller/5.png" alt="top sellter" />
                <i className="ri-check-line" />
              </a>
              <h4 className="title pb-1">
                <a href="author-profile.html">Kerion Ara</a>
              </h4>
              <span className="price">214.6 ETH</span>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Top Seller */}
      {/* Start Live Auction */}
      <section className="ptb-120 live-auction">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Auctions</span>
            <h2>Live Auctions</h2>
          </div>
          {/* End .section-title */}
        </div>
        {/* End .container */}
        <div className="slider slick-activation-01 slick-gutter-15 slick-pagination-50  slick-arrow-top">
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/4.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-08-10"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>08</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">TrapMonkie 3D</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Fuliani</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/5.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-06-13"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>55</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">TrapMonkie - Meditation</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Kartik</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/3.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-06-14"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>25</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">Illustrations</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Richardson</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/7.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-07-02"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>14</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">Collectibeles</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Mark Keni</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/12.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-07-06"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>32</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">Virtual Worlds</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Banuri</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/1.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-06-09"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>49</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">BruceTheGoose.Eth™</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Zuckerberg</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/2.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-07-09"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>12</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">Dead Rover Club</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Zuckerberg</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
          <div className="explore-style-one">
            <div className="thumb">
              <a href="product-details.html">
                <img src="./images/explore/6.jpg" alt="nft live auction thumbnail" />
              </a>
              <div className="countdown btn btn-gradient btn-small" data-date="2022-06-07"></div>
              {/* End .count-down */}
              <button className="reaction-btn">
                <i className="ri-heart-fill" />
                <span>19</span>
              </button>
              {/* End .reaction-count */}
            </div>
            {/* End .thumb */}
            <div className="content">
              <div className="header d-flex-between pt-4 pb-3">
                <h3 className="title">
                  <a href="product-details.html">SudsyPanda</a>
                </h3>
                <div className="more-dropdown ">
                  <i className="ri-more-fill" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        New bid
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refresh Metadata
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Share
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .header */}
              <div className="product-share-wrapper">
                <div className="profile-share d-flex-center">
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Banuri Bari">
                    <img src="./images/explore/avatar/1.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Mark Keni">
                    <img src="./images/explore/avatar/2.png" alt="Nft_Profile" />
                  </a>
                  <a
                    href="authors.html"
                    className="avatar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Diago Smith">
                    <img src="./images/explore/avatar/3.png" alt="Nft_Profile" />
                  </a>
                  <a className="more-author-text" href="#" tabIndex={0}>
                    20+ People Place Bit
                  </a>
                </div>
              </div>
              {/* End product-share-wrapper */}
              <div className="product-owner py-4 d-flex-between">
                <span className="bid-owner">
                  Owned By{" "}
                  <strong>
                    <a href="author-profile.html">Jacson Rio</a>
                  </strong>
                </span>
                <span className="biding-price d-flex-center">
                  <i className="ri-arrow-up-line" />
                  76.4 ETH
                </span>
              </div>
              {/* End .product-owner */}
              <div className="action-wrapper d-flex-between pt-4">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bid_history"
                  className="history d-flex-center">
                  <i className="ri-history-line" />
                  View History
                </a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBit"
                  className="btn  btn-black btn-small ">
                  <span>
                    <i className="ri-shopping-bag-line" /> Place Bid
                  </span>
                </a>
              </div>
              {/* action-wrapper */}
            </div>
            {/* End .content */}
          </div>
          {/* End .explore-style-one */}
        </div>
        {/* End .slick-activation-01 */}
      </section>
      {/* End Live Auction */}
      {/* Start Popular Collection */}
      <section className="section-bg-separation-2 ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Browse by category</span>
            <h2>Popular Collections</h2>
          </div>
          {/* End .section-title */}
          <div className="slider popular-collection-active slick-gutter-15 slick-arrow-betwee">
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/3.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/1.png" alt="popular collection" />
                  <img src="./images/popular/small/2.png" alt="popular collection" />
                  <img src="./images/popular/small/3.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Trading Cards</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">538 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/11.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/10.png" alt="popular collection" />
                  <img src="./images/popular/small/11.png" alt="popular collection" />
                  <img src="./images/popular/small/12.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Virtual worlds</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">1039 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>41</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/12.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/13.png" alt="popular collection" />
                  <img src="./images/popular/small/7.png" alt="popular collection" />
                  <img src="./images/popular/small/14.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Collectibles</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">3654 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>25</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/10.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/7.png" alt="popular collection" />
                  <img src="./images/popular/small/8.png" alt="popular collection" />
                  <img src="./images/popular/small/9.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Collectibles</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">3654 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>25</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/1.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/1.png" alt="popular collection" />
                  <img src="./images/popular/small/2.png" alt="popular collection" />
                  <img src="./images/popular/small/3.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Trading Cards</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">538 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>32</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
            <div className="popular-collection-style-one">
              <a href="popular-collections.html">
                <div className="large-thumbnail">
                  {" "}
                  <img src="./images/popular/2.jpg" alt="popular collection" />
                </div>
                {/* End .large-thumbnail */}
                <div className="small-thumb-group">
                  <img src="./images/popular/small/4.png" alt="popular collection" />
                  <img src="./images/popular/small/5.png" alt="popular collection" />
                  <img src="./images/popular/small/6.png" alt="popular collection" />
                </div>
                {/* End .small-thumb-group */}
              </a>
              <div className="content d-flex-between pt-3">
                <div className="inner">
                  <h4 className="title ">
                    <a href="popular-collections.html">Virtual worlds</a>
                  </h4>
                  <span>
                    <a href="explore-filter-sidebar.html">1039 Items</a>
                  </span>
                </div>
                <button className="reaction-btn position-static ">
                  <i className="ri-heart-fill" />
                  <span>41</span>
                </button>
              </div>
            </div>
            {/* End .popular-collection-style-one */}
          </div>
          {/* End .popular-collection-active */}
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Collection */}
      {/* Start Setup Wallet */}
      <section className="wallet-setup ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">HOW IT WORKS</span>
            <h2>Create &amp; sell your NFTs</h2>
          </div>
          {/* End .section-title */}
          <div className=" slider wallet-activation slick-arrow-between slick-gutter-15">
            <div className="card-block-style-one">
              <img className="thumb mb-5" src="./images/icon/1.png" alt="wallet" />
              <h3 className="title mb-3">set up your wallet</h3>
              <p>
                There are a few things worth doing before creating your first NFTs. In the image
                above, you’ll not personalized banner. To upload yours, press the pencil icon in the
                top right.
              </p>
            </div>
            {/* End .card-block-style-one */}
            <div className="card-block-style-one">
              <img className="thumb mb-5" src="./images/icon/2.png" alt="wallet" />
              <h3 className="title mb-3">Create your collection</h3>
              <p>
                There are a few things worth doing before creating your first NFTs. In the image
                above, you’ll not personalized banner. To upload yours, press the pencil icon in the
                top right.
              </p>
            </div>
            {/* End .card-block-style-one */}
            <div className="card-block-style-one">
              <img className="thumb mb-5" src="./images/icon/3.png" alt="wallet" />
              <h3 className="title mb-3">List them for sale</h3>
              <p>
                There are a few things worth doing before creating your first NFTs. In the image
                above, you’ll not personalized banner. To upload yours, press the pencil icon in the
                top right.
              </p>
            </div>
            {/* End .card-block-style-one */}
            <div className="card-block-style-one">
              <img className="thumb mb-5" src="./images/icon/3.png" alt="wallet" />
              <h3 className="title mb-3">List them for sale</h3>
              <p>
                There are a few things worth doing before creating your first NFTs. In the image
                above, you’ll not personalized banner. To upload yours, press the pencil icon in the
                top right.
              </p>
            </div>
            {/* End .card-block-style-one */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Setup Wallet */}
    </div>
  );
};

export default Home;
