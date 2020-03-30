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

export function today() {
    let dt = new Date();
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())
}

function allMonthsLeadingUpTo(currentMonth, currentYear) {
    return [...Array(currentMonth)].map((_, ix) => {
        return {
            display: monthDisplayNames[currentMonth - ix - 1],
            dateString: new Date(currentYear, currentMonth - ix, 1).toISOString()
        }
    });
}

function allYearsBetween(earliestYear, currentYear) {
    return [...Array(currentYear - earliestYear)].map((_, ix) => {
        return {
            display: (currentYear - ix - 1).toString(),
            dateString: new Date(currentYear - ix, 0, 1).toISOString()
        }
    });
}

function allMonthsBetween(earliestMonth, currentMonth, currentYear) {
    return [...Array(currentMonth - earliestMonth)].map((_, ix) => {
        return {
            display: monthDisplayNames[currentMonth - ix - 1],
            dateString: new Date(currentYear, currentMonth - ix, 1).toISOString()
        }
    });
}

export function generateDateDisplayOptions(currentDate, earliestDate) {
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    let earliestYear = earliestDate.getFullYear();
    let earliestMonth = earliestDate.getMonth();

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