import {
    CHANGE_USER_SEARCH_TYPE,
    HIDE_LOADER,
    SHOW_LOADER,
    CHANGE_USER_TYPE
} from './types'


const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}

const showLoader = () => {
    return {
        type: SHOW_LOADER,
    }
}

const changeUserType = (userType) => {
    return{
        type: CHANGE_USER_TYPE,
        payload: userType
    }
}

export default {
    hideLoader,
    showLoader
}