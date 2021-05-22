


/**
 * 
 * @param {} ctx
 * 
 * @description:
 * 数据格式：
 * 1. ctx : {
 *      methods:
 *      headers:
 *      body:
 * 
 * }
 * @question require 加载机制是按照文件进行加载的。module.exports 输出的名称和requrie 的名称可以是不同的 ， 
 * 索引还是按照文件进行索引的;
 * 
 * 如何在自己的node 框架中实现controller， modules ， middleware，
 * 
 * 
 * 
 * 
 * @expect vbuilder cli 的实现本质还是基于node 进行实现的; 这也就是说一个基本的脚手架的实现是需要一个怎样的过程； 
 * 
 *  学习的路径还是通过github 进行学习关于脚手架方面的project；
 */



const getLogger = (ctx) => {
    const {methods , headers , body} = ctx;
    return JSON.stringify({
        methods:methods,
        headers:headers,
        body:body
    })
}


module.exports = class ContextLogger {
    constructor(ctx){
        this.ctx = ctx
    }
    showlogger() {
        const logger = getLogger(this.ctx)
        console.log('=====================' , logger)
        return logger;
    }
}







