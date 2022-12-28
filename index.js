/*
=> MODULES
1. File based
2. Built in
3. Third party
*/
const fs = require("fs");
const path = require("path");
const os = require("os");
const pokemon = require("pokemon");
// const { readFileSync } = require("fs");

// Example 1 (Execute at last)
// This will read the data asynchronously
fs.readFile("./readFile.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Example 2 (Execute at first)
// This will read data synchronously
const data = fs.readFileSync("./readFileSync.txt", "utf-8");
console.log(data);

console.log("I'm first."); // (Execute at second)

// Example 3 (Write file asynchronously)
fs.writeFile("./writeFile.txt", "I'm fs module's writeFile method.", () => {
  console.log("File write successfull.");
});

// Example 4 (Write file synchronously)
fs.writeFileSync(
  "./writeFileSync.txt",
  "I'm fs module's writeFileSync method."
);

// Example 5 (Path module)
const ext = path.extname("/node.js/index.js");
console.log(ext);
console.log("DIRNAME: ", __dirname);
console.log("FILENAME: ", __filename);
const baseFolder = path.basename("c:/Users/Vedan/Desktop/node.js");
console.log(baseFolder);
const baseDir = path.dirname("c:/Users/Vedan/Desktop/node.js");
console.log(baseDir);
const filePath = path.join(__dirname, "index.js");
console.log(filePath);

// Example 6 (OS module)
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.homedir());

// Example 7 (Third party modules)
console.log(pokemon.random());
console.log(pokemon.all());
