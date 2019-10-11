import React from "react"
import {
  makeStyles,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core"

import styled from "styled-components"

import Cards from "./Cards"

export default function Projects() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <StyledBackground id="Projects">
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {/* Individual project cards get called here with props
                Requires 
                projectName (string)
                image (graphql query)
                imageTitle (string image description)
                description (string description)
                demoLink
                codeLink
                techstack
                 */}
            <Cards
              key="Learn Now"
              projectName="Learn Now"
              techstack="PostgreSQL / Node / Express"
              imageTitle="Home page of Learn Now"
              description="A resource aggregation website similar to Pinterest."
              codeLink="https://github.com/CameronDunning/LearNow"
            />
            <Cards
              key="Scheduler"
              projectName="Scheduler"
              techstack="PostgreSQL / Node / Express / React"
              imageTitle="Home page of Scheduler"
              description="A front end react-app that allows users to schedule and cancel interviews."
              demoLink="https://michael-scheduler.netlify.com"
              codeLink="https://github.com/Michael-Choi/Scheduler"
            />
            <Cards
              key="Byte Sized"
              projectName="Byte Sized"
              techstack="mongoDB / Express / Node"
              imageTitle="Home page of Byte Sized"
              description="A URL-shortening website similar to bitly.com."
              demoLink="https://byte-size.herokuapp.com/"
              codeLink="https://github.com/Michael-Choi/tinyapp"
            />
          </Grid>
        </Container>
      </StyledBackground>
    </React.Fragment>
  )
}

const StyledBackground = styled.main`
  background: #f1f1f1;
  padding-top: 5vh;
`
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
}))
