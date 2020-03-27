export const SET_DATE_FROM_DISPLAY = "SET_DATE_FROM_DISPLAY";


export function setDateFromDisplay(dateIndex) {
    return {
        type: SET_DATE_FROM_DISPLAY,
        dateIndex: dateIndex
    };
}

