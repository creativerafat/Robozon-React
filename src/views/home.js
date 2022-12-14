import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import FeatureCard3 from '../components/feature-card3'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Robozon</title>
        <meta name="description" content="Robozon" />
        <meta property="og:title" content="Robozon" />
        <meta property="og:description" content="Robozon" />
      </Helmet>
      <div className="home-navbar-container">
        <header data-role="Header" className="navigation-container">
          <Link to="/">
            <img
              alt="ROBOZON"
              src="/playground_assets/robozon-logo-1500h.png"
              loading="eager"
              className="home-image"
            />
          </Link>
          <div className="home-nav">
            <nav className="home-nav1">
              <Link to="/" href="/" className="home-navlink1 navbar-link">
                Home
              </Link>
              <a href="#about" className="home-link navbar-link">
                About
              </a>
              <a href="#downloads" className="home-link1 navbar-link">
                Download
              </a>
              <a href="#tutorials" className="home-link2 navbar-link">
                Tutorials
              </a>
            </nav>
          </div>
          <div data-type="BurgerMenu" className="navigation-burger-menu">
            <svg id="menu-bar" viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="navigation-mobile-menu">
            <div className="home-nav2">
              <div className="home-container1">
                <img
                  alt="ROBOZON"
                  src="/playground_assets/robozon-logo-1500h.png"
                  className="home-image1"
                />
                <div data-type="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
              <button className="home-primary-btn button-primary button">
                Downlaod
              </button>
            </div>
            <div className="home-social-media">
              <span className="home-text">Follow us</span>
              <div className="home-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                  <path d="M64 384h192v576h-192v-576z"></path>
                  <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                  <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                  <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
                </svg>
              </div>
            </div>
          </div>
          <a
            href="https://chrome.google.com/webstore/category/extensions"
            target="_blank"
            rel="noreferrer noopener"
            className="home-primary-btn1 button-primary button"
          >
            Download
          </a>
          <div id="mobilemenu" className="home-menu-mobile">
            <button id="close-btn" type="button" className="button home-button">
              X
            </button>
            <ul className="list home-ul">
              <li className="list-item home-li">
                <Link to="/" className="home-navlink2">
                  Home
                </Link>
              </li>
              <li className="list-item home-li1">
                <a href="#tutorials" className="home-link3">
                  Tutorials
                </a>
              </li>
              <li className="list-item home-li2">
                <a href="#downloads" className="home-link4">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-content-container">
              <h1 className="home-text01">
                Easy, Intuitive Automatic Relay Loadboard
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="home-text02 content">
                Refresher Instantly Updates to Give YOU the Best Advantage in
                the Industry
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/211-600h.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width2 max-content-container">
            <h1 className="home-text03">FULLY INDEPENDENT FEAUTURE</h1>
            <h1 className="home-text04">
              Jump Ahead of Other Truckers to Instantly Find and Book
              Amazon&apos;s BEST Loads - Soar Income with the Most Profitable
              Routes
            </h1>
            <div className="home-cards-container">
              <FeatureCard
                heading="Lighting Speed"
                image_src="/playground_assets/rocket-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="See how &gt;"
                heading="Mobile Accessibility"
                image_src="/playground_assets/screenshot_4-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Nonstop Productivity"
                image_src="/playground_assets/fast-time-200h.png"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div id="about" className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/group%207-1100w.png"
                className="home-image3"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text05">
                Its built-in randomizer feature adjusts Flash Relay refresh rate
                to mirror a human dispatcher.
              </h1>
              <span className="home-text06">
                Features
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07 list-item">
                <span>New Booked Load Alarm &amp; Highlighted</span>
                <br></br>
              </span>
              <span className="home-text10 list-item">
                Missed Load Alarm
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text11 list-item">
                3 Type Search Mode (Search Only, Price Change Alert, Auto Book)
              </span>
              <span className="home-text12 list-item">
                AI Refresher &amp; Randomizer
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13 list-item">
                Multi-Load AutoBook into Single Tab
              </span>
              <span className="home-text14 list-item">
                Fully Automated (Not depends of Amazon filter)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text15 list-item">
                Multi Customizable filters
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text16 list-item">
                Auto Stop &amp; Start When detect too many request
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div id="tutorials" className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text17">Tutorials</h1>
            </div>
            <iframe
              src="https://www.youtube.com/embed/LNC9cv-LYpA?controls=0"
              className="home-iframe"
            ></iframe>
            <div className="home-features">
              <h1 className="home-text18">Robozon Feature Explanation</h1>
              <div className="home-container3">
                <FeatureCard3
                  title="New Booked Load Alarm &amp; Highlighted "
                  description="  Highlighted and Sound Alarm on successful booked load "
                  rootClassName="rootClassName"
                ></FeatureCard3>
                <FeatureCard3
                  title="Missed Load Alarm"
                  description="Alarm for missed load "
                  rootClassName="rootClassName3"
                ></FeatureCard3>
                <FeatureCard3
                  title="Multi-Load Autobook Into One Tab "
                  description="Get exclusive features not found elsewhere. Looking for a 2-3 driver load? Other apps force you to open 3 tabs, then juggle between them. "
                  rootClassName="rootClassName5"
                ></FeatureCard3>
                <FeatureCard3
                  title="Randomizer &amp; Refresh"
                  description="Acts like an experienced human dispatcher with adjustable refresh rate to always show the newest available loads. "
                  rootClassName="rootClassName1"
                ></FeatureCard3>
              </div>
              <div className="home-container4">
                <FeatureCard3
                  title="Whitelist &amp; Exclude Location Filter "
                  description="Customize to only show selected state, city, zip code, warehouse. When the right combination comes available, the app alerts you the moment the load is posted."
                  rootClassName="feature-card3-root-class-name2"
                ></FeatureCard3>
                <FeatureCard3
                  title="Exclude Recovery Load "
                  description="Recovery Load Trip ID???s always End with ITR ex 11178VT5G_ITR, 111VH4KQ2_ITR, it will not book if any tour Load ID end with ITR."
                  rootClassName="feature-card3-root-class-name6"
                ></FeatureCard3>
                <FeatureCard3
                  title="Booked Load Count Monthly &amp; Total"
                  description="Small dashboard shows how many loads booked for current and previous month. "
                  rootClassName="feature-card3-root-class-name7"
                ></FeatureCard3>
                <FeatureCard3
                  title="Min Stem Time"
                  description="Robozon will not book a load if it departs time earlier than Min Stem time, to make sure driver has enough time to arrive to destination."
                  rootClassName="feature-card3-root-class-name4"
                ></FeatureCard3>
              </div>
            </div>
          </div>
        </div>
        <div id="downloads" className="home-section-six section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text19">
                <span>Download Now</span>
                <br></br>
              </h1>
              <span className="home-text22">
                <span className="content-Light">
                  Go to App Store, install our
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  extension
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="content-Light">and enjoy!</span>
              </span>
              <div className="home-input-container">
                <button
                  href="https://chrome.google.com/webstore/category/extensions"
                  type="button"
                  className="home-button1 button-primary button"
                >
                  <span>
                    <span>Download Now</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/screenshot_1-1200w.png"
                className="home-image4"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Home
