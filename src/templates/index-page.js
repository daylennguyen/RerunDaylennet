// Landing Page

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import HomeBanner from "./banner.svg";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import Terminal from "../components/Terminal";
import Avatar from "../components/Avatar";
import { Social } from "./Social";
import TermCollectionsNav from "./TermCollectionsNav";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* <img src={`${HomeBanner}`} className="banner" alt="daylen.net website portfolio banner" /> */

export const IndexPageTemplate = ({
	introHeading,
	introBody,
	termTitle,
	init,
	replaceList
}) => {
	const tBanner = <Avatar />;
	return (
		<div>
			<div className="flex-center land-wrapper head">
				<Terminal
					name={termTitle}
					banner={tBanner}
					init={init}
					replaceList={replaceList}
				>
					<TermCollectionsNav />
				</Terminal>
				<Social />
				<a
					onClick={() => {
						document
							.querySelector(".blogroll")
							.scrollIntoView({ behavior: "smooth" });
					}}
					className="button borderhover bounce"
				>
					<FontAwesomeIcon className="icon" icon={faHandPointDown} />
				</a>
			</div>

			<section className="content">
				<div className="container">
					<BlogRoll />
				</div>
			</section>
		</div>
	);
};

// Type Validation
IndexPageTemplate.propTypes = {
	banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	termTitle: PropTypes.string,
	termText: PropTypes.string,
	introHeading: PropTypes.string,
	introBody: PropTypes.string,
	init: PropTypes.string,
	replaceList: PropTypes.array
};

// Retrieve GQL data, insert into layout_component
const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	return (
		<Layout>
			<IndexPageTemplate
				banner={frontmatter.banner}
				introHeading={frontmatter.intro.heading}
				introBody={frontmatter.intro.body}
				init={frontmatter.terminal.termInit}
				termTitle={frontmatter.terminal.termtitle}
				replaceList={frontmatter.terminal.replaceList}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				terminal {
					termtitle
					termInit
					replaceList
				}
				intro {
					heading
					body
				}
			}
		}
	}
`;
