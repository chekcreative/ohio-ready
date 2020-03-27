import {SET_DATE_FROM_DISPLAY} from "../actions/actions";

const initialState = {
    dateIndex: 0
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_FROM_DISPLAY:
            return Object.assign({}, state, {dateIndex: action.dateIndex});
        default:
            return state;
    }
}

