export default function (dateToGen, displayYearBool) {
  const publishedDate = new Date(dateToGen)
  const monthIndex = publishedDate.getMonth()
  const dateDate = publishedDate.getDate()
  const dateYear = publishedDate.getFullYear()
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]
  const dateMonth = months[monthIndex]
  let dateString = `${dateMonth} ${dateDate}`
  if (displayYearBool) {
    dateString += `, ${dateYear}`
  }

  return dateString
}