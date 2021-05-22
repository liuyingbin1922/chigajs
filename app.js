'use strict';

const {chiga} = require('../lib/index')

const application = new chiga({PORT:3000});
application.startapp(() => {
    console.log('server is running' )
})
/**
 * 
 * version： 0.0.1 , server is running
 * @description: 
 * 
 */