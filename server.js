const Koa = require('Koa')
const fs = require('fs')

const { getAST } = require('./middleWares/getAST')

const app = new Koa()
const rwaCode = fs.readFileSync('./index.js','utf-8')
app.use(getAST(rwaCode))

app.listen(3809, err => {
    if(err){
        console.log(err)
    }
    console.log('Start Koa Success')
})