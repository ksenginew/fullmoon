var glob = require("glob")
var fs = require("fs")

glob("scss/forms/*.scss", undefined, function (er, files) {
  files.forEach(file => {
    fs.writeFileSync(file, fs.readFileSync(file).toString().replace(/ [\w-]+:( \$[\w-]+)+;/g, _ => {
      return _.replace(/ \$([\w-]+)/g, (__, n) => ` css-var(--#{$variable-prefix}${n}, $${n})`)
    }));
  })
})
