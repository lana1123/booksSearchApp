import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    container: {
        backgroundColor: 'white',
    }
  }));

const Pagination = ({totalPages, handleClick}) => {
    const classes = useStyles();
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
 
    return (
        <ButtonGroup  variant="contained"  classes={{
            root: classes.container
          }}>
          { pages.map(num =>
          <Button key={num} onClick={() => handleClick(num)}>{num}</Button>
        )}
      </ButtonGroup>
    )
}

export default Pagination;



