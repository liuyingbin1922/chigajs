'use strict'

/**
 * 基础扩展;
 * 
 * ctx:{
 *  app:{},
 *  model:{},
 *  service:{}
 * }
 * 
 * 
 * 
 */
 module.exports =  class BaseContextClass {
	constructor(ctx) {
		this.ctx = ctx
		this.app = ctx.app
		this.service = ctx.service
        this.model = ctx.model
	}
}