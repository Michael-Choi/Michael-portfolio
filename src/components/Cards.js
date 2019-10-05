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

const Cards = () => {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {cards.map(card => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
              onClick={() => console.log("hello")}
            />
            <CardContent
              onClick={() => console.log("hello")}
              className={classes.cardContent}
            >
              <Typography gutterBottom variant="h5" component="h2">
                Project Name
              </Typography>
              <Typography>Brief Description</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Demo
              </Button>
              <Button size="small" color="primary">
                Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}

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
