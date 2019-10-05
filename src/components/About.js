import React from "react"

import { Typography, makeStyles, Container } from "@material-ui/core"

const About = () => {
  const classes = useStyles()
  return (
    <div id="About" className={classes.about}>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="left"
          color="textPrimary"
          id="Projects"
          gutterBottom
        >
          About me
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="textSecondary"
          component="p"
        >
          Stuff about me goes here
        </Typography>

        <Typography
          variant="subtitle1"
          align="left"
          color="textSecondary"
          component="p"
        >
          Github, linked in, email
        </Typography>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  about: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

export default About
