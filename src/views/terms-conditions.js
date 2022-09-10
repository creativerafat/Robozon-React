import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './terms-conditions.css'

const TermsConditions = (props) => {
  return (
    <div className="terms-conditions-container">
      <Helmet>
        <title>Terms-Conditions - Robozon</title>
        <meta name="description" content="Robozon" />
        <meta property="og:title" content="Terms-Conditions - Robozon" />
        <meta property="og:description" content="Robozon" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/robozon-logo-1500h.png"
        image_src1="/playground_assets/robozon-logo-1500h.png"
      ></Navbar>
      <div className="terms-conditions-banner">
        <h1 className="terms-conditions-text">Terms &amp; Conditions</h1>
        <span className="terms-conditions-text01">
          <span>
            Robozon Relay (also hereinafter referred to “We” or “Us”) located in
            the Internet at the following address: `link`
          </span>
          <br className="terms-conditions-text03"></br>
          <span>
            All rights to the app (its content, graphics and other elements)
            owned by Robozon Relay Service is provided “as is”. Robozon Relay is
            not responsible for any loss or damage of data, as well as other
            consequences of any nature. The user uses the App at his own risk.
          </span>
          <br className="terms-conditions-text05"></br>
          <span>
            Robozon Relay does not assume any responsibility, including
            compliance with the objectives of the service user. Company does not
            guarantee that:
          </span>
          <br className="terms-conditions-text07"></br>
          <span>
            Robozon Relay is not be liable to the user and (or) any third party
            for any type of damages resulting from the use of the User service /
            Company website or parts / functions. The company has the right to
            install any additional requirements and restrictions in relation to
            App usage. It is prohibited to resell software to third party
            persons.
          </span>
          <br className="terms-conditions-text09"></br>
          <br className="terms-conditions-text10"></br>
          <span className="terms-conditions-text11">
            Free Trial Period.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-conditions-text12"></br>
          <span>
            During the first 7 days following enrolment, you will have a 7 days
            Free Trial to our services. After the 7 day free Trial we will have
            right to charge you. You shall have the right to use a free trial
            period one time, upon which you can cancel it any time. After
            expiration of the 7 days Trial Period, you will be charged
            automatically and you will not be refunded. You will only be able to
            cancel the following month.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-conditions-text14"></br>
          <br className="terms-conditions-text15"></br>
          <br className="terms-conditions-text16"></br>
          <span className="terms-conditions-text17">Chargeback</span>
          <br className="terms-conditions-text18"></br>
          <span>
            You do not have a Chargeback right under these terms and conditions
            or any applicable law. In case you decide to chargeback any
            payments, Robozon Relay will dispute through our Payment Processor
            and the chargeback will not be allowed. Any payments are final.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-conditions-text20"></br>
          <br className="terms-conditions-text21"></br>
          <br className="terms-conditions-text22"></br>
          <span className="terms-conditions-text23">
            Credit &amp; Debit Card Terms
          </span>
          <br className="terms-conditions-text24"></br>
          <br className="terms-conditions-text25"></br>
          <span>Approval for charge on Credit Card</span>
          <br className="terms-conditions-text27"></br>
          <span>
            I authorize AAA INVEST LLC AND ROBOZON RELAY to charge my credit
            card for the above agreed upon purchase. I understand that my
            information will be saved to a secured file for future transactions
            on my account only.
          </span>
          <span className="terms-conditions-text29">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-conditions-text30"></br>
        </span>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default TermsConditions
