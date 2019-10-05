import React from "react"
import { CssBaseline, Grid, Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Cards from "./Cards"

export default function Projects() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            id="Projects"
            gutterBottom
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            <Cards />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

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
}))
