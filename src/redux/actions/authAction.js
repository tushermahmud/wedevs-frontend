



import axios from 'axios'
import * as Types from '../constant/authConstant'





// Login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: Types.LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/login', { email, password }, config)
        console.log()
        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: data.user
        })
        console.log(data);
        localStorage.setItem('token', data.access_token);

    } catch (error) {
        // const { errors } = error.response.data
        console.log(error)
        dispatch({
            type: Types.LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Register user
export const register = (userData) => async (dispatch) => {
    try {
        console.log(userData);
        dispatch({ type: Types.REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/register', userData, config)

        dispatch({
            type: Types.REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        console.log(error.response);
        const { errors } = error.response.data
        dispatch({
            type: Types.REGISTER_USER_FAIL,
            payload: errors 
        })
    }
}





// Load user
export const loadUser = () => async (dispatch) => {
    try {

        dispatch({ type: Types.LOAD_USER_REQUEST })

        const { data } = await axios.get('/api/v1/me')

        dispatch({
            type: Types.LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: Types.LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {

        // await axios.post('/api/auth/logout')
        if(localStorage.getItem('token')){
            localStorage.removeItem("token");
            dispatch({
                type: Types.LOGOUT_SUCCESS,
            })
        }
        //01914001234

    } catch (error) {
        console.log(error.message);
        dispatch({
            type: Types.LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: Types.CLEAR_ERRORS
    })
}