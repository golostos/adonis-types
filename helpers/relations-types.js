const fs = require('fs');
const path = require('path');
const j = require('jscodeshift');

const regexpHasOne = /return\s+this.hasOne\(["']App\/Models\/([A-Za-z]+)["']/;
const regexpHasMany = /return\s+this.hasMany\(["']App\/Models\/([A-Za-z]+)["']/;
const regexpBelongsTo = /return\s+this.belongsTo\(["']App\/Models\/([A-Za-z]+)["']/;
const regexpBelongsToMany = /return\s+this.belongsToMany\(["']App\/Models\/([A-Za-z]+)["']/;

const importHasOne = "import HasOne from 'adonis-types/Lucid/Lucid/Relations/HasOne';"
const importHasMany = "import HasMany from 'adonis-types/Lucid/Lucid/Relations/HasMany';"
const importBelongsTo = "import BelongsTo from 'adonis-types/Lucid/Lucid/Relations/BelongsTo';"
const importBelongsToMany = "import BelongsToMany from 'adonis-types/Lucid/Lucid/Relations/BelongsToMany';"

const walk = function (dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.statSync(filePath).isDirectory() && path.extname(filePath).endsWith(".js") && (filePath !== __filename)) {
      const fileContentJS = fs.readFileSync(filePath, 'utf-8');
      const basename = path.basename(filePath, path.extname(file));
      let fileContentDTS = fs.readFileSync(path.join(__dirname, basename + '.d.ts'), 'utf-8');
      const root = j(fileContentJS);
      const classes = root.find(j.ClassDeclaration);

      classes.forEach(cls => {
        const methods = cls.value.body.body;
        methods.forEach(method => {
          if (method.type === 'MethodDefinition') {
            fileContentDTS = addTypes(j(method.value.body).toSource().match(regexpHasOne), method.key.name, 'HasOne', importHasOne, fileContentDTS)
            fileContentDTS = addTypes(j(method.value.body).toSource().match(regexpHasMany), method.key.name, 'HasMany', importHasMany, fileContentDTS)
            fileContentDTS = addTypes(j(method.value.body).toSource().match(regexpBelongsTo), method.key.name, 'BelongsTo', importBelongsTo, fileContentDTS)
            fileContentDTS = addTypes(j(method.value.body).toSource().match(regexpBelongsToMany), method.key.name, 'BelongsToMany', importBelongsToMany, fileContentDTS)
          }
        });
      });

      fs.writeFileSync(path.join(__dirname, basename + '.d.ts'), fileContentDTS, "utf-8");
    }
  });
};

// Start the search in the current directory
walk(__dirname);

function importModel(modelName) {
  return `import ${modelName} from './${modelName}';`
}

function addTypes(match, methodName, relaction, importRel, fileContentDTS) {
  if (match) {
    const modelName = match[1]
    const importModelStr = importModel(modelName)
    if (!fileContentDTS.includes(importRel)) fileContentDTS = importRel + '\n' + fileContentDTS
    if (!fileContentDTS.includes(importModelStr)) fileContentDTS = importModelStr + '\n' + fileContentDTS
    const regexp = new RegExp(`${methodName}[(][)]: any`)
    fileContentDTS = fileContentDTS.replace(regexp, `${methodName}(): ${relaction}<${modelName}>`)
  }
  return fileContentDTS
}