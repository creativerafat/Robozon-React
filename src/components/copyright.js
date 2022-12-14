import React from 'react'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className="copyright-copyright">
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">
          <span>
            © All rights reserved
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span> Powered by Robozon.io</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Copyright
