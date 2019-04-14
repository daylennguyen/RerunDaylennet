import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import ProjectsRoll from '../../components/ProjectsRoll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandLizard} from '@fortawesome/free-solid-svg-icons'
export default class ProjectsIndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <div
                className='full-width-image-container margin-top-0'
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`
                }}
              >
                <h1
                  className='has-text-weight-bold is-size-1'
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem'
                  }}
                >
                  Projects
                </h1>
              </div>
            </div>
            <Link to="../" className="button" >
              <FontAwesomeIcon className='icon' icon={faHandLizard} /> <span>Back</span>
            </Link>
            <ProjectsRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
