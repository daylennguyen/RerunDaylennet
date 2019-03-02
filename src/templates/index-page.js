// Landing Page

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import HomeBanner from './banner.svg'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

// Query data parsed from MD as input
export const IndexPageTemplate = ({
  banner,
  termTitle,
  termText,
  introHeading,
  introBody
}) => (
    <div>
      {/* <Img fixed={banner.childImageSharp.fixed} title="daylen net banner" alt="intro banner for daylen web portfolio" fadeIn /> */}
      <div class="container is-centered" >
        <img class="is-paddingless" src={HomeBanner}/>
      </div>
      <p>{termTitle}</p>
      <p>{termText}</p>
      <p>{introHeading}</p>
      <p>{introBody}</p>
      <Link className='btn' to='/products'>
        See all products
    </Link>
      <BlogRoll />
      <Link className='btn' to='/blog'>
        Read more
    </Link>
    </div>
  )
//
IndexPageTemplate.propTypes = {
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  termTitle: PropTypes.string,
  termText: PropTypes.string,
  introHeading: PropTypes.string,
  introBody: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        banner={frontmatter.banner}
        termTitle={frontmatter.termtitle}
        termText={frontmatter.termtext}
        introHeading={frontmatter.intro.heading}
        introBody={frontmatter.intro.body}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        banner {
          childImageSharp {
            fixed(width: 860) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        termtitle
        termtext
        intro {
          heading
          body
        }
      }
    }
  }
`
