import Express from  'express'

const Router = Express.Router();

import {PostController} from "./controller"

const {RolesMidleware}  = require("_Core/Express-es6-starter-core-users/src/")

import {Blogroles} from  "./midleware"

Router.use(PostController.modelpath);

Router.get("/", PostController.get)

Router.post("/" , 
                RolesMidleware.allowedRolesid([1,3]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                PostController.create)

Router.put("/" , 
                RolesMidleware.allowedRolesid([1,3]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                Blogroles.checkIsOwner,
                PostController.update)

Router.delete("/" , RolesMidleware.allowedRolesid([1,3])
                   ,RolesMidleware.checkIsauth
                   ,RolesMidleware.getusersid
                   ,Blogroles.checkIsOwnerOrSuperUsers
                   ,PostController.delete)

module.exports = Router;
