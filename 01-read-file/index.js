const path = require("path");
const fs = require("fs");
const readStream = fs.createReadStream(path.join(__dirname, "text.txt"), "utf8");

readStream.on("error", (error) => reject(error));
readStream.on("data", (chunk) => console.log(chunk));
