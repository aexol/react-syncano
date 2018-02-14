#!/bin/bash

getSocketSchemaFromURL() {
    URL=https://api.syncano.io/v2/instances/${1}/endpoints/sockets/
    if [ "${2}" != "${WILDCARD}" ]; then
        URL="${URL}${2}/"
    fi
    curl ${URL}
}

getSocketSchemaFromYAML() {
    node -e "const fs = require('fs')
const yaml = require('js-yaml')
const socketYml = yaml.safeLoad(fs.readFileSync('syncano/${1}/socket.yml'))
console.log(JSON.stringify({
    objects: [
        {
            name: '${1}/'+socketYml.name,
            metadata: socketYml
        }
    ]
}))
"
}


genApiJS() {
    node bin/gen_socket_apis.js >> ${API_JS}
}

generateFromRemoteSockets() {
    # Get instance name from package.json
    INSTANCE_NAME=$(node -e "console.log((require('./package.json').syncano || {}).instance)")
    if [ "${INSTANCE_NAME}" = "undefined" ]; then
        echo "Please set syncano.instance in package.json" 1>&2
        exit 1
    fi

    SOCKETS="$(node -e "let sockets = (require('./package.json').syncano || {}).sockets;
    if(typeof sockets === 'undefined') {
        sockets = ['*']
    }
    console.log(sockets.join(' '))
    ")"
    if [ "${SOCKETS}" != "undefined" ]; then
        SOCKETS="*"
    fi

    if [ "${SOCKETS}" = "*" ]; then
        SOCKETS="${WILDCARD}"
    fi

    # Allow for empty socket array to skip generation.
    if [ "${SOCKETS}" != "" ]; then
        for socket in "${SOCKETS}"; do
            getSocketSchemaFromURL ${INSTANCE_NAME} ${socket} | genApiJS
        done
    fi
}

generateFromLocalSockets() {
    for socket in $(ls syncano 2>/dev/null || true); do
        if [ -f "syncano/${socket}/socket.yml" ]; then
            getSocketSchemaFromYAML ${socket} | genApiJS
        fi
    done
}

WILDCARD="(WILDCARD)"
# Syncano api output file.
API_JS=$(node -e "console.log((require('./package.json').syncano || {}).apiJs)")
if [ "${API_JS}" = "undefined" ]; then
    API_JS="src/sockets/api.js"
fi
mkdir -p $(dirname ${API_JS})
rm -rf ${API_JS}

TRACK_LOCAL_SOCKETS=$(node -e "console.log((require('./package.json').syncano || {}).trackLocalSockets)")
if [ "${TRACK_LOCAL_SOCKETS}" = "undefined" ]; then
    TRACK_LOCAL_SOCKETS=false
fi
TRACK_REMOTE_SOCKETS=$(node -e "console.log((require('./package.json').syncano || {}).trackRemoteSockets)")
if [ "${TRACK_REMOTE_SOCKETS}" = "undefined" ]; then
    TRACK_REMOTE_SOCKETS=true
fi

if $TRACK_LOCAL_SOCKETS; then
    generateFromLocalSockets
fi

if $TRACK_REMOTE_SOCKETS; then
    generateFromRemoteSockets
fi