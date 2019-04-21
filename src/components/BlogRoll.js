import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data, prntcount } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(prntcount)
    let i = 0
    return (
      <div className="columns is-multiline">
        {posts &&
          /* Only display 4 posts. bangbang usage! */
          posts
            .slice(0, !!prntcount ? prntcount : posts.length)
            .map(({ node: post }) => {
              return (
                <div
                  className="is-parent column is-6"
                  data-aos="zoom-out"
                  data-aos-duration="600"
                  data-aos-delay={i++ * 150}
                  key={post.id}
                >
                  <article className="tile is-child box notification showcase-item">
                    <p>
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <span className="subtitle is-size-5 is-block">
                        <em><i>{post.frontmatter.date} - by Daylen Nguyen</i></em>
                      </span>
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              )
            })}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// When asked for blogroll, query-data then stuff it into the components
export default props => {
  console.log(`props.prntcount=${props.prntcount}`)
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <BlogRoll data={data} count={count} prntcount={props.prntcount} />
      )}
    />
  )
}
