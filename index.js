// 一种ES5时代非常经典的代码组织方式
(function(){
    var Due = function(){}

    Due.prototype.func1 = function(){
        console.log(1)
    }
    Due.prototype.func2 = function(){
        console.log(2)
    }
    Due.prototype.func3 = function(){
        console.log(3)
    }
})()