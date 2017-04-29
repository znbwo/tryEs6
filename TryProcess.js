// setTimeout(()=>{},5000)
// process.on('SIGINT', function () {
//     console.log('Got a SIGINT. Goodbye cruel world');
//     process.exit(0);
// });

let path=require("path")

// process.on('SIGTERM', function () {
//     console.log('terminating');
//     process.exit(1);
// });
//
// process.on('exit', function () {
//     console.log('Goodbye');
// });
//
// setTimeout(function () {
//     console.log('sending SIGTERM to process %d', process.pid);
//     process.kill(process.pid, 'SIGTERM');
// }, 500);
//
// setTimeout(function () {
//     console.log('never called');
// }, 1000);

// for (let oneEnv of process.env) {
//     console.log(oneEnv)
// }
for(var i in process.env) {
    console.log(i)
}
console.log(typeof process.env)
// console.log("env" + process.env)
// console.log("cwd " + process.cwd())
// console.log(". " +path.resolve("."))