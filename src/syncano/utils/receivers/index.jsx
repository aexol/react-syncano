const receive = ({type, data, target}) => {
  const receivers = {
    geo: data => `${data.latitude},${data.longitude}`,
    text: data => data,
    tag: data => data.map(d => ({label: d, value: d}))
  }
  return receivers[type] ? receivers[type](data) : data
}
export default receive
