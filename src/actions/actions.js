export const SET_DATE_FROM_DISPLAY = "SET_DATE_FROM_DISPLAY";


export function setDateFromDisplay(viewDate) {
    return {
        type: SET_DATE_FROM_DISPLAY,
        viewDate: viewDate
    };
}

