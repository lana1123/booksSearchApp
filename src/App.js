import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import axios from 'axios';
import Alert from './components/Alert';
import { Input } from '@material-ui/core';
import Books from './components/Books';
import Pagination from './components/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import {BOOKS_PER_PAGE} from './utility/constants';


const useStyles = makeStyles((theme) => ({
  root: {
   color: 'white',
   backgroundColor: 'rgba(52, 52, 52, 0.8)',
    "&&&:before": {
      borderBottom: "none"
  },
    "&&:after": {
      borderBottom: "none"
    }
  },
  spinner: {
   color: 'white'
  },
  search: {
    color: 'white',
    backgroundColor: 'grey',
    padding: '0 10px',
    borderRadius: '5px',
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }

}));
const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [alert, setAlert] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const apiKey = "AIzaSyBhPHCczWmAU6Rr_Oz_KUXDHPwozYSDa_o"; 
  const classes = useStyles(); 
  const maxResults = "40";

  const getBook = (e) => {
    if(query !== "") {
      setLoading(true);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle=${query}&maxResults=${maxResults}&key=${apiKey}`)
      .then(res => {
        if(res.data.totalItems === 0) {
          setLoading(false);
          return setAlert("No search results. Please try again with another keyword");
        }
        else {
          
          setBooks(res.data.items);
          setTotalPages(Math.ceil(res.data.items.length / BOOKS_PER_PAGE));
        }       
      }).then(res => {
          setQuery("");
          setAlert("");
          e.target.reset();
          setLoading(false);
      }).catch(err => {
        setLoading(true);
        return setAlert(err.response.data.error.message);
      });
      
      }
      else {
        setAlert("Please fill in the search box");
      }
  }

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = (num) => {
    setPage(num);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getBook(e);
    
  }

  return (
    <div className="App">
      <h1>Book Search App</h1>
      <form onSubmit={onSubmit}>
      {alert !== "" && <Alert alert={alert}/>}
      <Input 
      type="text"
      placeholder="Enter book title" 
      autoComplete="off" 
      onChange={onChange}
      name="query"
      classes={{
        root: classes.root
      }}
      />
      <Input 
      type="submit" 
      value="search"
      classes={{
        root: classes.search
      }}
      />
      </form>
      <div className="spinner-container">{loading &&   <div className="spinner">
      <CircularProgress  classes={{
        root: classes.spinner
      }}/>
    </div>}</div>
      
      {!loading && totalPages>1 && <p className="pageNumber">Page {page}</p>}
      {!loading && <Books books={books} page={page}/>}
      <Pagination totalPages={totalPages} handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
