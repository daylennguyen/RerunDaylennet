import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";

class ProjectsRoll extends React.Component {
	render() {
		const { data, prntcount } = this.props;
		const { edges: posts } = data.allMarkdownRemark;
		console.log(prntcount);
		let i = 0;
		return (
			<div className="columns is-multiline">
				{posts &&
					/* Only display 4 posts */
					posts
						.slice(0, prntcount ? prntcount : posts.length)
						.map(({ node: post }) => {
							console.log(i * 120);
							return (
								<div
									className="media tile is-ancestor column is-6"
									data-aos="zoom-out"
									data-aos-duration="600"
									data-aos-delay={i++ * 150}
									key={post.id}
								>
									<article className="tile is-parent box notification showcase-item">
										<div className="projroll-img is-child flex-center">
											<Img
												fixed={post.frontmatter.image.childImageSharp.fixed}
											/>
										</div>
										<div className="is-child">
											<p>
												<Link
													className="title has-text-primary is-size-4"
													to={post.fields.slug}
												>
													{post.frontmatter.title}
												</Link>
												<span> &bull; </span>
												<span className="subtitle is-size-5 is-block">
													{post.frontmatter.date}
												</span>
											</p>
											<p>
												{post.excerpt}
												<br />
												<br />
												<Link className="button" to={post.fields.slug}>
													Keep Reading →
												</Link>
											</p>
										</div>
									</article>
								</div>
							);
						})}
			</div>
		);
	}
}

ProjectsRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

// When asked for blogroll, query-data then stuff it into the components
export default props => {
	console.log(`props.prntcount=${props.prntcount}`);
	return (
		<StaticQuery
			query={graphql`
				query ProjectsRollQuery {
					allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
						filter: { frontmatter: { templateKey: { eq: "project-post" } } }
					) {
						edges {
							node {
								excerpt(pruneLength: 400)
								id
								fields {
									slug
								}
								frontmatter {
									title
									templateKey
									image {
										childImageSharp {
											fixed(width: 128) {
												...GatsbyImageSharpFixed
											}
										}
									}
									date(formatString: "MMMM DD, YYYY")
									github
								}
							}
						}
					}
				}
			`}
			render={(data, count) => (
				<ProjectsRoll data={data} count={count} prntcount={props.prntcount} />
			)}
		/>
	);
};
