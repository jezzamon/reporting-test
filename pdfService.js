var Prince = require("prince");
 
Prince()
    .option('style', 'test.css')
    .inputs(["test.html"])
    .output("test.pdf")
    .execute()
    .then(function () {
        console.log("OK: done");
    }, function (error) {
        console.log("ERROR: ", util.inspect(error));
    })