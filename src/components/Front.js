import React from "react"

import styled from "styled-components"

import {
  CssBaseline,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core"

const Front = () => {
  const classes = useStyles()
  return (
    <StyledDiv id="Front">
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
            A full-stack software developer that loves to learn about new tech
            and and collaborating with cool people.
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
    </StyledDiv>
  )
}

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const StyledDiv = styled.div`
  height: 90vh;
`
export default Front
