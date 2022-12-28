/*
=> MODULES
1. File based
2. Built in
3. Third party
*/
const fs = require("fs");
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

// 36:00
