import { Link } from "gatsby"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import styled from "styled-components"

const Header = () => (
  <header>
    <AppBar position="relative">
      <StyledToolbar>
        <h6 color="inherit">Nav Bar testing</h6>
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
      </StyledToolbar>
    </AppBar>
  </header>
)
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`
export default Header
