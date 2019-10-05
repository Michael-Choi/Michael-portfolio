import React from "react"
import Header from "./Header"
import styled from "styled-components"
import Paper from "@material-ui/core"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer>
        Designed and developed by Michael Choi © {new Date().getFullYear()}
      </Footer>
    </>
  )
}

const Footer = styled.footer`
  padding: 10px 10px;
`
export default Layout
