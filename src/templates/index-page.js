// Landing Page

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import HomeBanner from './banner.svg'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Terminal from '../components/Terminal'
import { Social } from './Social'
import TermCollectionsNav from './TermCollectionsNav'

{
  /* <img src={`${HomeBanner}`} className="banner" alt="daylen.net website portfolio banner" /> */
}
export const IndexPageTemplate = ({
  introHeading,
  introBody,
  termTitle,
  init,
  replaceList,
}) => {
  const tBanner = (
    <div className="avatar avatar-fit">
      <div className="color" />
      <div className="eyes"> </div>
      <div className="mouth"> </div>
    </div>
  )
  return (
    <div>
      <div className="flex-center land-wrapper head">
        <Terminal
          name={termTitle}
          banner={tBanner}
          init={init}
          replaceList={replaceList}
        >
          <TermCollectionsNav />
        </Terminal>
        <Social />
      </div>

      <section className="content margin-content">
        <div className="container">
          <h1>{termTitle}</h1>
          <h1>{init}</h1>
          <h1>{replaceList}</h1>
          <h1>{introHeading}</h1>
          <h1>{introBody}</h1>
          <BlogRoll />
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
  init: PropTypes.string,
  replaceList: PropTypes.array,
}

// Retrieve GQL data, insert into layout_component
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        banner={frontmatter.banner}
        introHeading={frontmatter.intro.heading}
        introBody={frontmatter.intro.body}
        init={frontmatter.terminal.termInit}
        termTitle={frontmatter.terminal.termtitle}
        replaceList={frontmatter.terminal.replaceList}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        terminal {
          termtitle
          termInit
          replaceList
        }
        intro {
          heading
          body
        }
      }
    }
  }
`
