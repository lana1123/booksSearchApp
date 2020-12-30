import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    height: "100%",
    width: "265px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 5px 10px 5px",
  },
  image: {
    margin: "0 28px",
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

  const cardStyle = {
    display: "flex",
    margin: "0 0 40px 0",
    minHeight: "360px",
  };

  return (
    <div className="book-container">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        containerStyle={cardStyle}
      >
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
              onClick={handleCardFlip}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography variant="body2">
              {description
                ? description.length >= 320
                  ? description.slice(0, 375) + "..."
                  : description
                : "No description available"}
            </Typography>
            <IconButton
              onClick={handleCardFlip}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardContent>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default Book;
