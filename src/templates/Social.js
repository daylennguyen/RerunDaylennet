import React from 'react'
import { Link } from 'gatsby'
import {
  faCodepen,
  faLinkedin,
  faFacebook,
  faGoogle,
  faTrello,
  faDribbbleSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faColumns, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

// Left-Social-Media-Bar-Navigation
export const Social = () => (
  <div className="social-nav buttons are-medium">
    <Link to="/" className="button borderhover">
      <FontAwesomeIcon className="icon inlink" icon={faHome} />
    </Link>
    <Link to="/blog" className="button borderhover">
      <FontAwesomeIcon className="icon inlink" icon={faColumns} />
    </Link>
    <Link to="/photos" className="button borderhover">
      <FontAwesomeIcon className="icon inlink" icon={faCameraRetro} />
    </Link>
    <a href="https://www.linkedin.com/in/daylen-nguyen/" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faLinkedin} />
    </a>
    <a href="https://www.facebook.com/daynguyen" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faFacebook} />
    </a>
    <a href="https://twitter.com/BinaryGood" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
    </a>
    <a href="https://dribbble.com/daylennguyen" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faDribbbleSquare} />
    </a>
    <a href="https://trello.com/flannyan" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faTrello} />
    </a>
    <a href="https://codesandbox.io/u/daylennguyen" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faCodepen} />
    </a>
  </div>
)
