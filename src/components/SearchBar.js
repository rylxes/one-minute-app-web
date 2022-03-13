import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { request } from '../services/utilities';
import { API_URI } from '../services/constants';
import { toast, ToastContainer } from 'react-toastify';
import SSRStorage from '../services/storage';

const storage = new SSRStorage();
const SearchBar = () => {
  const history = useHistory();
  const [isToast, setToast] = useState(false);
  const { control, register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const submitForm = async (formData) => {
    console.log(formData)

    const { data } = await request(`${API_URI}/polls/search`,
      'POST',
      true,
      { name: formData.searchField });
    console.log(data);
    if (data.length === 0) {
      toast.error("No results found !");
      setToast(true)
      return;
    }
    storage.setLocalStorage('SEARCH_RESULT', data);
    history.push('/search');
  }


  return (
    <>

      {isToast && (
        <div className="w-full mb-4">
          <ToastContainer/>
        </div>
      )}

      <div className="container no-bottom">
        <div className="sidebar-form search-form no-bottom">


          <form
            onSubmit={handleSubmit(submitForm)}
            className="searchForm" id="searchForm">
            <fieldset>

              <div className="formFieldWrap">
                <input
                  type="text"
                  ref={register({ required: true })}
                  name="searchField"
                  placeholder="Search Polls"/>
              </div>

              <div className="formSubmitButtonErrorsWrap">
                <input type="submit"
                       className="buttonWrap button button-blue searchSubmitButton"
                       value="Search"/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
export default SearchBar

