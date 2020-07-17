"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var paymentsController_1 = require("../controllers/paymentsController");
var routes = express_1.Router();
routes.get('/', function (request, response) {
    return response.json({ message: 'Hello World' });
});
routes.post('/checkout', paymentsController_1.checkout);
routes.get('/success', function (req, res) {
    return res.render('success_screen');
});
routes.get('/pending', function (req, res) {
    return res.render('pending_screen');
});
routes.get('/failure', function (req, res) {
    return res.render('failure_screen');
});
exports.default = routes;
