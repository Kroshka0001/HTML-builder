const path = require("path");
const fs = require("fs").promises;

async function copyDir(src, dest) {

  const entries = await fs.readdir(src, {withFileTypes: true});

  await fs.rm(dest, {force: true, recursive: true});
  await fs.mkdir(dest, {recursive: true});

  for (let entry of entries) {

    if (entry.isDirectory()) {

      await copyDir(path.join(src, entry.name), path.join(dest, entry.name));

    } else {

      await fs.copyFile(path.join(src, entry.name), path.join(dest, entry.name));

    }

  }

}

copyDir(path.join(__dirname, "files"), path.join(__dirname, "files-copy"));
