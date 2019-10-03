import React from "react"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
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
}))

const Front = () => {
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            Michael Choi
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
            A full-stack software developer that loves to design and create fast
            and responsive websites. I enjoy working with new tech and
            collaborating with cool people.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  View my work
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Resume
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Front
