import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const handleClick = event => {
    const anchor = document.querySelector(`#${event.currentTarget.innerHTML}`)
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <header>
      <StyledAppBar position="relative">
        <StyledToolbar>
          <div>
            <a href="#Home">
              <StyledImg fluid={data.file.childImageSharp.fluid} alt="Logo" />
            </a>
          </div>
          <div>
            <StyledNavLink onClick={handleClick}>Home</StyledNavLink>
            <StyledNavLink onClick={handleClick}>Projects</StyledNavLink>
            <StyledNavLink onClick={handleClick}>About</StyledNavLink>
          </div>
        </StyledToolbar>
      </StyledAppBar>
    </header>
  )
}

const StyledImg = styled(Img)`
  width: 5vh;
`
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const StyledAppBar = styled(AppBar)`
  background: #2858c7;
  height: 8vh;
  justify-content: center;
  position: fixed;
`
const StyledNavLink = styled.a`
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  outline: white;
  font-size: 1.2em;

  letter-spacing: 0.1em;
  display: inline-block;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2.3px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 50%;
    left: 25%;
    cursor: pointer;
  }
`

export default Header
