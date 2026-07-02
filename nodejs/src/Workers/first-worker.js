import { parentPort } from "worker_threads";



//event name can me message, error, exit, online
parentPort.on("message", async (data) => {
    parentPort.postMessage(`this is message from ${data}`)
})