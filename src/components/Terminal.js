import React from 'react';
import Typed from 'typed.js';
import { Link } from 'gatsby';

export default class Terminal extends React.Component {
  componentDidMount() {
    const { init, replaceList } = this.props;
    // concatenate the init string to each element in replace list
    const generateStrings = (init, replaceList) => replaceList.map(replaceList => init + replaceList);
    const textList = generateStrings(init, replaceList);
    // results in smart backspace
    const options = {
      strings: textList,
      typeSpeed: 0,
      backSpeed: 0,
      loop: true,
      smartBackspace: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // destroy Typed on unmounting to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    const { name, children, banner } = this.props;
    const title = `🍮 ${name}`;
    return (
      <span className="termtext">
        <div className="term-titlebar">{title}</div>
        <span className="type-wrap">
          <div className="flex-center is-paddingless is-marginless">{banner}</div>
          <span
            style={{ whiteSpace: 'pre-wrap' }}
            ref={(el) => {
						  this.el = el;
            }}
          />
          {children}
        </span>
      </span>
    );
  }
}
