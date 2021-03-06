import React from 'react'
import Typed from 'typed.js'
import { Link } from 'gatsby'

export default class Terminal extends React.Component {
  componentDidMount() {
    const { init, replaceList } = this.props
    // concatenate the init string to each element in replace list
    // results in smart backspace
    const options = {
      strings: replaceList,
      typeSpeed: 15,
      backSpeed: 15,
      showCursor: false,
      loop: true,
      smartBackspace: true,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // destroy Typed on unmounting to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    const { init, name, children, banner } = this.props
    const title = `🍮 ${name}`
    return (
      <span className="termtext flex-center">
        <div className="term-titlebar">{title}</div>
        <span className="head-cont">
          <div className="flex-center">{banner}</div>
          {init}
          <span className="type-wrap">
            <span
              className="type-wrap"
              style={{
                whiteSpace: 'normal',
                // background: '#282a36',
                padding: '5px',
              }}
              ref={el => {
                this.el = el
              }}
            />
          </span>
          {children}
        </span>
      </span>
    )
  }
}
