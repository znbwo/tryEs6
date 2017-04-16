// setTimeout(()=>{},5000)
// process.on('SIGINT', function () {
//     console.log('Got a SIGINT. Goodbye cruel world');
//     process.exit(0);
// });



process.on('SIGTERM', function(){
    console.log('terminating');
    process.exit(1);
});

process.on('exit', function() {
    console.log('Goodbye');
});

setTimeout(function(){
    console.log('sending SIGTERM to process %d', process.pid);
    process.kill(process.pid, 'SIGTERM');
}, 500);

setTimeout(function(){
    console.log('never called');
}, 1000);