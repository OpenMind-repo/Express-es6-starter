import Express from  'express'

//make alias path config in package.json
import moduleAlias  from  'module-alias'


const App =  Express()

App.disable('x-powered-by');

App.get('/',(req,res)=>{
    res.status(200)
    res.json({message:"this is blog modules"})
    res.end()
})



module.exports = App