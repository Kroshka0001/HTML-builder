const path = require("path");
const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rline = readline.createInterface({ input, output });
const file = fs.createWriteStream(path.join(__dirname, "text.txt"), "utf8");

console.log(
    `\n
    Пожалуйста, введите что-то, чтобы добавить текст в файл text.txt.
    Please enter something to add text to the text.txt file.

    Если вы хотите завершить, введите «exit» или Ctrl+C
    If you want to exit, type «exit» or Ctrl+C
    \n`
);

process.on("exit", () => {

  console.log(`\n
    Ввод и запись файла успешно завершены.
    File input and write completed successfully.
    \n`
  );

});

rline.on("line", (line) => {

  if (line.toLowerCase() == "exit") {
    rline.close();

  } else {
    file.write(line + "\n");

  }

});
