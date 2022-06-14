import Layout from 'components/Layout'
import React from 'react'
import Cover from 'templates/about/about-cover'
import Promese from 'templates/about/about-promese'
import Slides from 'templates/about/about-slides'

const Page = () => {
  return (
    <Layout>
      <Cover />
      <Promese />
      <Slides />
    </Layout>
  )
}

export default Page
