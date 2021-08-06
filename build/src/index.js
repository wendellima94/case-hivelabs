"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("dotenv/config");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
var port = 4000 || 3333;
app.listen(port, function () {
    console.log("Listening to port " + port + "...");
});
//# sourceMappingURL=index.js.map