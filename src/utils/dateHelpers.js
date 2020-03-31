import * as moment from "moment";

export function publishedDate(newsObject) {
  return moment.utc(newsObject.attributes.published_on, "YYYY-MM-DD").toDate()
}