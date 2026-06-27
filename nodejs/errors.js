class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}

const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

class Api404Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = 'Not found.',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}


const error = new Error("you are mad")
const syntaxerr = new SyntaxError("this is ynst err")
throw new Error(`User with id:  not found.`)
/*
use async/await and try-catch statements, or .catch() errors in promises.
Programmer errors are the errors caused by the programmer’s mistakes while writing a program
Array index out of bounds — trying to access the seventh element of the array when only six are available
Syntax errors — failing to close the curly braces while defining a JavaScript function
Reference errors — accessing a function or variables that are not defined
Deprecation errors and warnings — calling an asynchronous function without a callback
Type error — x object is not iterable
Failing to handle operational errors

Operational errors are issues during runtime due to external factors that can interrupt the program’s normal flow
Unable to connect server/database
Request timeout
Invalid input from the user
Socket hang-up
500 response from a server
File not found
*/