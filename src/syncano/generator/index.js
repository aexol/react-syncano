
import { allsockets } from "./sockdev";

let camel = (str,char) => str.split(char).map((a,i) => i === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("")

let endpoint = ({
    name,
    metadata: {
        parameters
    }
}) => {
    let params = ''
    let firstLine = ''
    let outParams = ''
    let camelName = camel(name,"-")
    camelName = camel(camelName,"/")
    if (parameters) {
        params = Object.keys(parameters)
        outParams = params.map( p=> 
            `'${p}':${camel(p,"-")}`
        )
        params = params.map(p=>camel(p,'-')).join(',\n\t')
        firstLine = params+",\n\t"
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
`
}
export const generateFile = (sockets) => {
    let allFile = ``
    for (var sock of sockets.objects) {
        allFile += endpoint(sock)
        allFile += '\n'
    }
    return allFile
}
console.log(generateFile(allsockets))