const path = require("path");
const fs = require("fs");

fs.readdir(

  path.join(__dirname, "secret-folder"),
  { withFileTypes: true },

  (error, files) => {

    console.log(`\n"secret-folder" file folder:\n`);

    if (error) console.log(error);

    else {

      files.forEach((file) => {

        const filePath = path.join(__dirname, "secret-folder", file.name);

        if (file.isFile()) {

          let fileInfo = `${path.basename(
            filePath,
            path.extname(filePath)

          )} -> ${path.extname(filePath).slice(1)} -> `;

          fs.stat(filePath, (error, stats) => {

            console.log(fileInfo + stats.size + " bytes");

          });

        }

      });

    }

  }

);
