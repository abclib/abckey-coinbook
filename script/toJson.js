const fs = require('fs')
const coinbook = require('../dist/index')

try {
  // Write json file
  fs.writeFileSync('dist/index.json', JSON.stringify(coinbook.default.book, null, 2), 'utf-8')

  // Read dist dir
  const dirFiles = fs.readdirSync('dist')

  // Delete unwanted files
  for (const item of dirFiles) {
    if (item !== 'index.json') fs.unlinkSync(`dist/${item}`)
  }
} catch (error) {
  throw error
}