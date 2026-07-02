# 11 june 2026

event loop deep dive
┌───────────────────────────┐
   │           timers          │
   └─────────────┬─────────────┘
                 │
                 v
   ┌───────────────────────────┐
┌─>│     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │      close callbacks      │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤           timers          │
   └───────────────────────────┘


# 18 june 2026
nodejs is asynchronous event-driven JavaScript runtime
'node:http' is usedd for web server and express also use this

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking. In addition, libraries in Node.js are generally written using non-blocking paradigms. Accordingly, blocking behavior is the exception rather than the norm in Node.js.


## errors
use async/await and try-catch statements, or .catch() errors in promises.
> Programmer errors are the errors caused by the programmer’s mistakes while writing a program
1. Array index out of bounds — trying to access the seventh element of the array when only six are available
2. Syntax errors — failing to close the curly braces while defining a JavaScript function
3. Reference errors — accessing a function or variables that are not defined
4. Deprecation errors and warnings — calling an asynchronous function without a callback
5. Type error — x object is not iterable
6. Failing to handle operational errors

> Operational errors are issues during runtime due to external factors that can interrupt the program’s normal flow
1. Unable to connect server/database
2. Request timeout
3. Invalid input from the user
4. Socket hang-up
5. 500 response from a server
6. File not found

> system errors usually occur when an application violates an operating system constraint. For example, a system error will occur if an application attempts to read a file that does not exist.
> User Specified Errors is created by extending the base Error object like custom errors for more verbosity
> assertion errors is build in module for testing errors


# 2 july 2026
## worker threads (multi threading)
- bullmq, Piscina are used instead of node:worker_threads
| Tool               | Analogy                        | Responsibility                                                                                |
| ------------------ | ------------------------------ | --------------------------------------------------------------------------------------------- |
| **BullMQ**         | Receptionist / Project Manager | Keeps a list of jobs, schedules them, retries failures, assigns work to workers.              |
| **BullMQ Worker**  | Employee                       | Takes one job from the queue and decides how to perform it.                                   |
| **worker_threads** | Specialist assistant           | Helps with one CPU-intensive task in parallel.                                                |
| **Piscina**        | Team manager                   | Maintains a pool of specialist assistants so you don't have to hire a new one for every task. |

API
  │
  ▼
BullMQ Queue
  │
  ▼
BullMQ Worker
  │
  ├── If job is I/O-bound (DB, email, HTTP)
  │      └── Execute directly
  │
  └── If job is CPU-bound
         └── Piscina
                │
                ▼
          worker_threads

### Worker threads:
- Worker is for creating new threads
- parentPort is for workers files to communicate back to main file where worker called
- workerData is for giving initial configuration while creating a worker 
- myWorker.postMessage("david") is for sending arguments or calling to initiate the function process
- myWorker.on("message", () => {}) message, error, exit, online
- isMainthread will be if it's in main thread or worker thread
- threadId will give id for particular worker
- MessageChannel , MessagePort

on main.js
let myWorker = new Worker("./download-worker.js", import.meta.url,
{
   type: "module",
   fileName: "data.csv",
   name: "david"
}
);
myWorker.postMessage("david");
 myWorker.on("message", () => {}) message, error, exit, online
and in worker.js
parentPort.on("message", async (data) => {});

### BullMQ


### Piscina






## events
import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("start", () => {});
emitter.removeAllListeners("start",() => {});
emitter.emit("start", arguments);
emitter.eventNames();
emitter.once("start, () => {});
