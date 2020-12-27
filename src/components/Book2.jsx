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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 233,
    },
    media: {
      height: '100%',
      paddingTop: '175%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
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
  }));

const Book2 = ({book}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {title, authors, categories, description, language, infoLink} = book.volumeInfo;
    const image = book.volumeInfo.imageLinks.thumbnail;
    console.log(authors.length);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };    
 
    return (
    
        <div class="book">
            <img src={image} alt={title}/>
            <p><strong>{title}</strong></p>
            <p>{authors.join(', ')}</p>
            <p>{categories}</p>
            {/* <p>{description}</p> */}
            <p>{language}</p>
            <p><a href={infoLink} target="_blank" rel="noopener noreferrer">More info...</a></p>
        </div>
        
      );
}
 
export default Book2;