import {SET_DATE_FROM_DISPLAY} from "../actions/actions";
import {today} from "../utils/dateDisplayOptions";

const initialState = {
    viewDate: today()
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_FROM_DISPLAY:
            return Object.assign({}, state, {viewDate: action.viewDate});
        default:
            return state;
    }
}

