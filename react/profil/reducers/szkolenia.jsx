import * as types from '../constants/szkolenia.jsx';
const szkolenia = (state,action) =>{
    switch (action.type) {
        case types.GET_SZKOLENIA:
            return action.szkolenia
        case types.ADD_SZKOLENIE:
            return [...state,action.szkolenie]
        default:
            return [];
    }
}
export default szkolenia;
