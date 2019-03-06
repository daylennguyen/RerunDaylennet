// Landing Page

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import HomeBanner from './banner.svg'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Terminal from '../components/Terminal'

// Format data, insert head img
export const IndexPageTemplate = ({
  banner,
  termTitle,
  termText,
  introHeading,
  introBody
}) => {
  // <Img fixed={banner.childImageSharp.fixed} title="daylen net banner" alt="intro banner for daylen web portfolio" fadeIn />

  return (
    <div>
      <div className="columns land-container">
          <div className="flex-center land-wrapper margin-top-0">
            <Link to='/' className="flex-center"
            style={{
                  padding: '0',
                  margin: '0',
                }}>
              <img src={HomeBanner}
                style={{
                  backgroundColor: 'rgba(38, 38, 38, .6)',
                  padding: '1rem',
                  // margin: '2rem auto',
                  marginBottom: `3rem`,
                  width: '100%'
                }}
                alt="daylen.net website portfolio banner"
              />
            </Link>
            <Terminal
              name={termTitle}
              strings={[
                "`<strong>$ user@daylen.net ~ </strong>`Welcome to daylen.net!^500\n" +
                "`<strong>$ user@daylen.net ~ </strong>`I'm <strong>Daylen Nguyen.</strong>^500\n" +
                "<strong>`$ user@daylen.net ~ `</strong>an avid <strong>web developer^250, photographer,</strong>^250\n" +
                "<strong>`$ user@daylen.net ~ `</strong>and recent graduate from <strong><a href='http://www.tacoma.uw.edu/'>the University of Washington</a></strong>.^250\n"+
                "<strong>`$ user@daylen.net ~ `</strong>npm run navigation"
              ]}
            />
            <div>
            <a href="https://google.com"className="button is-rounded is-medium">Photography</a>
            <a href="https://google.com"className="button is-rounded is-medium">Programming</a>
            <a href="https://google.com"className="button is-rounded is-medium">Blog</a>


            </div>
          </div>
      </div>
      <section className="content">
        <div className="container">
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
      </section>
    </div>
  )
}

// Type Validation
IndexPageTemplate.propTypes = {
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  termTitle: PropTypes.string,
  termText: PropTypes.string,
  introHeading: PropTypes.string,
  introBody: PropTypes.string,
}

// Retrieve GQL data, insert into layout_component
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
