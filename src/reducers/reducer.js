import {SET_DATE_FROM_CALENDAR, SET_DATE_FROM_DISPLAY, SET_DATE_FROM_SCROLL} from "../actions/actions";

export const triggeringAgents = {
    DATE_DISPLAY: 'DATE_DISPLAY',
    NEWS_LIST: 'NEWS_LIST',
    CALENDAR_PICKER: 'CALENDAR_PICKER',
};

const initialState = {
    viewDateString: new Date().toISOString()
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_FROM_DISPLAY:
            return Object.assign({}, state, {
                viewDateString: action.viewDateString,
                triggeringAgent: triggeringAgents.DATE_DISPLAY
            });
        case SET_DATE_FROM_SCROLL:
            return Object.assign({}, state, {
                viewDateString: action.viewDateString,
                triggeringAgent: triggeringAgents.NEWS_LIST
            });
        case SET_DATE_FROM_CALENDAR:
            return Object.assign({}, state, {
                viewDateString: action.viewDateString,
                triggeringAgent: triggeringAgents.CALENDAR_PICKER
            });
        default:
            return state;
    }
}

