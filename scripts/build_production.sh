# *Note this should be run from the workspace root
# i.e. ./scripts/build_production.sh
NODE_ENV='production' webpack -p --config webpack/dependencies.config.js
NODE_ENV='production' webpack -p --config webpack/src.config.js
