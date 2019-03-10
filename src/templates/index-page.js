// Landing Page

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import HomeBanner from './banner.svg'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Terminal from '../components/Terminal'
import {Button} from '../components/IconButton'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodepen, faLinkedin, faFacebook, faDiscord, faGoogle, faTrello, faDribbbleSquare,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Format data, insert head img
export const IndexPageTemplate = ({
  banner,
  termTitle,
  termText,
  introHeading,
  introBody
}) => {
  // <Img fixed={banner.childImageSharp.fixed} title="daylen net banner" alt="intro banner for daylen web portfolio" fadeIn />
  library.add(faLinkedin)
  library.add(faFacebook)
  library.add(faDiscord)
  library.add(faGoogle)
  library.add(faTrello)
  library.add(faDribbbleSquare)
  library.add(faTwitterSquare)
  library.add(faCodepen)

  return (
    <div>
      {/* <section className="columns land-container"> */}
          <div className="flex-center land-wrapper margin-top-0">
            <Link to='/' className="flex-center is-paddingless is-marginless">
              <img src={HomeBanner} className="banner" alt="daylen.net website portfolio banner"/>
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
            <div className=" buttons is-grouped has-addons are-medium">
              <Link to='/' className="button">Programming</Link>
              <Link to='/' className="button">Blog</Link>
              <Link to='/' className="button">Photography</Link>
            </div>
            <div className="social-nav buttons are-medium">
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faGoogle}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faLinkedin}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faFacebook}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faTwitterSquare}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faDribbbleSquare}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faTrello}/>
              </Link>
              <Link to='/'  className="button borderhover">
                  <FontAwesomeIcon className="icon" icon={faCodepen}/>
              </Link>
              
            </div>
          </div>
      {/* </section> */}
      <section className="content margin-content">
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
