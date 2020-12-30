import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "../assets/no_image.png";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
  root: {
    //   maxWidth: '13rem',
    //   margin: '0px 1px',
    // margin: '20px calc((100% - (15rem * 4)) / 8)',
    //   flex: '1 1 13rem',
    padding: "20px 5px 20px 5px",
    // padding: '20px calc((100% - (300px * 4)) / 4)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    //   alignItems: 'flex-end',
  },
  image: {
    margin: "0 28px",
  },
  expand: {
    transform: "rotate(0deg)",
    padding: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  categories: {
    color: "black",
    textAlign: "center",
    width: "11rem",
  },
  title: {
    fontWeight: "bold",
    display: "-webkit-box",
    lineHeight: "18px",
    maxHeight: "41px",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  authors: {
    color: "grey",
    fontSize: 14,
    padding: "0 3px",
  },
}));

const Book = ({ book, handleCardFlip, isFlipped }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const {
    title,
    authors,
    categories,
    description,
    language,
    infoLink,
  } = book.volumeInfo;
  const image = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : Image;

  return (
    <div className="book-container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="flip front">
          <Card className={classes.root}>
            <a href={infoLink} target="_blank">
              <img src={image} alt={title} className={classes.image} />
            </a>
            <CardHeader
              titleTypographyProps={{ variant: "p" }}
              className={classes.title}
              title={title}
            />
            <Typography className={classes.authors}>
              {authors && authors.length > 1 ? authors.join(", ") : authors}
            </Typography>
            <CardActions disableSpacing>
              {
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {language.toUpperCase()}
                </Avatar>
              }
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.categories}
              >
                {categories ?? "No categories"}
              </Typography>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleCardFlip}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>

        <div className="flip back">
          <Card className={classes.root}>
            <CardContent>
              <Typography paragraph>Description:</Typography>
              <Typography variant="body2">
                {description ?? "No description available"}
              </Typography>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleCardFlip}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Book;
