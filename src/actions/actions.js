export const SET_DATE_FROM_DISPLAY = "SET_DATE_FROM_DISPLAY";
export const SET_DATE_FROM_SCROLL = "SET_DATE_FROM_SCROLL";
export const SET_DATE_FROM_CALENDAR = "SET_DATE_FROM_CALENDAR";


export function setDateFromDisplay(viewDate) {
  console.log("setting date from display")
  console.log("====================")
    return {
        type: SET_DATE_FROM_DISPLAY,
        viewDate: viewDate
    };
}

export function setDateFromScroll(viewDate) {
  console.log("setting date from scroll")
  console.log("====================")
    return {
        type: SET_DATE_FROM_SCROLL,
        viewDate: viewDate
    };
}

export function setDateFromCalendar(viewDate) {
  console.log("setting date from calendar")
  console.log("====================")
    return {
        type: SET_DATE_FROM_CALENDAR,
        viewDate: viewDate
    };
}

