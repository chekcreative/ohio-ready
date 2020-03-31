import {SET_DATE_FROM_CALENDAR, SET_DATE_FROM_DISPLAY, SET_DATE_FROM_SCROLL} from "../actions/actions";
import {today} from "../utils/dateDisplayOptions";

export const triggeringAgents = {
    DATE_DISPLAY: 'DATE_DISPLAY',
    NEWS_LIST: 'NEWS_LIST',
    CALENDAR_PICKER: 'CALENDAR_PICKER',
};

const initialState = {
    viewDate: today().toISOString()
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_FROM_DISPLAY:
            return Object.assign({}, state, {
                viewDate: action.viewDate,
                triggeringAgent: triggeringAgents.DATE_DISPLAY
            });
        case SET_DATE_FROM_SCROLL:
            return Object.assign({}, state, {
                viewDate: action.viewDate,
                triggeringAgent: triggeringAgents.NEWS_LIST
            });
        case SET_DATE_FROM_CALENDAR:
            return Object.assign({}, state, {
                viewDate: action.viewDate,
                triggeringAgent: triggeringAgents.CALENDAR_PICKER
            });
        default:
            return state;
    }
}

