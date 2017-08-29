import Express  from 'express'
import path from  'path'
import logger from  'morgan'
import cookieParser from  'cookie-parser'
import timeout  from 'connect-timeout'
import compression from  'compression'
import Http from  'http'
import Socket from  'socket.io'
import bodyParser from  'body-parser'
import Api from  './api'

//make alias path config in package.json
import moduleAlias  from  'module-alias'

moduleAlias()



const App  = Express()

App.disable('x-powered-by');

App.use(compression());


/**
 * set for key config 
 * set your app key
 */
App.set('key', 'mykey12345');


/**
 * costum timeout if need it
 */

 App.use(timeout(300000))



/**
 * rest api
 */

App.use('/Api',Api)



/**
 * setting socket.io
 * 
 */
const server =  Http.Server(App);
const  io = Socket(server)

App.use((req,res,next)=>{
    res.io  = io;
    next();
})

App.use(logger('dev'));
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }));
App.use(cookieParser());


//static server
App.use(Express.static(path.join(__dirname, '../../../www/')));


//err handle 
App.use((err,req,res,next)=>{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})


module.exports =  { App:App , Server:server}



