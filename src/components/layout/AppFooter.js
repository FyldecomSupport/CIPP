import React from 'react'
import { CFooter, CImage, CLink } from '@coreui/react'
import { Link } from 'react-router-dom'
import huntressLogo from 'src/assets/images/huntress_teal.png'
import dattoLogo from 'src/assets/images/datto.png'
import rewstLogo from 'src/assets/images/rewst.png'
import netfriends from 'src/assets/images/netfriends.png'
//todo: Add darkmode detection and change logos accordingly.
const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-between align-items-center" position="sticky">
      <div className="sponsors">
      </div>
      <nav className="footer-nav">
        <Link to="/license">License</Link>
      </nav>
    </CFooter>
  )
}

export default React.memo(AppFooter)
