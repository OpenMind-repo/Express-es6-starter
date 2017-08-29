import Express from  'express'

//make alias path config in package.json
import moduleAlias  from  'module-alias'

moduleAlias()

const App =  Express()

/**
 * registered module to Api
 */
const { Blogmodule  ,Ecomercemodule } = require('_Module')

App.use('/Blogs', Blogmodule)

App.use('/Shops', Ecomercemodule)



module.exports = App

