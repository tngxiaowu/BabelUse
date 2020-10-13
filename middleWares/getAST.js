const { parse } = require("@babel/parser") 
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default; 

const { fileHandler } = require('./../visitor')

const codeFrameColumns = require("@babel/code-frame").default;

const getAST = rawCode => {
    return async ( ctx , next ) => {
        const ast = parse(rawCode)
        traverse(ast, fileHandler) // 改造节点树
        const tempCode = generator(ast).code
        console.log(`temp code is ${tempCode}`)
        // ast.program.body.unshift()
        ctx.body = ast;
    }
}   

module.exports = {
    getAST
}