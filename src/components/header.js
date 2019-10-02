import { Link } from "gatsby"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

const Header = () => (
  <header>
    <AppBar position="relative">
      <Toolbar>
        <h6 color="inherit">Nav Bar testing</h6>
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
      </Toolbar>
    </AppBar>
  </header>
)

export default Header
