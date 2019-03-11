import React from 'react';
import { Link } from 'gatsby';

const BtnsWithTxt = ({ txt, ...restProps }) => <Link {...restProps}>{txt}</Link>;

export default () => (
  <div className=" buttons is-grouped has-addons are-medium">
    <BtnsWithTxt to="/blog" className="button" txt="Programming" />
    <BtnsWithTxt to="/blog" className="button" txt="Blog" />
    <BtnsWithTxt to="/blog" className="button" txt="Photography" />
  </div>
);
