'use strict';

const baseClass = require('../baseclass')


/**
 * ctx对象获取请求的body信息;
 */
module.exports = class baseController extends baseClass {
   get render(){
       return this.ctx
       .render.bind(this.ctx)
   } 
}
