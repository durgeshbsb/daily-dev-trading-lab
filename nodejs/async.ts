function afun() {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
        count++;
    }

    return new Promise(() => count);
}

let myProm = new Promise((res, rej) => {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
        count++;
    }
    res(count);
})
/*
The async keyword only means:
 
"This function always returns a Promise."
 
It does not make the code inside asynchronous.
*/

console.log("start");
// let count = afun();
// console.log(count.then((value) => value));
// console.log(afun());

// function* powers(n: any) {
//     for (let current = n; ; current *= n) {
//         yield current;
//     }
// }

// for (let power of powers(3)) {
//     if (power > 50) break;
//     console.log(power);
// }

myProm.then((value) => console.log(value));

console.log("end");

export { };
