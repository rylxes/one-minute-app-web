import React, {useEffect, useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import waiting from '../../assets/waiting.gif';
import {Roller} from "react-spinners-css";
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import SSRStorage from '../../services/storage';
import {NotificationError, NotificationSuccess} from "../../services/notifications";

const storage = new SSRStorage();
const Index = () => {
     const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isAuth, setAuth] = useState(false);
    const [settings, setSettings] = useState({});
    const [defaultValues, setDefaultValues] = useState(null);
    const {handleSubmit, errors, register, setValue, reset} = useForm({ mode: 'onBlur' })

    useEffect(() => {

        let isAuth = storage.getLocalStorage('IS_AUTH') || false;
        let settings = storage.getLocalStorage('SETTINGS');
        setValue('duration', (!isAuth) ? 2 : settings?.POLL_DURATION || '');
        setValue('decency', settings?.DECENCY_FILTER || 0 );
        setAuth(isAuth)

    }, [])



    const onSubmitFn = async (settingsForm) => {


        try {
            setLoading(true)
            console.log(settingsForm)

            let form = {
                POLL_DURATION: settingsForm.duration,
                DECENCY_FILTER: settingsForm.decency || false,
            }
            console.log(form);

            const {data} = await request(`${API_URI}/settings`, 'POST', true, form);
            let formData = {};
            data.forEach((value) => {
                let pan = {}
                pan[value.key] = value.value;
                formData = {...formData, ...pan};
            })
            storage.setLocalStorage('SETTINGS', formData)
            setLoading(false)
            setSuccess(true)

        } catch (e) {
            setLoading(false)
            console.log(e)

        }


    }

    return (
        <div className="content">
            <div className="header-clear"></div>

            {success && (
                <div className="w-full mb-4">
                    <NotificationSuccess message="Settings saved"/>
                </div>
            )}

            <div className="container">
                <h2>Global Settings</h2>
            </div>

            <div className="decoration"></div>
            <form
                onSubmit={handleSubmit(onSubmitFn)}
                className="form flex flex-wrap w-full">

                <div className="container">
                    <div className="global-settings">

                        <div className="settings-group">
                            <div className="item-title">
                                <h4>Set Poll Duration (Days)</h4>
                            </div>
                            <div className="set-switch">
                                <input className="form-control textField" type="number" id="poll_duration" step="1"
                                       name="duration"
                                       ref={register()}
                                       placeholder="30"/>
                            </div>
                        </div>

                        <div className="settings-group">
                            <div className="item-title">
                                <h4>Enable/Disable Deceny Filter</h4>
                            </div>
                            <label className="set-switch">
                                <input type="checkbox" name="decency" ref={register()}/>
                                <div className="set-slider-wrap">
                                    <span className="options">No</span>
                                    <span className="set-slider round"></span>
                                    <span className="options">Yes</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="show-more-wrap row">
                    <div className="col-12">
                        <button
                            className="buttonWrap button-blue"
                            disabled={loading}
                            type="submit">
                            {loading ? (
                                <img src={waiting} alt="submitting"/>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        {loading && (
                            <Roller/>
                        )}
                    </div>
                </div>
                <div className="bottom-fix"></div>
            </form>
        </div>
    );
}

export default Index
