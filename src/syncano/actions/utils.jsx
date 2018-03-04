export const generateUniq = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
  return `${s4()}-${s4()}`
}
export const duts = ({ state, element, value, array = false }) => {
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
export const shouldFormData = (obj, namespace) => {
  var formKey
  var isFd = false
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        var hasFd = shouldFormData(obj[property], property)
        if (hasFd) {
          return true
        }
      } else {
        if (obj[property] instanceof File) {
          return true
        }
      }
    }
  }
  return false
}
export const toFormData = (obj, form, namespace) => {
  var fd = form || new FormData()
  var formKey
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        toFormData(obj[property], fd, property)
      } else {
        fd.append(formKey, obj[property])
      }
    }
  }
  return fd
}