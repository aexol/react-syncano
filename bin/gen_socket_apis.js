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
    params = params.map(p => camelCase(p, '-')).join(',\n\t');
    docparams = Object.keys(parameters).map(p => ` * @param {${parameters[p].type}} ${camelCase(p, '-')} - ${parameters[p].description}`)
    docparams = '\n'+docparams.join('\n')
    firstLine = params + ',\n\t';
  }

  return `
/**
 * ${description}${docparams}
 */
export const ${camelName} = ({
    ${firstLine}success = json => json,
    error = err => err
} = {}) => {
        return ['${name}',
        {
            ${outParams}
        },
        success,
        error
    ]
}
`;
};
const generateFile = sockets => {
  let allFile = `// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  `;
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