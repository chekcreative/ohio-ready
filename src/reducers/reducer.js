import {SET_DATE_FROM_CALENDAR, SET_DATE_FROM_DISPLAY, SET_DATE_FROM_SCROLL} from "../actions/actions";
import {today} from "../utils/dateDisplayOptions";

const initialState = {
    viewDate: today().toISOString()
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_FROM_DISPLAY:
            return Object.assign({}, state, {viewDate: action.viewDate});
        case SET_DATE_FROM_SCROLL:
            return Object.assign({}, state, {viewDate: action.viewDate});
        case SET_DATE_FROM_CALENDAR:
            return Object.assign({}, state, {viewDate: action.viewDate});
        default:
            return state;
    }
}

