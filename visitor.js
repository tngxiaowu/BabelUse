const generator = require('@babel/generator').default
const { default: generate } = require('@babel/generator');
const t = require('@babel/types')

const fileHandler = {
        AssignmentExpression({ node }){
            const { left,right } = node;
            if(left.type === 'MemberExpression' && right.type === 'FunctionExpression'){
                const { object,property } = left
                if(object.property.name ==='prototype' ){
                    const funcName = property.name // 获取左边的文件名
                    const { code: funcCode } = generator(right) // 获取右边函数代码

                    
                    // 将ast语法树的右侧变为函数名
                    const replaceNode = t.identifier(funcName) 
                    node.right = replaceNode
                    // console.log(`name is ${funcName} && code is ${funcCode}`)



                }
            }
        }
}

module.exports = {
    fileHandler
}