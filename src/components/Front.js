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
      <StyledBackground className={classes.heroContent}>
        <StyledContainer maxWidth="md">
          <div>
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Michael Choi
            </Typography>

            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              A full-stack software developer that loves to learn about new tech
              and collaborate with cool people.
            </Typography>

            <div className={classes.heroButtons}>
              <p>linked in, github, email</p>
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
          </div>
        </StyledContainer>
      </StyledBackground>
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

const StyledBackground = styled.div`
  height: 50vh;
  display: flex;
  align-content: center;
`
const StyledDiv = styled.div``

const StyledContainer = styled(Container)`
  display: flex;
  align-content: center;
  align-items: center;

  padding: 2%;
`
export default Front
