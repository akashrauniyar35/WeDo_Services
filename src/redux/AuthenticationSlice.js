export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginRequest = payload => ({ type: LOGIN_REQUEST, payload })
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload })

const initialState = {
    emial: '',
    password: '',
    isAuthenticated: false,
    isLoading: false,
    userToken: ''
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { isLoading: true }

        case LOGIN_SUCCESS:
            return { isLoading: false, isAuthenticated: true }

        default:
            return state;
    }
};


export default authenticationReducer;

