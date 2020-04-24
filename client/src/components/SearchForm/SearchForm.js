import React, {useState} from 'react';

const SearchForm = () => {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // console.log(event.target)
    const {name,value} = event.target;
    setBookSearch(value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    // console.log(event.target)
    // console.log(bookSearch);
    // event.preventDefault();
    // API.getRecipes(bookSearch)
    // .then(res => setBookSearch(res.data))
    // .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col md-12">
          <form>
            <div className="form-group">
              <input
               style={{ height: "2.5em" }} 
               type="bookname" 
               value={bookSearch}
               className="form-control"
               onChange={handleInputChange}
               />
            </div>
            <button 
            style={{ float: "right" }} 
            type="submit" 
            className="btn btn-primary"
            onClick={handleFormSubmit}
            >  
              Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
