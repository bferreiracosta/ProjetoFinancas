const express = require('express')

module.exports = function(server){

    //api de routes
    const router = express.Router();
    server.use('/api', router);

    //rotas da api

    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(router, '/billingCycles');

    const billingSumaryService = require('../api/blillingSumary/billingSumaryService');
    router.route('/billingSummary').get(billingSumaryService.getSumary);

}