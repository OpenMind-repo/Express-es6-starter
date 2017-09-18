import Express from  'express'

//make alias path config in package.json
import moduleAlias  from  'module-alias'


const App =  Express()

import  Post from  "./post"
import Tag from  "./tag"
import Comment from  "./comment"
import Category from "./category"


App.disable('x-powered-by');

App.use("/post", Post)

App.use("/Tags", Tag)

App.use("/Comments",Comment)

App.use("/categories",Category)

module.exports = App