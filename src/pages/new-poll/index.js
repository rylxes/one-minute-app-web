import React, {useEffect, useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import SSRStorage from '../../services/storage';
import * as moment from 'moment';
import {isNil} from 'lodash-es';
import {ToastContainer} from "react-toastify";
import Select from "react-dropdown-select";
import {useHistory} from "react-router-dom";

const storage = new SSRStorage();
const maxNumberOfTitleCharacters = 25;
const maxNumberOfQuestionCharacters = 200;

const Index = () => {
    const history = useHistory();
    const {control, register, handleSubmit, reset, formState} = useForm();
    const {errors} = formState;
    const [category, setCategory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [pollType, setPollType] = useState([]);
    const [isToast, setToast] = useState(false);
    const [numberOfTitleCharacters, setTitleChar] = useState(0);
    const [numberOfQuestionCharacters, setQuestionChar] = useState(0);
    const [answerType, setAnswerType] = useState(0);
    const [imageURL, setImageURL] = useState(null);
    const [categoryForm, setCategoryForm] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [defaultDate, setDefaultDate] = useState(null);
    const [formData, setFormData] = useState({});


    const submitForm = async (data) => {


        let formData = {
            ...data, ...{
                openToAll: !isAuth ? true : data.openToAll
            }
        }
        reset(formData)
        console.log(formData);
        console.log(categoryForm);
        formData.image = null;
        formData.category = formData.category ?? selectedCategory;
        storage.setLocalStorage('toSubmit', formData);
        storage.setLocalStorage('imageURL', imageURL);
        history.push('/poll-preview');
    }

    const setCatValues = (val) => {
        setCategoryForm(val.pop())
    }
    const loadPoll = async () => {
        let formType = storage.getLocalStorage('formType');
        if (formType === 'edit') {
            let formData = storage.getLocalStorage('toSubmit');
            let imageURL = storage.getLocalStorage('imageURL');
            formData.image = null;
            reset(formData)
            setAnswerType(formData.answerType);
            setCategoryForm(formData.category.pop().name)
            setSelectedCategory(formData.category)
            //register({name: 'category'}, {defaultValue: formData.category})
            console.log(formData)
            setImageURL(imageURL)
        }
        // if (!isNil(this.theID)) {
        //     console.log(this.theID)
        //
        //     const {data} = await request(`${API_URI}/polls/`+id, 'GET', true);
        //     this.poll = data['data'];
        //     console.log(this.poll);
        //
        //     let form = {
        //         title: this.poll.title,
        //         answerType: this.poll.poll_type_id,
        //         closeDate: this.poll.close_date,
        //         // closeDate:  moment(this.data.value.closeDate).format('YYYY-MM-DD'),
        //         question: this.poll.question,
        //         image: this.poll.url,
        //         category: this.poll.category?.id,
        //         emailField: [''],
        //         openToAll: this.poll.open_to_everyone,
        //         A: this.poll?.pollOptions.find(input => input.name == 'A')?.value || null,
        //         B: this.poll?.pollOptions.find(input => input.name == 'B')?.value || null,
        //         C: this.poll?.pollOptions.find(input => input.name == 'C')?.value || null,
        //         D: this.poll?.pollOptions.find(input => input.name == 'D')?.value || null,
        //         E: this.poll?.pollOptions.find(input => input.name == 'E')?.value || null,
        //     }
        //     if (this.poll?.poll_type_id === 3) {
        //         this.showA2E = true
        //         this.myShowAE = true
        //     }
        //     console.log(form)
        //     this.category = this.poll.category;
        //     this.photo = this.poll.url;
        //     this.utils.setValue('PHOTO_URL', this.photo);
        //     this.data.setValue(form);
        // }

    }

    const defaults = () => {
        let settings = storage.getLocalStorage('SETTINGS');
        let userDetails = storage.getLocalStorage('USER_DETAILS') || {};
        let duration = parseInt(settings?.POLL_DURATION || 2);
        let new_date = moment(moment(), "YYYY-MM-DD").add(duration, 'days').format("YYYY-MM-DD")
        setDefaultDate(new_date);
        let formData = {
            closeDate: new_date,
            emailField: userDetails?.email || null,
            openToAll: true
        }
        console.log(formData)
        setFormData(formData)
        reset(formData)
        //  this.data.setValue(formData);

    }
    const resetForm = async () => {
        reset(formData)
        removePhoto();
    }


    const loadPollType = async () => {
        const {data} = await request(`${API_URI}/poll_types`, 'GET', true);
        console.log(data);
        setPollType(data);
        storage.setLocalStorage('pollTypesList', data);

    };

    const loadCategories = async () => {

        const {data} = await request(`${API_URI}/categories`, 'GET', true);
        console.log(data);
        setCategory(data);
        storage.setLocalStorage('categoriesList', data);
    };
    const onTitleModelChange = (e) => {
        setTitleChar(e.target.value?.length);
    }

    const onQuestionModelChange = (e) => {
        setQuestionChar(e.target.value?.length)
    }

    const onAnswerTypeModelChange = (e) => {
        setAnswerType(e.target.value)
    }

    const removePhoto = (e) => {
        setImageURL(null)
        storage.setLocalStorage('imageURL', null);

    }
    const uploadImage = (e) => {
        console.log(e.target.files)
        console.log(URL.createObjectURL(e.target.files[0]))
        const ImageUrl = URL.createObjectURL(e.target.files[0]);
        setImageURL(ImageUrl)
    }


    useEffect(() => {
        defaults()
        loadPoll()
        loadPollType();
        loadCategories();
        // this.editForm();
        let isAuth = storage.getLocalStorage('IS_AUTH');
        setAuth(isAuth)
    }, [])
    return (
        <div className="content">
            <div className="header-clear"></div>
            {isToast && (
                <div className="w-full mb-4">
                    <ToastContainer/>
                </div>
            )}

            <div className="container">
                <h2>Add New Poll</h2>
                <div className="container no-bottom">
                    <div className="add-new-form poll-form no-bottom">
                        <form
                            onSubmit={handleSubmit(submitForm)}
                            className="newPoll">
                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                    <input type="text" name="title" placeholder="Title"
                                           ref={register({required: true})}
                                           onChange={onTitleModelChange}
                                           maxLength={maxNumberOfTitleCharacters}
                                           className="contactField textField titleField"/>
                                    <div>
                                        {numberOfTitleCharacters} / {maxNumberOfTitleCharacters}
                                    </div>
                                </div>
                                <div className="formFieldWrap col-6">
                                    <Controller
                                        as={<Select options={category}
                                                    labelField='name'
                                                    valueField='id'/>}
                                        name="category"
                                        placeholder={categoryForm}
                                        control={control}
                                        defaultValue={null}
                                        className="contactField"
                                        ref={register({required: true})}
                                    />
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </fieldset>

                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                        <textarea name="question" placeholder="Type your question here"
                                                  ref={register({required: true})}
                                                  onChange={onQuestionModelChange}
                                                  maxLength={maxNumberOfQuestionCharacters}
                                                  className="textarea" rows="7">

                                        </textarea>
                                    <div>
                                        {numberOfQuestionCharacters} / {maxNumberOfQuestionCharacters}
                                    </div>
                                </div>
                                <div className="formFieldWrap form-group radio-wrap col-6">
                                    <p>How will people respond to your poll?</p>
                                    {pollType && pollType.map((value, key) => (
                                        <div key={key} className="form-radio">
                                            <input className="radio"
                                                   name="answerType"
                                                   ref={register({required: true})}
                                                   type="radio"
                                                   value={value.id}
                                                   onChange={onAnswerTypeModelChange}
                                            />
                                            <span className="radiomark"></span>
                                            <label className="c-label" htmlFor="customRadioInline">{value.name} </label>
                                        </div>
                                    ))}
                                </div>


                            </fieldset>

                            {answerType == 3 && (
                                <fieldset className="row">
                                    <div className="formFieldWrap col-3">
                                        <input type="text" name="A" placeholder="Option A Title"
                                               ref={register()}
                                               className="contactField textField titleField"/>
                                    </div>
                                    <div className="formFieldWrap col-3">
                                        <input type="text" name="B" placeholder="Option B Title"
                                               ref={register()}
                                               className="contactField textField titleField"/>
                                    </div>
                                    <div className="formFieldWrap col-3">
                                        <input type="text" name="C" placeholder="Option C Title"
                                               ref={register()}
                                               className="contactField textField titleField"/>
                                    </div>
                                    <div className="formFieldWrap col-3">
                                        <input type="text" name="D" placeholder="Option D Title"
                                               ref={register()}
                                               className="contactField textField titleField"/>
                                    </div>
                                    <div className="formFieldWrap col-3">
                                        <input type="text" name="E" placeholder="Option E Title"
                                               ref={register()}
                                               className="contactField textField titleField"/>
                                    </div>
                                </fieldset>
                            )}

                            <fieldset className="row">
                                <div className="formFieldWrap col-12">
                                    <p>Upload an image to your poll</p>
                                    <span className="tooltip show-submenu"><i
                                        className="las la-question-circle"></i></span>
                                    <div className="submenu tooltip-info">
                                        Email verification required to edit this item.
                                    </div>
                                    <div className="upload-wrap">
                                        <input name="image" className="pollImage" type="file"
                                               onChange={uploadImage}
                                               ref={register()}
                                               accept="image/png, image/gif, image/jpeg"/>
                                    </div>

                                    {imageURL && (
                                        <>
                                            <img src={imageURL} alt="Image" width={400} height={400}/>
                                            <button onClick={removePhoto} className="button button-red">Remove
                                            </button>
                                        </>
                                    )}


                                </div>
                            </fieldset>


                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                    <p>Open to Everyone?</p>
                                    <span className="tooltip show-submenu"><i
                                        className="las la-question-circle"></i></span>
                                    <div className="submenu tooltip-info">
                                        Email verification required to edit this item.
                                    </div>
                                    <div className="form-group check-wrap">
                                        <label className="c-label">Yes<input type="checkbox"
                                                                             ref={register()}
                                                                             name="openToAll"
                                                                             className="checkbox"/><span
                                            className="checkmark"></span></label>
                                    </div>
                                </div>
                                <div className="formFieldWrap col-6">
                                    <p>Close Date</p>

                                    {isAuth && <input className="form-control textField" type="text"
                                                      name="closeDate"
                                                      readOnly={!isAuth}
                                                      ref={register()}
                                                      placeholder="YYYY-MM-DD"/>
                                    }


                                    {/*{!isAuth && <input className="form-control textField" type="text"*/}
                                    {/*                   name="closeDate"*/}
                                    {/*                   readOnly*/}
                                    {/*                   value={defaultDate}*/}
                                    {/*                   ref={register({required: true})}/>*/}
                                    {/*}*/}


                                </div>
                            </fieldset>
                            <div className="row">
                                <div className="reg-notice col-12">
                                    <div className="notice notice-danger">
                                        <h4>Results of your poll will be visible for 2 days after the poll
                                            closes. </h4>
                                        <p className="triggerRegister anchor">Register to save the results
                                            permanently and access other features.</p>
                                    </div>
                                    <div id="registerWrap" className="formFieldWrap">
                                        <p>Your Email Address</p>
                                        <span className="tooltip show-submenu"><i
                                            className="las la-question-circle"></i></span>
                                        <div className="submenu tooltip-info">
                                            Email verification required to edit this item.
                                        </div>
                                        <input type="email" name="emailField"
                                               readOnly={isAuth}
                                               placeholder="you@yourdomain.com"
                                               ref={register({required: true})}
                                               className="contactField textField"/>
                                    </div>
                                </div>
                                <div className="formSubmitButtonErrorsWrap col-12">
                                    <input type="submit"
                                           className="buttonWrap button button-blue searchSubmitButton"
                                           value="Preview"/>

                                    <a onClick={resetForm}
                                       className="buttonWrap button button-red searchSubmitButton">Reset
                                        Poll
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
        ;
}

export default Index
