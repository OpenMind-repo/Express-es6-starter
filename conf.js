const _db  = require("./db");

let Conf  =  {
    port : 5000,
    db : require('knex')(_db)
}


export default Conf;