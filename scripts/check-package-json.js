const glob = require('glob')
let packageJsonFiles = glob.sync('./packages/*/package.json')
console.warn(packageJsonFiles)