import Express from  'express'

const Router = Express.Router();

import {categoryController} from "./controller"

import {Blogroles} from  "./midleware"

const {RolesMidleware}  = require("_Core/Express-es6-starter-core-users/src/")


Router.use(categoryController.modelpath);

Router.get("/", categoryController.get)


Router.post("/" ,
                RolesMidleware.allowedRolesid([1]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                categoryController.create)

Router.put("/",
                RolesMidleware.allowedRolesid([1]),
                RolesMidleware.checkIsauth,
                RolesMidleware.getusersid,
                Blogroles.checkIsOwner,
                categoryController.update)

Router.delete("/" , 
                  RolesMidleware.allowedRolesid([1]),
                  RolesMidleware.checkIsauth,
                  RolesMidleware.getusersid,
                  Blogroles.checkIsOwnerOrSuperUsers,
                  categoryController.delete)

module.exports = Router;
