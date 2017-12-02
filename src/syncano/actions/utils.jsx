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
