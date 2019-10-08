import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import About from "../components/About"
import Front from "../components/Front"

const IndexPage = () => (
  <Layout>
    <SEO title="Michael Choi" />
    <Front />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
