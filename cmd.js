const fs = require('fs')
const object = require('/object.json')

fs.writeFileSync(
    '/exists',
    object.hasOwnProperty(process.env.key)
)