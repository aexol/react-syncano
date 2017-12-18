
export const castField = field => {
  let addons = {}
  switch (field.type) {
    case 'string':
      addons.type = 'text'
      break
    case 'text':
      addons.type = 'textarea'
      break
    case 'float':
      addons.type = 'text'
      addons.inputType = 'number'
      break
    case 'integer':
      addons.type = 'text'
      addons.inputType = 'number'
      break
    case 'array':
      addons.type = 'tag'
      break
    case 'geopoint':
      addons.type = 'geo'
      break
    case 'relation':
      addons.type = 'select'
      addons.multi = true
      break
    case 'reference':
      addons.type = 'select'
      break
    case 'boolean':
      // TODO: add checkbox
      addons.type = 'text'
      break
    default:
      break
  }
  return {
    ...field,
    ...addons
  }
}
export const generateUniq = () => {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
  return `${s4()}-${s4()}`
}
export const duts = ({state, element, value, array = false}) => {
  let updates = element.split('.')
  const reUpdate = (updates, value) => {
    if (!updates.length) {
      return value
    }
    let name = updates.pop()
    return reUpdate(updates, {
      ...updates.reduce((a, b) => (a[b] ? a[b] : {}), state),
      [name]: value
    })
  }
  return reUpdate(updates, value)
}
