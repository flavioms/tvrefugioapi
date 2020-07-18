"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT || 5000, function () {
    console.log("Server started on port " + process.env.PORT);
});
