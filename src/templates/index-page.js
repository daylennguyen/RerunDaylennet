// Landing Page
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Captcha from '../components/recaptcha'
// Animate on Scroll
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'
import HomeBanner from './banner.svg'

// HTML Head
import Layout from '../components/Layout'

// Side Nav
import Avatar from '../components/Avatar'

// Btns "Photography Programming Blog"
import TermCollectionsNav from '../components/TermCollectionsNav'
import Terminal from '../components/Terminal'

// Showcase Components
import BlogRoll from '../components/BlogRoll'
import ProjectsRoll from '../components/ProjectsRoll'
import PhotoRoll from '../components/PhotoRoll'

export const IndexPageTemplate = ({ termTitle, init, replaceList }) => {
  // waow~ react-hooks!
  useEffect(() => {
    if (AOS.refresh() === undefined) {
      AOS.init()
      console.log("aos initt'd")
    }
  }, [])
  const handleClick = () => {
    document.querySelector('.blog').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className='flex-center land-wrapper head'>
        <img
          src={HomeBanner}
          className='banner'
          alt="daylen nguyen .net a website for daylen's web-portfolio"
        />
        <Terminal
          data-aos='fade'
          name={termTitle}
          banner={<Avatar />}
          init={init}
          replaceList={replaceList}
        >
          <TermCollectionsNav />
        </Terminal>
        <a onClick={handleClick} className='button borderhover bounce'>
          <FontAwesomeIcon className='icon' icon={faHandPointDown} />
        </a>
      </div>
      <section className='content'>
        <span className='blog'>
          <div className='container showcase flex-center'>
            <h1 className='section-title' data-aos='fade'>
              <Link to='/blog'>Recent Blog Posts</Link>
            </h1>
            <BlogRoll prntcount={2} />
          </div>
        </span>
      </section>
      <section className='content'>
        <span className='proj'>
          <div className='container showcase flex-center'>
            <h1 className='section-title' data-aos='fade'>
              <Link to='/projects'>Recent Projects</Link>
            </h1>
            <ProjectsRoll prntcount={3} />
          </div>
        </span>
      </section>
      <section className='content'>
        <span className='blog'>
          <div className='container showcase flex-center'>
            <h1 className='section-title' data-aos='fade'>
              <Link to='/photos'>Recent Photos</Link>
            </h1>
            <PhotoRoll prntcount={3} />
          </div>
        </span>
      </section>
      <section className='content'>
        <span className='blog'>
          <div className='container showcase flex-center' >
           <Captcha/>
          </div>
        </span>
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
  replaceList: PropTypes.array
}

// Retrieve GQL data, insert into layout_component
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        banner={frontmatter.banner}
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
      frontmatter: PropTypes.object
    })
  })
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
      }
    }
  }
`
