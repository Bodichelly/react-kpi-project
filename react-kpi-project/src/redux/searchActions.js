import {
    SWITCH_SEARCH_TYPE,
    SEARCH_BY_ADDRESS,
    SEARCH_BY_NAME,
    SEARCH_BY_NOTARY,
    CHANGE_NOTARY_TYPE,
    FETCH_REGION,
    SET_REGION,
    FETCH_AREA,
    SET_AREA,
    FETCH_SETTLEMENT,
    SET_SETTLEMENT,
    SET_ADDRESS,
    UPDATE_SEARCH_DATA,
    FETCH_SEARCH_DATA,
    CLEAR_SEARCH_DATA,
    SET_SEARCH_QUERY_DATA
} from './types'


const setSearchQueryData = (data) => {
    return {
        type: SET_SEARCH_QUERY_DATA,
        payload: data
    }
}

const clearSearchData = () => {
    return {
        type: CLEAR_SEARCH_DATA
    }
}

const changeNotaryType = (notaryTypes) => {
    return {
        type: CHANGE_NOTARY_TYPE,
        payload: notaryTypes
    }
}

const switchSearchType = (searchType) => {
    return {
        type: SWITCH_SEARCH_TYPE,
        payload: searchType
    }
}

const fetchRegion = () =>{
    return {
        type: FETCH_REGION
    }
}

const setRegion = (region) =>{
    return {
        type: SET_REGION,
        payload: region
    }
}

const fetchArea = (region) =>{
    return {
        type: FETCH_AREA,
        payload: region
    }
}

const setArea = (area) =>{
    return {
        type: SET_AREA,
        payload: area
    }
}

const fetchSettlement = (area) =>{
    return {
        type: FETCH_SETTLEMENT,
        payload: area
    }
}

const setSettlement = (settlement) =>{
    return {
        type: SET_SETTLEMENT,
        payload: settlement
    }
}

const updateSearchData = (data) =>{
    return {
        type: UPDATE_SEARCH_DATA,
        payload: data
    }
}

const fetchSearchData = (searchData) =>{
    return {
        type: FETCH_SEARCH_DATA,
        payload: searchData
    }
}

export default {
    changeNotaryType,
    switchSearchType,
    fetchRegion,
    setRegion,
    fetchArea,
    setArea,
    fetchSettlement,
    setSettlement,
    updateSearchData,
    fetchSearchData,
    clearSearchData,
    setSearchQueryData
}