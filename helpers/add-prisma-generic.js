const fs = require("fs");
const path = require("path");

// Regular expression to match the substring
// declare class Request extends Model 
const regex = /(declare class \w+ extends Model) /;

// Recursive function to read all files in a directory and its subdirectories
const walk = function (dir) {
  fs.readdirSync(dir).forEach(file => {
    // const dir = __dirname
    // const file = './Question.d.ts'
    const filePath = path.join(dir, file);
    if (path.extname(filePath).endsWith(".ts")) {
      // If the file is a ".map" file, read its contents and perform the replacement
      let contents = fs.readFileSync(filePath, "utf-8");
      const prismaModel = contents.match(/declare interface \w+ extends (\w+) /)[1]
      // const prismaModel = camelCaseToSnakeCasePlural(className)
      // const replacement = `declare class ${className} extends Model `;
      contents = contents.replace(regex, `$1<${prismaModel}> `);
      fs.writeFileSync(filePath, contents, "utf-8");
    }
  });
};

walk(__dirname);