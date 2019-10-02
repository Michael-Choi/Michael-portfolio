import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Projects />
    <About />
  </Layout>
)

const ImgContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default IndexPage
