import React, {useEffect, useState} from 'react'
import SSRStorage from '../../services/storage';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import {toast, ToastContainer} from "react-toastify";
import {isNil} from 'lodash-es';
import {Roller} from "react-spinners-css";
import waiting from "../../assets/waiting.gif";

const storage = new SSRStorage();


const Index = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const {control, register, handleSubmit, reset, formState} = useForm();
    const [pollType, setPollType] = useState([]);
    const [category, setCategory] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [answerType, setAnswerType] = useState(0);
    const [coordinated, setCoordinates] = useState({});
    const [isToast, setToast] = useState(false);


    const {errors} = formState;


    const editPoll = (data) => {
        storage.setLocalStorage('formType', 'edit');
        history.push('/add-new');
    }

    const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(base64data);
            }
        });
    }
    const submit = async () => {
        try {
            setLoading(true)
            let fromForm = storage.getLocalStorage('toSubmit');
            let toSubmit = {
                title: fromForm.title,
                lat: coordinated.lat,
                long: coordinated.long,
                device_id: storage.getLocalStorage('DEVICE_ID'),
                uuid: storage.getLocalStorage('UUID'),
                category_id: fromForm.category.pop().id,
                poll_type_id: fromForm.answerType,
                //open_to_everyone: this.pollList.openToAll || true,
                open_to_everyone: isNil(fromForm.openToAll) ? true : fromForm.openToAll,
                question: fromForm.question,
                close_date: fromForm.closeDate,
                file: await getBase64FromUrl(imageURL),
                email: fromForm.emailField,
                options: undefined

            };
            const options = {
                A: fromForm.A,
                B: fromForm.B,
                C: fromForm.C,
                D: fromForm.D,
                E: fromForm.E
            };

            if (answerType == 3) {
                toSubmit.options = options;
            }

            const {data} = await request(`${API_URI}/polls`, 'POST', true, toSubmit);
            console.log(data);
            toast("Poll Created !");
            setToast(true)
            setLoading(false)
            history.push('/poll-submitted/' + data.id);
            console.log(toSubmit);
            setSuccess(true)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    const navigation = () => {
        const error = (error) => {
            console.log(error)
        }

        const success = async (position) => {
            let cord = {
                lat: position.coords.latitude,
                long: position.coords.longitude,
            }
            setCoordinates(cord);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    useEffect(() => {
        let toSubmit = storage.getLocalStorage('toSubmit');
        let allPollType = storage.getLocalStorage('pollTypesList');
        let allCategoriesList = storage.getLocalStorage('categoriesList');
        let imageURL = storage.getLocalStorage('imageURL');

        console.log(imageURL)
        let pollType = allPollType.find((value) => value.id == toSubmit.answerType)
        let category = toSubmit.category.pop().name;

        navigation();
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
                {isToast && (
                    <div className="w-full mb-4">
                        <ToastContainer/>
                    </div>
                )}
                <div className="container">
                    <h2>Preview Your Poll</h2>
                    <p>Preview your poll before it is posted, you can go back and make adjustments.</p>
                    <div className="container no-bottom">
                        <div className="add-new-form poll-form no-bottom">
                            <form
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

                                    {!loading && (
                                        <input type="submit"
                                               onClick={submit}
                                               className="buttonWrap button button-blue searchSubmitButton"
                                               value="Post"/>
                                    )}
                                    {loading && (
                                        <Roller/>
                                    )}
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
