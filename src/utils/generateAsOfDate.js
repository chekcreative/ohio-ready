// returns string formatted like "2020-01-01" for use with API requests
export default function (dateToGen) {
  const publishedDate = new Date(dateToGen)

  const dateYear = publishedDate.getUTCFullYear()

  let dateMonth = publishedDate.getUTCMonth() + 1
  if (dateMonth.toString().length === 1) {
    dateMonth = `0${dateMonth }`
  }

  let dateDate = publishedDate.getUTCDate()
  if (dateDate.toString().length === 1) {
    dateDate = `0${dateDate }`
  }

  let dateString = `${dateYear}-${dateMonth}-${dateDate}`

  return dateString
}