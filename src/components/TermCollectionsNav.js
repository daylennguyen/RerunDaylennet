import React from 'react'
import { Link } from 'gatsby'

const BtnsWithTxt = ({ txt, ...restProps }) => <Link {...restProps}>{txt}</Link>

export default () => (
  <div
    className="buttons is-grouped has-addons are-medium"
    style={{ margin: '10px' }}
  >
    <BtnsWithTxt to="/projects" className="button" txt="Programming" />
    <BtnsWithTxt to="/blog" className="button" txt="Blog" />
    <BtnsWithTxt to="/photos" className="button" txt="Photography" />
  </div>
)
