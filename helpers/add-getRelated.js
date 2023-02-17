const fs = require("fs");
const path = require("path");

// Regular expression to match the substring
// declare class Request extends Model 
const regex = /(declare class \w+ extends Model) /;

function addSerializer(src = '') {
  if (!src.includes("import VanillaSerializer")) src = "import VanillaSerializer from 'adonis-types/Lucid/Lucid/Serializers/Vanilla';" + '\n' + src
  return src;
}

    // user(): BelongsTo<User>;
    // bots(): BelongsToMany<Bot>;
    // type(): BelongsTo<ActionType>;
    // getRelated(key: 'user'): User;
    // getRelated(key: 'type'): ActionType;
    // getRelated(key: 'bots'): VanillaSerializer<Bot>;

// Recursive function to read all files in a directory and its subdirectories
const walk = function (dir) {
  fs.readdirSync(dir).forEach(file => {
    // const dir = __dirname
    // const file = './WbProduct.d.ts'
    const filePath = path.join(dir, file);
    if (path.extname(filePath).endsWith(".ts")) {
      // If the file is a ".map" file, read its contents and perform the replacement
      let contents = fs.readFileSync(filePath, "utf-8");
      if (!contents.includes('getRelated')) {
        contents = contents.replace(/((\w+)\(\): BelongsTo<(\w+)>;)/g, "$1\n    getRelated(key: '$2'): $3;")
        contents = contents.replace(/((\w+)\(\): HasOne<(\w+)>;)/g, "$1\n    getRelated(key: '$2'): $3;")
        contents = contents.replace(/((\w+)\(\): BelongsToMany<(\w+)>;)/g, "$1\n    getRelated(key: '$2'): VanillaSerializer<$3>;")
        contents = contents.replace(/((\w+)\(\): HasMany<(\w+)>;)/g, "$1\n    getRelated(key: '$2'): VanillaSerializer<$3>;")
        if (contents.includes('VanillaSerializer')) 
          contents = addSerializer(contents)
        fs.writeFileSync(filePath, contents, "utf-8");
      }
    }
  });
};

walk(__dirname);