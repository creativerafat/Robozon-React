import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>PrivacyPolicy - Robozon</title>
        <meta name="description" content="Robozon" />
        <meta property="og:title" content="PrivacyPolicy - Robozon" />
        <meta property="og:description" content="Robozon" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/robozon-logo-1500h.png"
        image_src1="/playground_assets/robozon-logo-1500h.png"
      ></Navbar>
      <div className="privacy-policy-banner">
        <h1 className="privacy-policy-text">Privacy Policy</h1>
        <span className="privacy-policy-text01">
          <span className="privacy-policy-text02">
            Our Policy regarding data usage
          </span>
          <br></br>
          <span>
            We are committed to respecting and protecting the privacy rights of
            our users, and we created this Privacy Policy to give you notice of
            how your individual information will (and will not) be used by us.
            This Privacy Policy provides information on our policies and
            procedures regarding the use and disclosure of such information we
            receive from you. By using or accessing any of the Services in any
            manner, you acknowledge that you accept the practices and policies
            outlined in this Privacy Policy, and you hereby consent that we will
            use and process your information in the following ways. This Privacy
            Policy may be updated from time to time. We will notify you of any
            material changes by posting the new Privacy Policy on this website.
            You are advised to consult this Privacy Policy regularly for any
            changes.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-policy-text07">
            How do we use individual information?
          </span>
          <br></br>
          <span>
            We use individual information mainly to verifying the license as
            stated in permissions. We do not sell or share any Personally
            Identifiable Information or other information about our users to any
            third parties. If you contact us by email, we may keep a record of
            your contact information and correspondence, and may use your email
            address, and any information that you provide to us in your message,
            to respond to you.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-policy-text12">
            What information do we collect and how do we collect it?
          </span>
          <br></br>
          <span>
            We do not collect nor store any personally identifiable user
            information. We may use your data to verify that you have a valid
            license as stated in permissions.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-policy-text17">
            How do we store your personal information?
          </span>
          <br></br>
          <span>
            We do not store any user information in any external storage. We
            utilize browser storage for caching license information to reduce
            the number of calls we make to the identity server. Once extension
            is removed, information will automatically be destroyed.
          </span>
          <br></br>
        </span>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default PrivacyPolicy
