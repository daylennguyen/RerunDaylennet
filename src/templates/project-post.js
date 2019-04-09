/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

// 10am Same place
// Kyle Simmons
//

export const ProjectPostTemplate = ({
  image,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  console.log(image)
  // function myFunction (x) {
  //   if (x.matches) {
  //     // If media query matches
  //     document.body.style.backgroundColor = 'yellow'

  //   } else {
  //     document.body.style.backgroundColor = 'pink'
  //   }
  // }

  // var x = window.matchMedia('(max-width: 700px)')
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction) // Attach listener function on state changes

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content ">
        <div className="columns">
          <div className="column is-10 is-offset-1 bg-dark-content">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="img-wrapper flex-center">
              {image ? (
                <a href={image}>
                  <img
                    className="projroll-img "
                    src={`${image}/-/progressive/yes/-/resize/800x/-/stretch/fill/`}
                  />
                </a>
              ) : null}
            </div>
            <span className="post-txt-wrapper">
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h2>Tags</h2>
                  <div className="tags is-primary is-rounded are-medium">
                    {tags.map(tag => (
                      <span className="tag is-primary" key={`${tag}tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectPostTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectPostTemplate
        image={post.frontmatter.featimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        github
        description
        tags
        featimage
      }
    }
  }
`
