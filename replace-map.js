const fs = require("fs");
const path = require("path");

// Regular expression to match the substring
const regex = /((?:\.\.\/)+node_modules)/g;

// The replacement string
const replacement = "../$1";

// Recursive function to read all files in a directory and its subdirectories
const walk = function (dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (path.extname(filePath).endsWith(".map")) {
      // If the file is a ".map" file, read its contents and perform the replacement
      let contents = fs.readFileSync(filePath, "utf-8");
      contents = contents.replace(regex, replacement);
      fs.writeFileSync(filePath, contents, "utf-8");
    }
  });
};

// Start the search in the current directory
walk(__dirname);