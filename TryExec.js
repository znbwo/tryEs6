/**
 * Created by zhiningbo on 2017/4/16.
 */
var exec = require('child_process').exec;

var ls = exec('ls -l', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
    }
    console.log('Child Process STDOUT: ' + stdout);
});