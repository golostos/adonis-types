const fs = require("fs");
const path = require("path");
const { snakeCase } = require('lodash');
const pluralize = require('pluralize')

function camelCaseToSnakeCasePlural(camelCaseString = '') {
  var result = snakeCase(camelCaseString).split("_")
  var lastWord = pluralize(result.pop());
  return [...result, lastWord].join("_")
}
// Regular expression to match the substring
const regex = /declare class (\w+) /;

// Recursive function to read all files in a directory and its subdirectories
const walk = function (dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (path.extname(filePath).endsWith(".ts")) {
      // If the file is a ".map" file, read its contents and perform the replacement
      let contents = fs.readFileSync(filePath, "utf-8");
      const className = contents.match(/declare class (\w+) /)[1]
      const prismaModel = camelCaseToSnakeCasePlural(className)
      const replacement = `declare class ${className} extends Model `;
      contents = "import Model from 'adonis-types/Lucid/Lucid/Model';\n" 
        + `import { ${prismaModel} } from '@prisma/client'\n\n`
        + `declare interface ${className} extends ${prismaModel} { }\n`
        + contents.replace(regex, replacement);
      fs.writeFileSync(filePath, contents, "utf-8");
    }
  });
};

// Start the search in the current directory
walk(__dirname);