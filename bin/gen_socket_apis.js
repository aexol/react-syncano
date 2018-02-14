let camelCase = require('lodash.camelcase');

let endpoint = ({name, metadata: {parameters}}) => {
  let params = '';
  let firstLine = '';
  let outParams = '';
  let camelName = camelCase(name, '-');
  if (parameters) {
    params = Object.keys(parameters);
    outParams = params.map(p => `'${p}':${camelCase(p, '-')}`);
    params = params.map(p => camelCase(p, '-')).join(',\n\t');
    firstLine = params + ',\n\t';
  }

  return `
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
