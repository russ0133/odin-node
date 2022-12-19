require("dotenv").config();
import fs from "fs";
import EventEmitter from "events";

console.log("Helsloa");
console.log(process.env.USER_KEY);
/* 
axios
  .get("https://example.com/todos")
  .then((res) => {
    console.log("statusCode:", res.status);
  })
  .catch((err) => console.error("GET Error code: ", err.response.status));

axios
  .post("https://example.com/todos")
  .then((res) => console.log("statusCode:", res.status))
  .catch((err) => console.error("POST Error code: ", err.response.status));
 */
/* fs.writeFile("he.txt", "yo", (err) => console.log(err));

fs.rename("new.txt", "hi.txt", (err) => console.log(err)); */

let v = 0;

setInterval(() => {
  console.log("iteration: ", v);
  v++;
}, 1000);

try {
  const data = fs.readFileSync("hello.txt", "utf8");
  console.log("Data:", data);
} catch (error) {
  console.error(error);
}
const eventEmitter = new EventEmitter();
eventEmitter.on("start", (start, end) => {
  console.log("started: ", start, "to ", end);
});

eventEmitter.emit("start", 25, 56);

console.log("hey");
