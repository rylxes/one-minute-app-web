import React, {useEffect, useState} from 'react'


const SearchBar = ({click = false}) => {

    const [searchClick, setSearchClick] = useState(false);
    useEffect(() => {
        setSearchClick(click)
    }, [click])

    return (
        <div>
            {searchClick &&
            <div className="search-draw">

                <div className="search-header">
                    <a className="close-wrap" onClick={() => setSearchClick(false)}><i className="las la-times"></i></a>
                </div>

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
            </div>
            }
        </div>
    )
}
export default SearchBar

