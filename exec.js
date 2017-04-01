
const url = process.argv[2];
const exec = process.argv[3];
if (url === undefined || url.indexOf("atcoder") === -1 || exec === undefined) {
    console.log("required parameter");
    process.exit(1);
}

const fs = require('fs');
const dir = ("sample/" + url + "/").replace(/https?:\/\//, "");
if (fs.existsSync(dir) === false) {
    console.log("not exists directory");
    process.exit(1);
}

const execSync = require('child_process').execSync;
for (var i = 0; i < 10; ++i) {
    const inputFile = dir + "input" + i + ".txt";
    const outputFile = dir + "output" + i + ".txt";
    if (fs.existsSync(inputFile) === false || fs.existsSync(outputFile) === false) {
        process.exit(0);
    }
    const input = fs.readFileSync(inputFile, "utf8");
    const output = fs.readFileSync(outputFile, "utf8");
    const result = execSync(exec, {
        input,
        timeout: 10000,
    }).toString();
    if (output === result) {
        console.log("case", i, ": passed");
    } else {
        console.log("case", i, ": wrong answer");
        console.log("input :", input);
        console.log("output:", output);
        console.log("result:", result);
    }
}