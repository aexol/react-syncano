const receive = ({ type, data, target }) => {
  const receivers = {
    text: data => data,
    tag: data => data.map(d => ({ label: d, value: d })),
  }
  return receivers[type] ? receivers[type](data) : data
}
export default receive
