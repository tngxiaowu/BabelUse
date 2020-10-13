const fs = require('fs')

const createFile = (fileName, code) =>{
    fs.writeFileSync(fileName, code, 'utf-8')
}

module.exports = {
    createFile
}