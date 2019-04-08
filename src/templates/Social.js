import React from 'react'
import { Link } from 'gatsby'
import {
	faCodepen,
	faLinkedin,
	faFacebook,
	faTrello,
	faDribbbleSquare,
	faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilRuler, faImages } from '@fortawesome/free-solid-svg-icons'

const ButtonBorderHover = props => {
	const { icon, to, className, ...otherProps } = props
	const cn = `button borderhover ${className}`
	// Will the reference point to an external link or internal (within our domain)
	return to.charAt(0) === '/' ? (
		<Link to={ to } className={ cn } { ...otherProps }>
			<FontAwesomeIcon className="icon" icon={ icon } />
		</Link>
	) : (
			<a href={ to } className={ cn } { ...otherProps }>
				<FontAwesomeIcon className="icon" icon={ icon } />
			</a>
		)
}

/*
<Link to="/" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faHome} />
    </Link>
    <Link to="/blog" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faColumns} />
    </Link>
    <Link to="/photos" className="button borderhover">
      <FontAwesomeIcon className="icon" icon={faCamera} />
    </Link>
icon, tag, to, className	
*/
// Left-Social-Media-Bar-Navigation
export const Social = () => (
	<div className="social-nav buttons">
		<ButtonBorderHover className="nonSocialNavButt" icon={ faHome } to="/" />
		<ButtonBorderHover
			className="nonSocialNavButt"
			icon={ faPencilRuler }
			to="/blog"
		/>
		<ButtonBorderHover
			className="nonSocialNavButt"
			icon={ faImages }
			to="/photos"
		/>

		<ButtonBorderHover
			icon={ faLinkedin }
			to="https://www.linkedin.com/in/daylen-nguyen/"
		/>
		<ButtonBorderHover
			icon={ faTwitterSquare }
			to="https://twitter.com/BinaryGood"
		/>
		<ButtonBorderHover
			icon={ faCodepen }
			to="https://codesandbox.io/u/daylennguyen"
		/>
		<ButtonBorderHover
			icon={ faFacebook }
			to="https://www.facebook.com/daynguyen"
		/>
		<ButtonBorderHover
			icon={ faDribbbleSquare }
			to="https://dribbble.com/daylennguyen"
		/>
		<ButtonBorderHover icon={ faTrello } to="https://trello.com/flannyan" />
	</div>
)
