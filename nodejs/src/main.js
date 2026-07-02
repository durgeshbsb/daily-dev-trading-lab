import emitter from "./Events/emitter.js";
import "./Events/events.js";
import "./Events/worker.js";

console.log("done");
emitter.removeAllListeners("error", () => {
    console.log("error event removed")
});

// emitter.emit("error", "this is error");
emitter.
    console.log(emitter.eventNames());