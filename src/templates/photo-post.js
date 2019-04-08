/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PhotoPostTemplate = ({
  image,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            <div className='img-wrapper flex-center'>
              {image ? (
                <a href={image}>
                <img
                className='projroll-img '
                src={`${image}/-/progressive/yes/-/resize/800x/-/stretch/fill/`}
                />
                </a>
                ) : null}
            <em className="has-text-primary fotoroll-txt"><p>{date}{description ? ` – ${description}` : null}</p></em>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div className='pic-tag-wrapper' style={{ marginTop: `4rem` }}>
                <h2>Tags</h2>
                <div className='tags is-primary is-rounded are-medium'>
                  {tags.map((tag) => (
                    <span key={`${tag}tag`}>
                      <Link
                        className='tag is-primary'
                        to={`/tags/${kebabCase(tag)}/`}
                        >
                        {tag}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PhotoPostTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const PhotoPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PhotoPostTemplate
        image={post.frontmatter.fotoimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate='%s | Photo'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
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

PhotoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default PhotoPost

export const pageQuery = graphql`
  query PhotoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        fotoimage
        description
      }
    }
  }
`
