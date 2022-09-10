import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './cookie-policy.css'

const CookiePolicy = (props) => {
  return (
    <div className="cookie-policy-container">
      <Helmet>
        <title>Cookie-Policy - Robozon</title>
        <meta name="description" content="Robozon" />
        <meta property="og:title" content="Cookie-Policy - Robozon" />
        <meta property="og:description" content="Robozon" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/robozon-logo-1500h.png"
        image_src1="/playground_assets/robozon-logo-1500h.png"
      ></Navbar>
      <div className="cookie-policy-banner">
        <h1 className="cookie-policy-text">Cookie Policy</h1>
        <span className="cookie-policy-text01">
          <span>
            We use cookies and similar technologies to personalize and improve
            your experience when you use our website, including:
          </span>
          <br></br>
          <span>• keeping track of your shopping basket;</span>
          <br></br>
          <span>• allowing you to login to your account;</span>
          <br></br>
          <span>• remembering your preferences;</span>
          <br></br>
          <span>• customizing the website to be more relevant to you; and</span>
          <br></br>
          <span>
            • helping us make our website better by telling us what users like
            and don’t like.
          </span>
          <br></br>
          <span>
            This document explains what these technologies are, why we use them
            and your rights to control our use of them. This Cookie Policy is
            incorporated into our Privacy Policy. If you continue to browse the
            site without changing your settings, we’ll assume that you are happy
            to receive all cookies.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span className="cookie-policy-text17">1. What are cookies?</span>
          <br></br>
          <span>
            A “cookie” is a small text file that’s stored on your device when
            you visit a website. All of your devices have different cookie
            settings. Cookies cannot be used to run programs or deliver viruses
            to your device.
          </span>
          <br></br>
          <span>
            Some cookies are deleted when you close down your browser. Others
            remain on your device until they expire or you delete them from your
            cache. These enable us to remember things about you as a returning
            visitor.
          </span>
          <br></br>
          <span className="cookie-policy-text23">
            2. Why do we use cookies and other tracking technologies?
          </span>
          <br></br>
          <span>
            We use cookies and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our website
            to operate, and we refer to these as “strictly necessary” cookies.
            Other cookies enable us and the third parties we work with to track
            and target the interests of visitors to our website, and we refer to
            these as “performance” and “functionality” cookies. For example, we
            use cookies to tailor content and information that we may send or
            display to you and otherwise personalize your experience while
            interacting with our website and to otherwise improve the
            functionality of our services. Finally, third parties serve cookies
            through our website for advertising, analytics, and other purposes.
            This is described in more detail below.
          </span>
          <br></br>
          <br></br>
          <span className="cookie-policy-text28">
            3. What categories of cookies may be used?
          </span>
          <br></br>
          <span>
            The specific types of first- and third-party cookies served through
            our website and the purposes they perform are described in further
            detail below:
          </span>
          <br></br>
          <span>Strictly necessary cookies</span>
          <br></br>
          <span>
            We need to use these cookies to make the website work and allow you
            to use some of its features, such as tracking page navigation to
            assist with linking back to different sections, signing up to a
            newsletter and enhancing security on site when submitting forms.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            You can set your browser to block or alert you about these (or any
            other) cookies, but some or all of the site won’t work.
          </span>
          <br></br>
          <span>
            If you really hate cookies this much, it’s probably best you close
            the website and clear all your cookies. In fact, the web probably
            isn’t for you… Physical shops still exist, and you can be confident
            of your privacy there. Well, apart from people recognizing you. And
            Security cameras. Lots of security cameras. But apart from that
            you’re all good.
          </span>
          <br></br>
          <span>Performance cookies</span>
          <br></br>
          <span>
            These cookies are all about tracking site performance – we use them
            to do stuff like count visits, provide debugging information and see
            where visitors are coming from.
          </span>
          <br></br>
          <span>
            Typically, these cookies just contain a unique ID which allows us
            and 3rd party services to recognize you as you move about the site
            and interact with it. We (and 3rd party services) record all those
            interactions and tie them together using the unique IDs in these
            cookies.
          </span>
          <br></br>
          <span>
            If you turn these cookies off it’ll hamper our efforts, but nothing
            critical to you using the site should break.
          </span>
          <br></br>
          <span>Functional cookies</span>
          <br></br>
          <span>
            These cookies are used to deliver enhanced functionality and
            features which we think are jolly valuable, but aren’t absolutely
            critical to making the website work (as in, you should still be able
            to buy stuff with these turned off), and they’re set both by us and
            3rd party service we use.
          </span>
          <br></br>
          <span>
            You can turn these off, but some things won’t work or won’t work as
            well.
          </span>
          <br></br>
          <span>Social Media cookies</span>
          <br></br>
          <span>
            These cookies are set by social media services which appear on the
            site to enable you to share our content with your friends and
            networks. They are capable of tracking your browser across other
            sites and building up a profile of your interests. This may impact
            the content and messages you see on other websites you visit.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            If you do not allow these cookies, you may not be able to use or see
            these sharing tools.
          </span>
          <br></br>
          <span>Other tracking technologies</span>
          <br></br>
          <span>
            We and our third-party partners may use other, similar technologies
            from time to time like web beacons, pixels (or “clear gifs”) and
            other tracking technologies. These are tiny graphics files that
            contain a unique identifier that enable us to recognize when someone
            has visited our website or, in the case of web beacons, opened an
            e-mail that we have sent them. This allows us, for example, to
            monitor the traffic patterns of users within our website, to
            understand whether you have come to our website from an online
            advertisement displayed on a third-party website, to serve targeted
            advertisements to you and others like you, to improve site
            performance, and to measure the success of marketing campaigns.
            While you may not have the ability to specifically reject or disable
            these tracking technologies, in many instances these technologies
            are reliant on cookies to function properly; accordingly, in those
            instances, declining cookies will impair functioning of these
            technologies.
          </span>
          <br></br>
          <span>
            Finally, please note that third parties (including providers of
            external services like web traffic analysis services) may also use
            cookies. Google also places and reads cookies on the browsers of
            users of our website (and may also use web beacons and similar
            technologies) to collect information relevant to the Google
            Certified Shops Programme. We have no control over these third
            parties.
          </span>
          <br></br>
          <br></br>
          <span className="cookie-policy-text67">
            4. How can I control cookies?
          </span>
          <br></br>
          <span>
            You have the right to decide whether to accept or reject cookies.
          </span>
          <br></br>
          <span>
            Browser controls: You can set or amend your web browser controls to
            accept or refuse cookies. If you choose to reject cookies, you may
            still use our website though your access to some functionality and
            areas of our website may be restricted.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Disabling most Interest Based Advertising: Most advertising networks
            offer you a way to opt out of Interest Based Advertising.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Mobile Advertising: You can opt out of having your mobile
            advertising identifiers used for certain types of Interest Based
            Advertising, including those performed by us, by accessing the
            settings in your Apple or Android mobile device and following the
            most recent published instructions. If you opt out, we will remove
            all data about you and no further data collection or tracking will
            occur. The random ID we (or our third-party partners) had previously
            assigned to you will also be removed. This means that if at a later
            stage, you decide to opt-in, we will not be able to continue and
            track you using the same ID as before, and you will for all
            practical purposes be a new user to our system
          </span>
          <br></br>
          <br></br>
          <span className="cookie-policy-text78">
            5. How often will you update this Cookie Policy?
          </span>
          <br></br>
          <span>
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span className="cookie-policy-text84">
            6. Where can I get further information?
          </span>
          <br></br>
          <span>
            If you have any questions about our use of cookies or other
            technologies, please email us at:
          </span>
          <br></br>
          <span>
            Email:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Tel:</span>
          <br></br>
        </span>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default CookiePolicy
