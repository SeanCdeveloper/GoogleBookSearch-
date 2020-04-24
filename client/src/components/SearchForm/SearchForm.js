import React from 'react';

const SearchForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-12">
          <form>
            <div className="form-group">
              <input style={{ height: "2.5em" }} type="bookname" className="form-control"></input>
            </div>
            <button style={{ float: "right" }} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
