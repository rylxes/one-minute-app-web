import React, {useEffect, useState} from 'react'


const SearchBar = () => {

    return (
        <>
            
            <div className="container no-bottom">
                <div className="sidebar-form search-form no-bottom">


                    <form action="#" method="post" className="searchForm" id="searchForm">
                        <fieldset>

                            <div className="formFieldWrap">
                                <input type="text"
                                        name="searchField"
                                        value="Search Polls" className="contactField"/>
                            </div>

                            <div className="formSubmitButtonErrorsWrap">
                                <input type="submit"
                                        className="buttonWrap button button-blue searchSubmitButton"
                                        id="searchSubmitButton" value="Search"/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>        
        </>
    )
}
export default SearchBar

