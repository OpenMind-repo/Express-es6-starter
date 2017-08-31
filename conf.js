const _db  = require("./db");

let Conf  =  {
    port : 5000,
    db : require('knex')(_db),

    /**
     * Select model method  Query or Orm
     */
    modelconf : "Query"
}


export default Conf;