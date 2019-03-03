import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

export default class Terminal extends React.Component {
	componentDidMount() {
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const { strings } = this.props
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			typeSpeed: 30 ,
			backSpeed: 1
		}
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options)
	}
	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy()
	}
	render() {
		const {name} = this.props
		return (
			<span className="termtext">
				<div className="term-titlebar">
					😺 {name}
				</div>
				<span className="type-wrap">
					<span
						style={{ whiteSpace: 'pre-wrap' }}
						ref={el => {
							this.el = el
						}}
					/>
				</span>
			</span>
		);
	}
}


