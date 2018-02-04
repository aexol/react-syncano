import moment from 'moment'
const receive = ({ type, data, target }) => {
  const receivers = {
    text: data => data,
    tag: data => data.map(d => ({ label: d, value: d })),
    datetime: data=> moment(data),
  }
  return receivers[type] ? receivers[type](data) : data
}
export default receive
