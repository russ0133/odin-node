import fs from "fs";

try {
  const data = fs.readFileSync("hello.txt", "utf8");
  console.log("Data:", data);
} catch (error) {
  console.error(error);
}
