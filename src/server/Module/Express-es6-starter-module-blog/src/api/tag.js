import Express from  'express'

const Router = Express.Router();

import {TagController} from "./controller"

import {Blogroles} from  "./midleware"

const {RolesMidleware}  = require("_Core/Express-es6-starter-core-users/src/")


Router.use(TagController.modelpath);

Router.get("/", TagController.get)


Router.post("/" ,
                RolesMidleware.allowedRolesid([1]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                TagController.create)

Router.put("/",
                RolesMidleware.allowedRolesid([1]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                Blogroles.checkIsOwner,
                TagController.update)

Router.delete("/" , 
                  RolesMidleware.allowedRolesid([1]),
                  RolesMidleware.checkIsauth,
                  RolesMidleware.getusersid,
                  Blogroles.checkIsOwnerOrSuperUsers,
                  TagController.delete)

module.exports = Router;
