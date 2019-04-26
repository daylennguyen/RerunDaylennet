import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Captcha from '../../components/recaptcha'

export default class Index extends React.Component {
  render () {
    return (
      <Layout>
        <section className='section'>
          <Captcha />
        </section>
      </Layout>
    )
  }
}
