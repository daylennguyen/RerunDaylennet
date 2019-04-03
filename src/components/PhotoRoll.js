import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from 'gatsby-image'

class PhotoRoll extends React.Component {
  render() {
    const { data, prntcount } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    let i = 0
    return (
      <div className="projroll-sect">
        {posts &&
          /* Only display 4 posts */
          posts
            .slice(0, prntcount ? prntcount : posts.length)
            .map(({ node: post }) => {
              console.log(post.frontmatter.fotoimage)
              return (
                <div
                  className="is-6 showcase-item projroll-item"
                  data-aos="zoom-out"
                  data-aos-duration="600"
                  data-aos-delay={i++ * 150}
                  key={post.id}
                >
                  {!!post.frontmatter.fotoimage ? (
                    <div
                      className="projroll-img"
                      style={{
                        backgroundImage: `url(${post.frontmatter.featimage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    />
                  ) : null}
                  <div className="projroll-txt flex-center">
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
                </div>
              )
            })}
      </div>
    )
  }
}

ProjectsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// When asked for blogroll, query-data then stuff it into the components
export default props => {
  return (
    <StaticQuery
      query={graphql`
        query PhotoRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "photo-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  fotoimage
                  date(formatString: "MMMM DD, YYYY")
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <PhotoRoll data={data} count={count} prntcount={props.prntcount} />
      )}
    />
  )
}
