
import * as Types from '../constant/authConstant'


export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case Types.LOGIN_REQUEST:
        case Types.LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case Types.LOGIN_SUCCESS:
        case Types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case Types.LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case Types.LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case Types.LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case Types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case Types.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const userRegistrationReducers = (state = {  }, action) =>{
    switch (action.type) {
        case Types.REGISTER_USER_REQUEST:
            return { 
                loading: true, 
            }
        case Types.REGISTER_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                success:true
            }
        case Types.REGISTER_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }   
        default:
            return state;
    }
}


