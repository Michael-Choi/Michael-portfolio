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

const Cards = props => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.image || "https://source.unsplash.com/random"}
            title={props.imageTitle || `Demo image of ${props.projectName}`}
            onClick={() => console.log("hello")}
          />
          <CardContent
            onClick={() => console.log("hello")}
            className={classes.cardContent}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectName}
            </Typography>
            <Typography>
              {props.description || "enter description here"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <StyledAnchor
                href={props.demoLink || "https://google.ca"}
                rel="noopener noreferrer"
                target="_blank"
              >
                Demo
              </StyledAnchor>
            </Button>

            <Button size="small" color="primary">
              <StyledAnchor
                href={props.codeLink || "https://google.ca"}
                rel="noopener noreferrer"
                target="_blank"
              >
                Code
              </StyledAnchor>
            </Button>
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
