import axios from "axios";
const Url="https://www.googleapis.com/books/v1/";

export default {
    getGoogleBooks: function(search) {
      let query = "volumes?q=" + search;
      return axios.get(Url + query)
    },
  
    
    getBooks: function() {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      // console.log("bookdata in API", bookData)
      return axios.post("/api/books", bookData);
    }
  };