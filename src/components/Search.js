import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div id="search" className="search-draw">
        <div className="search-header">
          <a className="close-wrap" >
            <i className="las la-times" />
          </a>
        </div>
        <div className="container no-bottom">
          <div className="sidebar-form search-form no-bottom">
            <form
              action="#"
              method="post"
              className="searchForm"
              id="searchForm"
            >
              <fieldset>
                <div className="formFieldWrap">
                  <input
                    type="text"
                    name="searchField"
                    defaultValue="Search Polls"
                    className="contactField"
                    id="searchField"
                  />
                </div>
                <div className="formSubmitButtonErrorsWrap">
                  <input
                    type="submit"
                    className="buttonWrap button button-blue searchSubmitButton"
                    id="searchSubmitButton"
                    defaultValue="Search"
                    data-formid="contactForm"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
