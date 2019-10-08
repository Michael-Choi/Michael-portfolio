import React from "react"

import { Typography, makeStyles, Container } from "@material-ui/core"

const About = () => {
  const classes = useStyles()
  return (
    <div id="About" className={classes.about}>
      <Container maxWidth="md">
        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
          About me
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="textSecondary"
          component="p"
        >
          Nothing excites me more than solving difficult problems and turning
          abstract ideas into code. I'm always eager to learn, an avid problem
          solver, and a great team member! In my free time, I enjoy listening to
          podcasts, playing chess, and attending tech meetups.
          <br />
          <br />
          I'm a recent graduate from Queen's University and currently looking
          for new opportunities.
          <br />
          <br />
          Feel free to shoot me an email over at michael@michaelchoi.ca if you
          want to get to know me more!
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
