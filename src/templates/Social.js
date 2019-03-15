import React from "react";
import { Link } from "gatsby";
import {
	faCodepen,
	faLinkedin,
	faFacebook,
	faGoogle,
	faTrello,
	faDribbbleSquare,
	faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Left-Social-Media-Bar-Navigation
export const Social = () => (
	<div className="social-nav buttons are-medium">
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faGoogle} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faLinkedin} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faFacebook} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faTwitterSquare} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faDribbbleSquare} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faTrello} />
		</Link>
		<Link to="/" className="button borderhover">
			<FontAwesomeIcon className="icon" icon={faCodepen} />
		</Link>
	</div>
);
