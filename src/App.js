import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Book from './components/Book';
import Book2 from './components/Book2';
import axios from 'axios';
import Alert from './components/Alert';
import { Input, TextField } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';

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
  const [loading, setLoading] = useState(false);
  const apiKey = "AIzaSyBhPHCczWmAU6Rr_Oz_KUXDHPwozYSDa_o"; 
  const classes = useStyles(); 

  const getBook = (e) => {
    if(query !== "") {
      setLoading(true);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle=${query}&maxResults=9&key=${apiKey}`)
      .then(res => {
        // console.log(res);
        if(res.data.totalItems === 0) {
          setLoading(false);
          return setAlert("No search results. Please try again with another keyword");
        }
        else {
          setQuery("");
          setBooks(res.data.items);
          // console.log(res.data.items);
          setLoading(false);
          setAlert("");
          e.target.reset();
        }       
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
      autoFocus="false"
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
      {loading && <p>Loading</p>}
      {!loading && <div class="book-list">
        {books !== [] && books.map(book =>
          <Book key={book.id} book={book}/>
        )}
      </div>}
      
    </div>
  );
}

export default App;
