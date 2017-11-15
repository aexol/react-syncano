const names = {
  region: 'id',
  services: 'title',
  propertytype: 'name'
}
export const display = name => (names[name] ? names[name] : 'id')
