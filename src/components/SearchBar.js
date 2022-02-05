import React, {useEffect, useState} from 'react'


const SearchBar = () => {

    return (
        <>
            
            <div className="container no-bottom">
                <div className="sidebar-form search-form no-bottom">


                    <form action="#" method="post" className="searchForm" id="searchForm">
                        <fieldset>

                            <div className="formFieldWrap">
                                <input onFocus="if (this.value=='Search') this.value = ''"
                                        onBlur="if (this.value=='') this.value = 'Search Polls'" type="text"
                                        name="searchField"
                                        value="Search Polls" className="contactField" id="searchField"/>
                            </div>

                            <div className="formSubmitButtonErrorsWrap">
                                <input type="submit"
                                        className="buttonWrap button button-blue searchSubmitButton"
                                        id="searchSubmitButton" value="Search" data-formId="contactForm"/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>        
        </>
    )
}
export default SearchBar

