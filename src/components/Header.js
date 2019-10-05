import { Link } from "gatsby"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import styled from "styled-components"

const Header = () => (
  <header>
    <StyledAppBar position="relative">
      <StyledToolbar>
        <a href="#Front">Home</a>
        <div>Projects</div>
        <div>About</div>
      </StyledToolbar>
    </StyledAppBar>
  </header>
)
const StyledToolbar = styled(Toolbar)`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
`
const StyledAppBar = styled(AppBar)`
  transform: rotate(45deg) translate(50%, -50%);
  overflow: hidden;
  height: 50vh;
`

export default Header
