import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  about: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.about}>
      <Container maxWidth="md">
        <Typography variant="h6" align="left" gutterBottom>
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

export default About
