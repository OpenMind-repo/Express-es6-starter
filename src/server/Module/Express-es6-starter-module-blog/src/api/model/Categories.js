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


const Categories  = Model.extend({
    tableName :'blogCategories',

    validate:{
        name : Joi.string().required(),
        users : Joi.number().integer().required(),
    },
    validateUpdate:{
        name : Joi.string(),
        users : Joi.number().integer(),
    },

    Posts(){
        return this.hasMany(PostsModel,"category")
    },

    users(){
        return this.belongsTo(UsersModel,"users")
    }
})

export default Categories