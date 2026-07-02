import { parentPort, workerData, Worker, isMainThread } from "worker_threads";
// Piscina

console.log(isMainThread);

let myWorker = new Worker('./first-worker.js', import.meta.url, {
    type: "module"
});

myWorker.postMessage("david");


myWorker.on("online", () => {
    console.log("Worker started");
    myWorker.postMessage("david");
});


myWorker.on("message", (res) => {
    console.log("recieved data is ", res)
})

myWorker.on("exit", () => {
    console.log("done")
})