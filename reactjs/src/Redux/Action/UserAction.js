import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../Constants/UserConstant'
import axios from "axios";


export const createUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        let link ='https://apiecommerce-qpji.onrender.com/api/userinsert'
        // let link = `http://localhost:4000/api/userinsert`
        const { data } = await axios.post(link, formData)
        console.log(data);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }


}
export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        let link ='https://apiecommerce-qpji.onrender.com/api/verifylogin'
        // let link = `http://localhost:4000/api/verifylogin`
        const { data } = await axios.post(link, { email, password })
        console.log(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }


}
// Logout User
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/pn/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

// / for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};