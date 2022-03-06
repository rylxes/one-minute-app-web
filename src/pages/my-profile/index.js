import React, {useEffect, useState} from 'react'
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import SSRStorage from '../../services/storage';
import * as _ from "underscore";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";

const storage = new SSRStorage();
const TOKEN_KEY = 'jwt-token';

const Index = ({children}) => {

    const [isAuth, setAuth] = useState(false);
    const [defaultVaue, setDefaultVaue] = useState( {});
    const [user, setUser] = useState(null);
    const [isToast, setToast] = useState(false);
    const [isSuccessfulAuth, setIsSuccessfulAuth] = useState(false);
    const [userDetails, setUserDetails] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;


    const loadCategories = async () => {
        const {data} = await request(`${API_URI}/categories`, 'GET', true);
        setCategoriesList(data)
        console.log(data);
    }

    const loadData = async () => {
        loadCategories();
        let isAuth = storage.getLocalStorage('IS_AUTH');
        setAuth(isAuth)
        let userDetails = storage.getLocalStorage('USER_DETAILS') || {};
        setUserDetails(userDetails)

        if (!_.isEmpty(userDetails)) {
            console.log(userDetails)
            let interest = '';
            try {
                interest = !_.isEmpty(userDetails?.interest) ? JSON.parse(userDetails?.interest) || 1 : 1
            } catch (e) {
                interest = !_.isEmpty(userDetails?.interest) ? userDetails?.interest || 1 : 1
            }

            let form = {
                name: userDetails?.name,
                email: userDetails?.email,
                lastName: userDetails?.lastName || null,
                firstName: userDetails?.firstName || null,
                gender: userDetails?.gender || null,
                interest
            }
            setDefaultVaue(form)
            console.log(form)
        }
        console.log(userDetails);
    }

    const updateProfile = async (data) => {
        console.log(data);
        const res = await request(`${API_URI}/users/1`, 'PATCH', true, data);
        console.log(res);
        if (res) {
            storage.setLocalStorage('USER_DETAILS', res['data']);
            toast("profile edited !");
            setToast(true)
        }
    }
    const confirmAuthentication = async (data) => {
        try{console.log(data)
            let form = {
                code: data.code,
                uuid: storage.getLocalStorage('UUID')
            }
            const res = await request(`${API_URI}/codeLogin`, 'POST', true, form);
            console.log(res)
            // @ts-ignore
            storage.setLocalStorage('USER_DETAILS', res['data'].user);
            let userDetails = res['data'].user;
            setUserDetails(userDetails)
            storage.setLocalStorage('IS_AUTH', true);
            console.log(res['data'].user);
            const token = res['data'].accessToken;
            if (token) {
                storage.setLocalStorage(TOKEN_KEY, token);
                toast("Authenticated!");
                setToast(true)
                loadData();
                //this.router.navigate(['/my-profile']);
            }
        }catch (e){
            toast.error(e.message.message);
            setToast(true)
            console.log(e)


        }

    }
    const authenticateUser = async (data) => {
        console.log(data)

        let form = {
            email: data.email,
            uuid: storage.getLocalStorage('UUID')
        }
        const result = await request(`${API_URI}/authenticate`, 'POST', true, form);
        console.log(result)
        if (result.success) {
            setIsSuccessfulAuth(true)
        }
    }


    useEffect(() => {
        loadData();
    }, [])


    return (
        <>
            <div id="content" className="snap-content">
                <div className="content">
                    <div className="header-clear"></div>

                    {isToast && (
                        <div className="w-full mb-4">
                            <ToastContainer />
                        </div>
                    )}

                    <div className="container">
                        <div className="profile-title">
                            <h4>Hi {userDetails.name || 'Guest'},</h4>
                            <p>Update your profile</p>
                        </div>
                        <div className="profile-image">
                            <div className="profile-image-wrap">
                                <img src="images/user_d.png" alt="Profile Image"/>
                                <div className="edit-profile-image">
                                    <span onClick="editProfileImage()">Edit <i className="las la-edit"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="decoration"></div>
                    {isAuth && (
                        <div className="container">
                            <div className="container no-bottom">
                                <div className="profile-form poll-form no-bottom">
                                    <form
                                        onSubmit={handleSubmit(updateProfile)}
                                        className="updateProfile">
                                        <fieldset>
                                            <div className="formFieldWrap">
                                                <label htmlFor="userName">Username</label>
                                                <input type="text" name="name"
                                                       ref={register({required: true})}
                                                       defaultValue={defaultVaue.name}
                                                       className="textField bg"/>
                                            </div>
                                            <div className="formFieldWrap">
                                                <label htmlFor="firstName">First Name</label>
                                                <input type="text" name="firstName"
                                                       defaultValue={defaultVaue.firstName}
                                                       ref={register({required: true})}
                                                       className="textField bg"
                                                       />
                                            </div>
                                            <div className="formFieldWrap">
                                                <label htmlFor="lastName">Surname</label>
                                                <input type="text" name="lastName"
                                                       defaultValue={defaultVaue.lastName}
                                                       ref={register({required: true})}
                                                       className="textField bg"/>
                                            </div>
                                            <div className="formFieldWrap">
                                                <label htmlFor="userEmail">Email Address</label>
                                                <input type="email" name="email"
                                                       defaultValue={defaultVaue.email}
                                                       ref={register({required: true})}
                                                       className="textField bg" readOnly/>
                                            </div>

                                            <div className="formFieldWrap">
                                                <label htmlFor="userGender">Gender</label>
                                                <select name="gender" className="contactField selectField"
                                                        defaultValue={defaultVaue.gender}
                                                        ref={register({required: true})}>
                                                    <option value="Male" title="Male">Male</option>
                                                    <option value="Female" title="Female">Female</option>
                                                </select>
                                            </div>

                                            <div className="formSubmitButtonErrorsWrap">
                                                <input type="submit"
                                                       className="buttonWrap button button-blue searchSubmitButton"
                                                       value="Save"/>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                        </div>
                    )}

                    {!isAuth && !isSuccessfulAuth && (
                        <div className="container">
                            <div className="container no-bottom">
                                <div className="profile-form poll-form no-bottom">
                                    <form
                                        onSubmit={handleSubmit(authenticateUser)}
                                        className="updateProfile">
                                        <fieldset>
                                            <div className="formFieldWrap">
                                                <label htmlFor="userEmail">Email Address</label>
                                                <input type="email" name="email"
                                                       ref={register({required: true})}
                                                       className="textField bg"/>
                                            </div>


                                            <div className="formSubmitButtonErrorsWrap">
                                                <input type="submit"
                                                       className="buttonWrap button button-blue searchSubmitButton"
                                                       value="Authenticate"/>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                        </div>
                    )}

                    {!isAuth && isSuccessfulAuth && (
                        <div className="container">
                            <div className="container no-bottom">
                                <div className="profile-form poll-form no-bottom">
                                    <form
                                        onSubmit={handleSubmit(confirmAuthentication)}
                                        className="updateProfile">
                                        <fieldset>
                                            <div className="formFieldWrap">
                                                <label htmlFor="userEmail">Auth Code</label>
                                                <input type="text" name="code"
                                                       ref={register({required: true})}
                                                       className="textField bg"/>
                                            </div>


                                            <div className="formSubmitButtonErrorsWrap">
                                                <input type="submit"
                                                       className="buttonWrap button button-blue searchSubmitButton"
                                                       value="Confirm"/>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>

                        </div>
                    )}

                    <div className="bottom-fix"></div>
                </div>
            </div>
        </>
    );
}

export default Index
