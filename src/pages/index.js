import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Homescreen from "../components/home"
import Projects from "../components/projects"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Homescreen /> */}

    <Projects />
    <About />
  </Layout>
)

export default IndexPage
