import Ioc = require('./Ioc')
import ServiceProvider = require('./ServiceProvider')
import Registrar = require('./Registrar')
import Resolver = require('./Resolver')

declare const fold: {
  ioc: Ioc,
  ServiceProvider: typeof ServiceProvider,
  registrar: Registrar,
  resolver: Resolver
}

export default fold;