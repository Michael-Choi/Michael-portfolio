import React from "react"
import Header from "./Header"
import styled from "styled-components"
import { Linkedin, Github, Mail } from "styled-icons/feather"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer>
        Michael Choi © {new Date().getFullYear()} |{" "}
        <StyledIcons
          href="https://www.linkedin.com/in/michael-b-choi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={25} />
        </StyledIcons>
        <StyledIcons
          href="https://www.github.com/michael-choi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={25} />
        </StyledIcons>
        <StyledIcons
          href="mailto:michael@michaelchoi.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={25} />
        </StyledIcons>
      </Footer>
    </>
  )
}
const StyledIcons = styled.a`
  margin: 2%;
  color: black;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: #2858c7;
  }
`

const Footer = styled.footer`
  padding: 10% 10%;
  text-align: center;
`
export default Layout
