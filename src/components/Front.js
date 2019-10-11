import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  CssBaseline,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core"

import { Linkedin, Github, Mail } from "styled-icons/feather"

const Front = () => {
  const classes = useStyles()

  const handleClick = event => {
    document
      .querySelector(`#Projects`)
      .scrollIntoView({ behavior: "smooth", block: "start" })
  }
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "MichaelChoi-Resume.pdf" }) {
        publicURL
      }
    }
  `)
  // console.log(data.resume.edges[0].node.publicURL)
  return (
    <StyledDiv id="Home">
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
            <StyledIconsGroup>
              <StyledIcons
                href="https://www.linkedin.com/in/michael-b-choi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={23} />
              </StyledIcons>
              <StyledIcons
                href="https://www.github.com/michael-choi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={23} />
              </StyledIcons>
              <StyledIcons
                href="mailto:michael@michaelchoi.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={23} />
              </StyledIcons>
            </StyledIconsGroup>
            <Styledintro>
              <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
              >
                A full-stack software developer that loves to learn about new
                tech and collaborate with cool people.
              </Typography>
            </Styledintro>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                  >
                    View my work
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href={data.resume.publicURL}
                    variant="outlined"
                    color="primary"
                  >
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
    padding: theme.spacing(8, 1, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const Styledintro = styled.div``
const StyledBackground = styled.div`
  height: 100vh;
  display: flex;
`
const StyledDiv = styled.div``

const StyledContainer = styled(Container)`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 5%;
`
const StyledIconsGroup = styled.div`
  padding-bottom: 2.5%;
`

const StyledIcons = styled.a`
  margin-right: 2.5%;
  color: black;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: #2858c7;
  }
`
export default Front
