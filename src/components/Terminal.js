import React from 'react'
import Typed from 'typed.js'

export default class Terminal extends React.Component {
	componentDidMount() {
		const { strings } = this.props
		const options = {
			strings: strings,
			typeSpeed: 30 ,
			backSpeed: 1
		}
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options)
	}
	componentWillUnmount() {
		// destroy Typed on unmounting to prevent memory leaks
		this.typed.destroy()
	}
	render() {
		const {name} = this.props
		return (
			<span className="termtext">
				<div className="term-titlebar">
					<span aria-label='cat emote' role='img'>😺</span> {name}
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


