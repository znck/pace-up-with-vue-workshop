const path = require('path')
const fs = require('fs')

/** @param {string} path */
function isDirectory(source) {
  return fs.lstatSync(source).isDirectory()
}

module.exports = {
  helpers: {
    exerciseNumber(name) {
      const exercises = path.resolve(__dirname, 'exercises')
      const dirs = fs
        .readdirSync(exercises)
        .map(file => path.resolve(exercises, file))
        .filter(isDirectory)

      return `${dirs.length + 1}`.padStart(2, '0')
    },
    /** @param {string} name */
    exerciseFileBasename: name =>
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
  },
}
