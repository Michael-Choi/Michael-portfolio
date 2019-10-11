import React from "react"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core"
import styled from "styled-components"
import Img from "gatsby-image"
const Cards = props => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <Img
            className={classes.cardMedia}
            fixed={props.image || ""}
            title={props.imageTitle || `Demo image of ${props.projectName}`}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectName}
            </Typography>
            <Typography variant="h7" color="textSecondary" component="p">
              {props.techstack || ""}
            </Typography>
            <Typography>
              {props.description || "enter description here"}
            </Typography>
          </CardContent>
          <CardActions>
            {props.demoLink && (
              <Button size="small" color="primary">
                <StyledAnchor
                  href={props.demoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Demo
                </StyledAnchor>
              </Button>
            )}
            {props.codeLink && (
              <Button size="small" color="primary">
                <StyledAnchor
                  href={props.codeLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </StyledAnchor>
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
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
}))

export default Cards
