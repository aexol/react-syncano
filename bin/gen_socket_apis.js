let camelCase = require('lodash.camelcase');

let endpoint = ({ name, metadata: { parameters, description = '' } }) => {
  let params = '';
  let firstLine = '';
  let outParams = '';
  let docparams = '';
  let camelName = camelCase(name, '-');
  if (parameters) {
    params = Object.keys(parameters);
    outParams = params.map(p => `'${p}':${camelCase(p, '-')}`);
    params = params.map(p => camelCase(p, '-')).join(',\n\t\t');
    docparams = Object.keys(parameters).map(p => ` * @param {${parameters[p].type}} ${camelCase(p, '-')} - ${parameters[p].description}`)
    docparams = '\n' + docparams.join('\n')
    firstLine = params
  }

  return `
/**
 * ${description}${docparams}
 */
export const ${camelName} = (
  {
    ${firstLine}
  },
  options={
    method:'post'
  }
) => {
        return s[options.method](
        '${name}',
        toFormDataOrObject({
            ${outParams}
        })
      )
}
`;
};
const generateFile = sockets => {
  let allFile = `// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  `;
  allFile += `\n import {s} from '../server/config'\n`
  allFile += `
const toFormDataOrObject = (obj, form, namespace) => {
  var fd = new FormData()
  var formKey
  var isJson = true
  for (var property in obj) {
    if(obj[property] instanceof File){
      isJson = false
    }
    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      fd.append(property, JSON.stringify(obj[property]))
    } else {
      fd.append(property, obj[property])
    }
  }
  if(isJson){
    return obj
  }
  return fd
}
`
  for (var sock of sockets.objects) {
    allFile += endpoint(sock);
    allFile += '\n';
  }
  return allFile;
};
let socketSchema = '';
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    socketSchema += chunk;
  }
});
process.stdin.on('end', () => {
  console.log(generateFile(JSON.parse(socketSchema)));
});
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */