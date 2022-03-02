import React, {useEffect, useState} from 'react'
import SSRStorage from '../../services/storage';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const storage = new SSRStorage();


const Index = () => {
    const history = useHistory();
    const {control, register, handleSubmit, reset, formState} = useForm();
    const [pollType, setPollType] = useState([]);
    const [category, setCategory] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [answerType, setAnswerType] = useState(0);
    const {errors} = formState;
    const submitForm = async (data) => {
        //this.router.navigate(['/post-review']);
    }

    const editPoll = (data) => {
        storage.setLocalStorage('formType', 'edit');
        history.push('/add-new');
    }


    useEffect(() => {
        let toSubmit = storage.getLocalStorage('toSubmit');
        let allPollType = storage.getLocalStorage('pollTypesList');
        let allCategoriesList = storage.getLocalStorage('categoriesList');
        let imageURL = storage.getLocalStorage('imageURL');

        let pollType = allPollType.find((value) => value.id == toSubmit.answerType)
        let category = toSubmit.category.pop().name;

        setPollType(pollType);
        setImageURL(imageURL);
        setCategory(category);
        setAnswerType(toSubmit.answerType);
        reset(toSubmit)
        console.log(allPollType)
        console.log(toSubmit)
        console.log(pollType)
    }, [])


    return (
        <>
            <div className="content">
                <div className="header-clear"></div>

                <div className="container">
                    <h2>Preview Your Poll</h2>
                    <p>Preview your poll before it is posted, you can go back and make adjustments.</p>
                    <div className="container no-bottom">
                        <div className="add-new-form poll-form no-bottom">
                            <form
                                onSubmit={handleSubmit(submitForm)}
                                className="newPoll">
                                <fieldset className="row">
                                    <div className="formFieldWrap col-6">
                                        <p>Title</p>
                                        <input type="text"
                                               name="title"
                                               readOnly
                                               ref={register({required: true})}
                                               className="contactField textField"
                                        />
                                    </div>
                                    <div className="formFieldWrap col-6">
                                        <p>Category</p>
                                        <input type="email" name="category"
                                               readOnly
                                               value={category}
                                               className="contactField textField"
                                        />
                                    </div>
                                    <div className="formFieldWrap col-6">
                                        <p>Question</p>
                                        <input type="text" name="question"
                                               ref={register({required: true})}
                                               readOnly className="contactField textField"
                                        />
                                    </div>
                                    <div className="formFieldWrap form-group radio-wrap border-bottom col-6">
                                        <p>How will people respond to your poll?</p>
                                        <div className="form-radio">
                                            <label className="c-label"
                                                   htmlFor="customRadioInline2">{pollType.name}</label>
                                        </div>
                                    </div>
                                </fieldset>
                                {answerType == 3 && (
                                    <fieldset className="row">
                                        <div className="formFieldWrap col-3">
                                            <input type="text" name="A" readOnly
                                                   ref={register()}
                                                   className="contactField textField titleField"/>
                                        </div>
                                        <div className="formFieldWrap col-3">
                                            <input type="text" name="B" readOnly
                                                   ref={register()}
                                                   className="contactField textField titleField"/>
                                        </div>
                                        <div className="formFieldWrap col-3">
                                            <input type="text" name="C" readOnly
                                                   ref={register()}
                                                   className="contactField textField titleField"/>
                                        </div>
                                        <div className="formFieldWrap col-3">
                                            <input type="text" name="D" readOnly
                                                   ref={register()}
                                                   className="contactField textField titleField"/>
                                        </div>
                                        <div className="formFieldWrap col-3">
                                            <input type="text" name="E" readOnly
                                                   ref={register()}
                                                   className="contactField textField titleField"/>
                                        </div>
                                    </fieldset>
                                )}
                                <div className="decoration"></div>
                                <fieldset className="row">
                                    <div className="formFieldWrap border-bottom col-6">
                                        <p>Uploaded Image</p>
                                        <div className="upload-wrap preview-image">
                                            {imageURL && (
                                                <>
                                                    <img src={imageURL} alt="Image" width={400} height={400}/>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="formFieldWrap border-bottom col-6">
                                        <p>Open to Everyone?</p>
                                        <div className="form-group check-wrap">
                                            <label className="c-label">Yes
                                                <input type="checkbox"
                                                       readOnly
                                                       ref={register({required: true})}
                                                       name="openToAll" className="checkbox"/>
                                                <span
                                                    className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="formFieldWrap col-6">
                                        <p>Close Date</p>
                                        <input type="text" name="closeDate"
                                               readOnly
                                               ref={register({required: true})}
                                               className="contactField textField"
                                        />
                                    </div>
                                </fieldset>
                                <div className="decoration"></div>

                                <div className="reg-notice">
                                    <div className="notice notice-danger">
                                        <h4>Results of your poll will be visible for 2 days after the poll closes. </h4>
                                        <p className="triggerRegister anchor">Register to save the results permanently
                                            and
                                            access other features.</p>
                                    </div>
                                    <div id="registerWrap" className="formFieldWrap">
                                        <p>Your Email Address</p>
                                        <input type="email" name="emailField"
                                               readOnly
                                               ref={register({required: true})}
                                               className="contactField textField"
                                        />
                                    </div>
                                </div>

                                <div className="formSubmitButtonErrorsWrap">
                                    <input type="submit"
                                           className="buttonWrap button button-blue searchSubmitButton"
                                           value="Post"/>
                                    <a onClick={editPoll}
                                       className="buttonWrap button button-red searchSubmitButton">Edit Poll
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
        ;
}

export default Index
