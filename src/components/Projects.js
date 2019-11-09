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
import { useStaticQuery, graphql } from "gatsby"
export default function Projects() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      bytesize: file(relativePath: { eq: "bytesize.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      learnnow: file(relativePath: { eq: "learnnow.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scheduler: file(relativePath: { eq: "scheduler.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
              description="A resource aggregation website similar to Pinterest."
              image={data.learnnow.childImageSharp.fluid}
              codeLink="https://github.com/CameronDunning/LearNow"
            />
            <Cards
              key="Scheduler"
              projectName="Scheduler"
              techstack="PostgreSQL / Node / Express / React"
              description="A front end react-app that allows users to schedule and cancel interviews."
              image={data.scheduler.childImageSharp.fluid}
              demoLink="https://michael-scheduler.netlify.com"
              codeLink="https://github.com/Michael-Choi/Scheduler"
            />
            <Cards
              key="ByteSize"
              projectName="ByteSize"
              techstack="mongoDB / Express / Node"
              description="A URL-shortening website similar to bitly.com."
              image={data.bytesize.childImageSharp.fluid}
              // demoLink="https://byte-size.herokuapp.com/"
              codeLink="https://github.com/Michael-Choi/byteSize"
            />
            <Cards
              key="Portfolio"
              projectName="Portfolio"
              techstack="React / GraphQL / Gatsby"
              description="A URL-shortening website similar to bitly.com."
              image={data.bytesize.childImageSharp.fluid}
              codeLink="https://github.com/Michael-Choi/Michael-portfolio"
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
