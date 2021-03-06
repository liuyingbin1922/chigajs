'use strict';

const koaApplication = require('koa2');
const http = require('http')
const logger = require('./core/logger/index')
const controller = require('./core/controller/index')
const model = require('./core/model/index')
const service = require('./core/service/index')


module.exports = class chiga extends koaApplication {
    constructor(app , options = {}){
        super(options)
        this.app = app;
        this.options = options
    }

    startapp(cb){   
        const { PORT } = this.options
        const server = http.createServer(this.callback())
        const ctxlogger = new logger.contextLogger({
            methods:'get',
            headers:'application/json',
            body:{
                data:'',
                status:'ok'
            }
        });
        ctxlogger.showlogger({
            methods:'get',
            headers:'',
            body:{}
        })
        if (cb && typeof cb === 'function') {
        return server.listen(PORT, cb.bind(this))
        }

        return server.listen(PORT, () => {
            console.log(`server is runing on${PORT}`)
        })
    }
}

