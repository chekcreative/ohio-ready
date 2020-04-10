import axios from "axios";
import axiosHeader from "./axiosHeader";
import generateDateString from "./generateDateString";
import * as moment from "moment";

export const AS_OF_KEY = "as_of";
export const TOTAL_CASES_KEY = 'TOTAL CASES';
export const TOTAL_DEATHS_KEY = 'TOTAL DEATHS';


export function getSaturdayCaseTotals() {
  return getDailyCaseTotals()
    .then((newChartData) => {
      return newChartData.filter(dataPoint => dataPoint.day_of_week === 6);
    })
    .catch((err) => {
      console.log(err);
    });
}


export function getDailyCaseTotals() {
  const url = `https://ohioready-api.zwink.net/v1/case_summary.agg/?aggregate[Sum]=total&aggregate[Sum]=deaths&aggregate[Sum]=recovered&group_by[as_of]`;

  return axios.get(url, axiosHeader)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.data) {
          return res.data.data
            .map((dataPoint) => {
              return {
                day_of_week: moment.utc(dataPoint.as_of).day(),
                [AS_OF_KEY]: generateDateString(dataPoint.as_of, false),
                [TOTAL_CASES_KEY]: dataPoint.sum_total,
                [TOTAL_DEATHS_KEY]: dataPoint.sum_deaths,
              }
            });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
}