import Express from  'express'

const Router = Express.Router();

import {commentController} from "./controller"

const {RolesMidleware}  = require("_Core/Express-es6-starter-core-users/src/")

import {Blogroles} from  "./midleware"

Router.use(commentController.modelpath);

Router.get("/", commentController.get)

Router.post("/" , 
                RolesMidleware.allowedRolesid([1,3]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                commentController.create)

Router.put("/" , 
                RolesMidleware.allowedRolesid([1,3]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                Blogroles.checkIsOwner,
                commentController.update)

Router.delete("/" , RolesMidleware.allowedRolesid([1,3])
                   ,RolesMidleware.checkIsauth
                   ,RolesMidleware.getusersid
                   ,Blogroles.checkIsOwnerOrSuperUsers
                   ,commentController.delete)

module.exports = Router;
