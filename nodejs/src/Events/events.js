import emitter from "./emitter.js";

emitter.on("start", () => {
    console.log("start event received");
});

emitter.on('error', (err) => {
    console.error('Error in event emitter:', err);
});


