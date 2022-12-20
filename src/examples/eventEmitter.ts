import EventEmitter from "events";

export const eventEmitter = new EventEmitter();
eventEmitter.on("file", (file) => {
  console.log("File started: " + file);
});
