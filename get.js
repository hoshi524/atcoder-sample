
const url = process.argv[2];
if (url === undefined || url.indexOf("atcoder") === -1) {
    console.log("required parameter");
    process.exit(1);
}
const output = ("sample/" + url + "/").replace(/https?:\/\//, "");

const fs = require('fs');
if (fs.existsSync(output) === false) {
    require('mkdirp')(output);
    require("jsdom").env({
        url,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (err, window) {
            if (err) throw err;
            const $ = window.$;
            $("section > h3").filter(function () {
                return $(this).text().trim().toLowerCase().indexOf("sample") !== -1;
            }).each(function (index) {
                const filepath = (index % 2 == 0 ? "input" : "output") + parseInt(index / 2) + ".txt";
                fs.writeFileSync(output + filepath, $(this).next().text());
                console.log("write:", output + filepath);
            });
        },
    });
}
