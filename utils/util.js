const formatTime = date => {

  const day = date.getDate()

  return [day].map(formatNumber).join('')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

