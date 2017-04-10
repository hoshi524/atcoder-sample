
const url = process.argv[2];
const exec = process.argv[3];
if (url === undefined || url.indexOf("atcoder") === -1 || exec === undefined) {
    console.log("required parameter");
    process.exit(1);
}

const execSync = (exec) => {
    console.log("exec:" + exec);
    console.log(require('child_process').execSync(exec).toString());
};

execSync("node " + __dirname + "/get.js  " + url + " " + exec);
execSync("node " + __dirname + "/exec.js " + url + " " + exec);
