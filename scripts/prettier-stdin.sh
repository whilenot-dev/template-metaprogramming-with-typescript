#!/usr/bin/env bash

set -euo pipefail
shopt -s expand_aliases

DIRNAME=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
PROJECT_DIR=$( realpath "${DIRNAME}/.." )
NODE_MODULES_BIN=$( realpath "${PROJECT_DIR}/node_modules/.bin" )

# shellcheck disable=SC2139
alias prettier="${NODE_MODULES_BIN}/prettier --config '${PROJECT_DIR}/.prettierrc'"

TMP_FILE=$( mktemp --suffix=.ts )
trap cleanup 1 2 3 6 exit
cleanup() {
    rm "${TMP_FILE}"
}

cat > "${TMP_FILE}"
prettier -w "${TMP_FILE}" > /dev/null
cat "${TMP_FILE}"
