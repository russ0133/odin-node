"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const fs_1 = __importDefault(require("fs"));
const events_1 = __importDefault(require("events"));
console.log("Helsloa");
console.log(process.env.USER_KEY);
let v = 0;
setInterval(() => {
    console.log("iteration: ", v);
    v++;
}, 1000);
try {
    const data = fs_1.default.readFileSync("hello.txt", "utf8");
    console.log("Data:", data);
}
catch (error) {
    console.error(error);
}
const eventEmitter = new events_1.default();
eventEmitter.on("start", (start, end) => {
    console.log("started: ", start, "to ", end);
});
eventEmitter.emit("start", 25, 56);
console.log("hey");
//# sourceMappingURL=index.js.map