import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '13rem',
      margin: '10px 20px',
      flex: '1 1 13rem',
      padding: '20px 5px 5px 10px',
    //   height: 'fit-content'
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    image: {
        margin: '0 28px'
    },
    expand: {
      transform: 'rotate(0deg)',
        padding: '0',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    categories:  {
        color: 'black',
        textAlign: 'center',
        width: '11rem'
    },
    title: {
        fontWeight: 'bold',
        display: "-webkit-box",
        lineHeight: '18px',
        maxHeight: '41px', 
        boxOrient: "vertical",
        lineClamp: 3,
        wordBreak: "break-all",
        overflow: "hidden"
    },
    authors: {
        color: 'grey',
        fontSize: 14,
        padding: '0 3px'
    }

  }));

const Book = ({book}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {title, authors, categories, description, language, infoLink} = book.volumeInfo;
    const image = book.volumeInfo.imageLinks.thumbnail;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };    
 
    return (
    <Card className={classes.root}>
        <img src={image} alt={title} className={classes.image}/>
      <CardHeader titleTypographyProps={{variant:'p'}} className={classes.title}
        title={title}
      />
      <Typography className={classes.authors}>
        {authors && authors.length > 1? authors.join(', '): authors}</Typography>
      <CardActions disableSpacing>
      {<Avatar aria-label="recipe" className={classes.avatar}>
            {language.toUpperCase()}
          </Avatar>}
        <Typography variant="body2" color="textSecondary" component="p" className={classes.categories}>
          {categories?? "No categories"}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography variant="caption">{description?? "No description available"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
      );
}
 
export default Book;