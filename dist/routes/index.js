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
    return res.send(res.statusMessage);
});
routes.get('/pending', function (req, res) {
    return res.send(res.statusMessage);
});
routes.get('/failure', function (req, res) {
    return res.send(res.statusMessage);
});
exports.default = routes;
