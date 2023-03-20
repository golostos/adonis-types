import Ignitor = require('./Ignitor')
import Hooks = require('./Hooks')

declare const ignitor: {
  hooks: typeof Hooks,
  Ignitor: typeof Ignitor,
}

export default ignitor;