import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Projects from "../components/Projects"
import About from "../components/About"
import Front from "../components/Front"

import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledFront />
    <Projects />
    <About />
  </Layout>
)

const StyledFront = styled(Front)`
  top: 100px;
  border: 3px solid black;
  margin: 100px auto;
  width: 50%;
  position: fixed;
`

export default IndexPage
