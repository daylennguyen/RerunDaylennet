// Landing Page

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
      <div className="columns"  style={{
              backgroundImage: `url('/img/ysmite.jpeg')`,
/* Create the parallax scrolling effect */
              backgroundAttachment: `fixed`,
              backgroundPosition: `center top`,
              backgroundRepeat: `no-repeat`}}
            >
          <div
            className="flexAlgnJstfyCntr margin-top-0"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.75) 100%)`,
              width:`100%`,
              /* Full height */
              height: `100%`,
              padding: `3rem`,
              flexDirection: `column`
            }}
          >
            <Link to='/' className="flexAlgnJstfyCntr"
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
                "`<strong>$ user@daylen.net ~ </strong>`Welcome to daylen.net! ^500\n" +
                "`<strong>$ user@daylen.net ~ </strong>`I'm <strong>Daylen Nguyen</strong>^200 a <strong>photographer^200, web developer,</strong>^200\n" +
                "`<strong>$ user@daylen.net ~ </strong>`and recent graduate from the <strong><a href='http://www.tacoma.uw.edu/'>University of Washington</a></strong>.\n"
              ]}
            />
          </div>
      </div>
      <section className="section">
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
