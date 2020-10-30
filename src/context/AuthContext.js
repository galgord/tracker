import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
     try {
        const response = await trackerAPI.post('/signup',{email,password})
        console.log(response.data)
     } catch (err) {
         console.log(err.message)
     }  
    }
}
const signin = (dispatch) => {
    return ({ email, password }) => {
    }
}
const signout = (dispatch) => {
    return () => {
        //signout
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
)