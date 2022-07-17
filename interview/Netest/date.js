const pattern = /(\d{4})(\d{2})(\d{2})/

function getDaysBetween(startDate, endDate) {
  let sDate, eDate
  const start = Date.parse(String(startDate).replace(pattern, '$1-$2-$3'))
  const end = Date.parse(String(endDate).replace(pattern, '$1-$2-$3'))
  if (start < end) {
    sDate = start
    eDate = end
  } else {
    sDate = end
    eDate = start
  }

  const days = (eDate - sDate) / (1 * 24 * 60 * 60 * 1000)
  return days
}

const d1 = 19000111
const d2 = 20210322
const days = console.log(getDaysBetween(d1, d2))
