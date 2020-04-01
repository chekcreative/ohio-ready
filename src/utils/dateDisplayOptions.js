import * as moment from "moment";

const monthDisplayNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];

function allMonthsLeadingUpTo(currentMonth, currentYear) {
    return [...Array(currentMonth)].map((_, ix) => {
        return {
            display: monthDisplayNames[currentMonth - ix - 1],
            dateString: moment.utc([currentYear, currentMonth - ix - 1]).endOf('month').toISOString()
        }
    });
}

function allYearsBetween(earliestYear, currentYear) {
    return [...Array(currentYear - earliestYear)].map((_, ix) => {
        return {
            display: (currentYear - ix - 1).toString(),
            dateString: moment.utc([currentYear - ix - 1]).endOf('year').toISOString()
        }
    });
}

function allMonthsBetween(earliestMonth, currentMonth, currentYear) {
    return [...Array(currentMonth - earliestMonth)].map((_, ix) => {
        return {
            display: monthDisplayNames[currentMonth - ix - 1],
            dateString: moment.utc([currentYear, currentMonth - ix - 1]).endOf('month').toISOString()
        }
    });
}

export function generateDateDisplayOptions(currentDate, earliestDate) {
    let currentYear = currentDate.getUTCFullYear();
    let currentMonth = currentDate.getUTCMonth();

    let earliestYear = earliestDate.getUTCFullYear();
    let earliestMonth = earliestDate.getUTCMonth();

    let earlierMonths = [];
    let earlierYears = [];

    if (earliestYear < currentYear) {
        earlierMonths = allMonthsLeadingUpTo(currentMonth, currentYear);
        earlierYears = allYearsBetween(earliestYear, currentYear);
    } else {
        earlierMonths = allMonthsBetween(earliestMonth, currentMonth, currentYear);
    }

    return [
        {
            display: "TODAY",
            dateString: currentDate.toISOString()
        },
        ...earlierMonths,
        ...earlierYears,
    ];
}

export default function dateDisplayOptions(earliestDate) {
    const today = moment().utc().endOf('day').toDate();
    return generateDateDisplayOptions(today, earliestDate);
}