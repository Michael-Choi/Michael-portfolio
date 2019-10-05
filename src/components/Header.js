import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import styled from "styled-components"

const Header = () => {
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#Projects"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
  return (
    <header>
      <StyledAppBar position="relative">
        <StyledToolbar>
          <StyledNavLink onClick={handleClick} href="#Front">
            Home
          </StyledNavLink>
          <StyledNavLink href="#Projects">Projects</StyledNavLink>
          <StyledNavLink href="#About">About</StyledNavLink>
        </StyledToolbar>
      </StyledAppBar>
    </header>
  )
}

const StyledToolbar = styled(Toolbar)`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;

  // height: 50vh;
`
const StyledAppBar = styled(AppBar)`
  // transform: rotate(45deg) translate(50%, -50%);
  // overflow: hidden;
  // height: 50vh;
  color: white;
`
const StyledNavLink = styled.a`
  color: white;
  padding: 5px;
  text-decoration: none;
  outline: white;
  font-size: 1.2em;
`

export default Header
