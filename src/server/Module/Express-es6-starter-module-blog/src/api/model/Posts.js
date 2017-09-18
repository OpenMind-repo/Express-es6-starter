import Conf from '#Conf'

import bookshelf  from 'bookshelf'

const Bookshelf  = bookshelf(Conf.db)


//add promise 
import Promise from "bluebird"


//get relation table 
 import {CategoriesModel,TagsModel,CommentsModel} from "./index"
 const {UsersModel}  = require("_Core/Express-es6-starter-core-users/src/")


//filter schema type data
import Joi from  "joi"


/**
 * get model base class
 */

import {Models as BaseModel}  from  "baseMvc"


const Model   =  BaseModel(Bookshelf)


const Posts  = Model.extend({
    tableName :'blogPosts',

    validate:{
        title : Joi.string().required(),
        bannerphoto :  Joi.string().required(),
        category : Joi.number().integer().required(),
        users : Joi.number().integer().required(),
        body  :Joi.string().required(),
        
    },
    validateUpdate:{
        title : Joi.string(),
        bannerphoto :  Joi.string(),
        category : Joi.number().integer(),
        body  :Joi.string(),
        users : Joi.number().integer(),
    },

    category(){
        return this.belongsTo(CategoriesModel,"category")
    },

    comments(){
        return this.hasMany(CommentsModel,"post")
    },

    tags(){
        return this.belongsToMany(TagsModel)
    },

    users(){
        return this.belongsTo(UsersModel,"users")
    }
})

export default Posts