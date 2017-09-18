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


const Tags  = Model.extend({
    tableName :'blogTags',

    validate:{
        users : Joi.number().integer().required(),
        name : Joi.string().required()
        
    },
    validateUpdate:{
        users : Joi.number().integer(),
        name : Joi.string()
        
    },

    Posts(){
        return this.belongsToMany(PostsModel)
    },

    users(){
        return this.belongsTo(UsersModel,"users")
    }
})

export default Tags