import {formatDistanceToNow} from 'date-fns'

const showDate = publishedDate => {
  const initialDate = publishedDate.split(',')
  const secondaryDate = initialDate[0].split(' ')
  const month = [
    {key: 'Jan', value: 1},
    {key: 'Feb', value: 2},
    {key: 'Mar', value: 3},
    {key: 'Apr', value: 4},
    {key: 'May', value: 5},
    {key: 'Jun', value: 6},
    {key: 'Jul', value: 7},
    {key: 'Aug', value: 8},
    {key: 'Sep', value: 9},
    {key: 'Oct', value: 10},
    {key: 'Nov', value: 11},
    {key: 'Dec', value: 12},
  ]
  const monthData = month.filter(item => item.key === secondaryDate[0])
  const date = formatDistanceToNow(
    new Date(
      parseInt(initialDate[1]),
      monthData[0].value,
      parseInt(secondaryDate[1]),
    ),
  )
  const splitData = date.split(' ')
  const finalData = splitData[splitData.length - 1]
  let str = ''
  if (finalData === 'months') {
    str += splitData[0]
    str += ' '
    str += finalData
    str += ' ago'
  } else {
    str += splitData[1]
    str += ' '
    str += finalData
    str += ' ago'
  }
  return str
}

export default showDate
