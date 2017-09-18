import Conf from '#Conf'


import bookshelf  from 'bookshelf'

const Bookshelf  = bookshelf(Conf.db)


//add promise 
import Promise from "bluebird"


//get relation table 
import {PostsModel} from "./index"
 const {UsersModel}  = require("_Core/Express-es6-starter-core-users/src/")


//filter schema type data
import Joi from  "joi"


/**
 * get model base class
 */

import {Models as BaseModel}  from  "baseMvc"


const Model   =  BaseModel(Bookshelf)


const Comments  = Model.extend({
    tableName :'blogComments',

    validate:{
        users : Joi.number().integer().required(),
        post : Joi.number().integer().required(),
        body : Joi.string().required()
        
    },
    validateUpdate:{
        users : Joi.number().integer(),
        post : Joi.number().integer(),
        body : Joi.string()
        
    },

    Posts(){
        return this.belongsTo(PostsModel,"post")
    },

    users(){
       return this.belongsTo(UsersModel,"users")
       
    }
})

export default Comments