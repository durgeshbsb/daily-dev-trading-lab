import express from "express";
const app = express()
import { spawn, fork, exec } from "child_process"; //equal to const spawn = require('child_process').spawn

/*
https://alvinlal.netlify.app/blog/single-thread-vs-child-process-vs-worker-threads-vs-cluster-in-nodejs#thesolution


child_process.spawn()
child_process.fork()
child_process.exec()


spawn("comand to run","array of arguments",optionsObject)
 fork("path to module","array of arguments","optionsObject")

*/

// spawn
app.get("/ls", (req, res) => {
    const ls = spawn("ls", ["-lash", req.query.directory])
    ls.stdout.on("data", data => {
        //Pipe (connection) between stdin,stdout,stderr are established between the parent
        //node.js process and spawned subprocess and we can listen the data event on the stdout

        res.write(data.toString()) //date would be coming as streams(chunks of data)
        // since res is a writable stream,we are writing to it
    })
    ls.on("close", code => {
        console.log(`child process exited with code ${code}`)
        res.end() //finally all the written streams are send back when the subprocess exit
    })
})

// fork
app.get("/isprime", (req, res) => {
    const childProcess = fork("./forkedchild.js") //the first argument to fork() is the name of the js file to be run by the child process
    childProcess.send({ number: parseInt(req.query.number) }) //send method is used to send message to child process through IPC
    const startTime = new Date()
    childProcess.on("message", message => {
        //on("message") method is used to listen for messages send by the child process
        const endTime = new Date()
        res.json({
            ...message,
            time: endTime.getTime() - startTime.getTime() + "ms",
        })
    })
})

app.get("/testrequest", (req, res) => {
    res.send("I am unblocked now")
})



app.listen(7000, () => console.log("listening on port 7000"))