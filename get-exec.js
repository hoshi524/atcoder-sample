
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
execSync("node get.js  " + url + " " + exec);
execSync("node exec.js " + url + " " + exec);
