import axios from "axios";
import axiosHeader from "./axiosHeader";
import generateDateString from "./generateDateString";
import * as moment from "moment";

export const AS_OF_KEY = "as_of";
export const TOTAL_CASES_KEY = 'TOTAL CASES';
export const TOTAL_DEATHS_KEY = 'TOTAL DEATHS';
export const VERTICAL_FILL_KEY = 'VERTICAL_FILL_KEY';


const dateOfEarliestData = moment.utc("2020-02-21");


export function getSaturdayCaseTotals() {
  return getCaseTotals()
    .then(({caseTotals, maxCaseCount}) => {
      return caseTotals
        .filter(dataPoint => dataPoint.day_of_week === 6)
        .map((dataPoint) => {
          return {
            [AS_OF_KEY]: dataPoint[AS_OF_KEY],
            [TOTAL_CASES_KEY]: dataPoint[TOTAL_CASES_KEY],
            [TOTAL_DEATHS_KEY]: dataPoint[TOTAL_DEATHS_KEY],
            [VERTICAL_FILL_KEY]: maxCaseCount - dataPoint[TOTAL_CASES_KEY] - dataPoint[TOTAL_DEATHS_KEY],
          }
        })
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDailyCaseTotals() {
  return getCaseTotals()
    .then(({caseTotals, maxCaseCount}) => {
      return caseTotals.map((dataPoint) => {
        return {
          [AS_OF_KEY]: dataPoint[AS_OF_KEY],
          [TOTAL_CASES_KEY]: dataPoint[TOTAL_CASES_KEY],
          [TOTAL_DEATHS_KEY]: dataPoint[TOTAL_DEATHS_KEY],
          [VERTICAL_FILL_KEY]: maxCaseCount - dataPoint[TOTAL_CASES_KEY] - dataPoint[TOTAL_DEATHS_KEY],
        }
      })
    })
    .catch((err) => {
      console.log(err);
    });
}


function getCaseTotals() {
  const url = `https://ohioready-api.zwink.net/v1/case_summary.agg/?aggregate[Sum]=total&aggregate[Sum]=deaths&aggregate[Sum]=recovered&group_by[as_of]`;

  return axios.get(url, axiosHeader)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.data) {
          const caseTotals = res.data.data
            .map((dataPoint) => {
              return {
                date: moment.utc(dataPoint.as_of),
                day_of_week: moment.utc(dataPoint.as_of).day(),
                [AS_OF_KEY]: generateDateString(dataPoint.as_of, false),
                [TOTAL_CASES_KEY]: dataPoint.sum_total,
                [TOTAL_DEATHS_KEY]: dataPoint.sum_deaths,
              }
            })
            .filter(dataPoint => dataPoint.date >= dateOfEarliestData);

          const maxCaseCount = caseTotals.reduce((acc, cur) => {
            return Math.max(acc, cur[TOTAL_CASES_KEY] + cur[TOTAL_DEATHS_KEY]);
          }, 0);

          return {
            caseTotals,
            maxCaseCount
          }
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
}