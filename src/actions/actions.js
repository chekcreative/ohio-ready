export const SET_DATE_FROM_DISPLAY = "SET_DATE_FROM_DISPLAY";
export const SET_DATE_FROM_SCROLL = "SET_DATE_FROM_SCROLL";


export function setDateFromDisplay(viewDate) {
    return {
        type: SET_DATE_FROM_DISPLAY,
        viewDate: viewDate
    };
}

export function setDateFromScroll(viewDate) {
    return {
        type: SET_DATE_FROM_SCROLL,
        viewDate: viewDate
    };
}

