import {generateDateDisplayOptions} from "./dateDisplayOptions";

describe("generateDateDisplayOptions", () => {
    const fakeToday = new Date(2020, 4, 27, 0);

    it("returns 'Today' and today's date as first element", () => {
       const actual = generateDateDisplayOptions(fakeToday, new Date());

       expect(actual[0].display).toEqual("TODAY");
       expect(actual[0].date).toMatch(/^2020-05-27/);
    });

    it("returns previous month and beginning of current month's date as second element", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2020, 0, 1));

        expect(actual[1].display).toEqual("APR");
        expect(actual[1].date).toMatch(/^2020-05-01/);
    });

    it("returns all months of the year leading up to current month when earliest date is in previous year", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2019, 11, 11));

        expect(actual[2].display).toEqual("MAR");
        expect(actual[2].date).toMatch(/^2020-04-01/);

        expect(actual[3].display).toEqual("FEB");
        expect(actual[3].date).toMatch(/^2020-03-01/);

        expect(actual[4].display).toEqual("JAN");
        expect(actual[4].date).toMatch(/^2020-02-01/);
    });

    it("returns months of the year between earliest month and current month when earliest date is in current year", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2020, 2, 11));

        expect(actual).toHaveLength(3);

        expect(actual[0].display).toEqual("TODAY");
        expect(actual[0].date).toMatch(/^2020-05-27/);

        expect(actual[1].display).toEqual("APR");
        expect(actual[1].date).toMatch(/^2020-05-01/);

        expect(actual[2].display).toEqual("MAR");
        expect(actual[2].date).toMatch(/^2020-04-01/);
    });

    it("returns previous year and beginning of current year as the last element when earliest date is in previous year", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2019, 2, 11));

        const n = actual.length;
        expect(actual[n-1].display).toEqual("2019");
        expect(actual[n-1].date).toMatch(/^2020-01-01/);
    });

    it("returns no previous years when earliest date is in current year", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2020, 0, 11));

        const n = actual.length;
        expect(actual[n-1].display).toEqual("JAN");
    });

    it("returns all previous years when earliest date is at least 2 calendar years prior", () => {
        const actual = generateDateDisplayOptions(fakeToday, new Date(2017, 2, 11));

        const n = actual.length;
        expect(actual[n-1].display).toEqual("2017");
        expect(actual[n-1].date).toMatch(/^2018-01-01/);

        expect(actual[n-2].display).toEqual("2018");
        expect(actual[n-2].date).toMatch(/^2019-01-01/);

        expect(actual[n-3].display).toEqual("2019");
        expect(actual[n-3].date).toMatch(/^2020-01-01/);
    });
});