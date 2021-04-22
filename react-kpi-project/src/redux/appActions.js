import {
    SWITCH_SEARCH_TYPE,
    SEARCH_BY_ADDRESS,
    SEARCH_BY_NAME,
    SEARCH_BY_NOTARY
} from './types'


const switchSearchType = (searchType) => {
    return {
        type: SWITCH_SEARCH_TYPE,
        payload: searchType
    }
}

export default {
    switchSearchType,

}