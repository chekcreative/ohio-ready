export const SET_DATE_FROM_DISPLAY = "SET_DATE_FROM_DISPLAY";
export const SET_DATE_FROM_SCROLL = "SET_DATE_FROM_SCROLL";
export const SET_DATE_FROM_CALENDAR = "SET_DATE_FROM_CALENDAR";
export const TOGGLE_FULL_CHART = "TOGGLE_FULL_CHART";


export function setDateFromDisplay(viewDateString) {
    return {
        type: SET_DATE_FROM_DISPLAY,
        viewDateString: viewDateString
    };
}

export function setDateFromScroll(viewDateString) {
    return {
        type: SET_DATE_FROM_SCROLL,
        viewDateString: viewDateString
    };
}

export function setDateFromCalendar(viewDateString) {
     return {
        type: SET_DATE_FROM_CALENDAR,
        viewDateString: viewDateString
    };
}

export function openFullChart() {
  return {
    type: TOGGLE_FULL_CHART,
    isOpen: true
  }
}

export function closeFullChart() {
  return {
    type: TOGGLE_FULL_CHART,
    isOpen: false,
  }
}