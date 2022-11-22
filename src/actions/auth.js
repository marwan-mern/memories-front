import * as api from '../api'

export const signin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signin(formData) 
        // console.log(data)
        dispatch({ type: 'AUTH', data })
        history('/')
    } catch (error) {
        console.log(error)
    }

}

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData) 
        console.log(data)
        dispatch({ type: 'AUTH', data })
        history('/')
    } catch (error) {
        console.log(error)
    }

}