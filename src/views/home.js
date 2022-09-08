import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
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
        <meta property="og:title" content="Robozon" />
      </Helmet>
      <Navbar
        image_src1="/playground_assets/robozon-logo-1500h.png"
        image_alt="ROBOZON"
        image_alt1="ROBOZON"
        PrimaryBtn="/"
      ></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                Easy, Intuitive Automatic Relay Loadboard
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="home-text01 content">
                Refresher Instantly Updates to Give YOU the Best Advantage in
                the Industry
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/launch-600w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h1 className="home-text02">
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
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/group%207-1100w.png"
                className="home-image1"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text03">
                Its built-in randomizer feature adjusts Flash Relay refresh rate
                to mirror a human dispatcher.
              </h1>
              <span className="home-text04">
                Features
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text05">
                <span> New Booked Load Alarm &amp; Highlighted</span>
                <br></br>
                <span>
                   Missed Load Alarm
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                   3 Type Search Mode (Search Only, Price Change Alert, Auto
                  Book)
                </span>
                <br></br>
                <span>
                   AI Refresher &amp; Randomizer
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span> Multi-Load AutoBook into Single Tab</span>
                <br></br>
                <span>
                   Fully Automated (Not depends of Amazon filter)
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                   Multi Customizable filters
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                   Auto Stop &amp; Start When detect too many request
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text22">Tutorials</h1>
            </div>
            <iframe
              src="https://www.youtube.com/embed/LNC9cv-LYpA?controls=0"
              className="home-iframe"
            ></iframe>
            <div className="home-features">
              <h1 className="home-text23">Robozon Feature Explanation</h1>
              <div className="home-container1">
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
              <div className="home-container2">
                <FeatureCard3
                  title="Whitelist &amp; Exclude Location Filter "
                  description="Customize to only show selected state, city, zip code, warehouse. When the right combination comes available, the app alerts you the moment the load is posted."
                  rootClassName="feature-card3-root-class-name2"
                ></FeatureCard3>
                <FeatureCard3
                  title="Exclude Recovery Load "
                  description="Recovery Load Trip ID’s always End with ITR ex 11178VT5G_ITR, 111VH4KQ2_ITR, it will not book if any tour Load ID end with ITR."
                  rootClassName="feature-card3-root-class-name6"
                ></FeatureCard3>
                <FeatureCard3
                  title="Booked Load Count Monthly &amp; Total"
                  description="Small dashboard shows how many loads booked for current and previous month. "
                  rootClassName="feature-card3-root-class-name7"
                ></FeatureCard3>
                <FeatureCard3
                  title="8)\tMin Stem Time"
                  description="Robozon will not book a load if it departs time earlier than Min Stem time, to make sure driver has enough time to arrive to destination."
                  rootClassName="feature-card3-root-class-name4"
                ></FeatureCard3>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-six section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text24">
                <span>Download Now</span>
                <br></br>
              </h1>
              <span className="home-text27 content-Light">
                Go to App Store, install Feedbox and start changing your reading
                habbits today!
              </span>
              <div className="home-input-container">
                <button className="home-button button-primary button">
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
                src="/playground_assets/screenshot_1-200h.png"
                className="home-image2"
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
