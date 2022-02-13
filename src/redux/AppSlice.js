export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_FAILURE = 'USER_REQUEST_FAILURE';

export const userDetailsRequest = payload => ({ type: USER_REQUEST, payload })
export const userDetailSuccess = payload => ({ type: USER_REQUEST_SUCCESS, payload })
export const userDetailFailure = payload => ({ type: USER_REQUEST_FAILURE, payload })

const initialState = {

}