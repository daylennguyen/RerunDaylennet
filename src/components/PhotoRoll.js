import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from 'gatsby-image'

class PhotoRoll extends React.Component {
  render () {
    const { data, prntcount } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    let i = 0
    return (
      <div className='projroll-sect'>
        {posts &&
          /* Only display 4 posts */
          posts.slice(0, prntcount || posts.length).map(({ node: post }) => {
            console.log(post.frontmatter.fotoimage)
            return (
              <div
                className='is-6 showcase-item projroll-item'
                data-aos='zoom-out'
                data-aos-duration='600'
                data-aos-delay={i++ * 150}
                key={post.id}
              >
                <Link
                  className='has-text-primary'
                  to={post.fields.slug}
                >
                  {post.frontmatter.fotoimage ? (
                    <div
                      className='projroll-img'
                      style={{
                        backgroundImage: `url(${post.frontmatter.fotoimage}/-/progressive/yes/-/resize/800x/)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    />
                  ) : null}
                  <div className='fotoroll-txt flex-center is-size-7'>
                      <em>{`"${post.frontmatter.title}"`}</em>
                      <em>{post.frontmatter.date}</em>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}

PhotoRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

// When asked for blogroll, query-data then stuff it into the components
export default (props) => {
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
