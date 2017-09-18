import Jwt from 'jwt-simple';
const {UsersModel }  = require("_Core/Express-es6-starter-core-users/src/")
import Catcherr from "*Catcherr"
import { ResponseController }  from  "baseMvc";

export default new class RolesBlog{
    /**
     * this midleware to check user owner 
     * this midleware can use after 
     * users core role midleware Roles.getusersid
     * @param {Object} req 
     * @param {Object} res 
     * @param {function} next 
     */
    async checkIsOwner(req,res,next){
        let id =  req.query.id
        let Users  = req.headers.users
        const model  =  require(req.headers.modelpath ).default        
        let Data ,err        
        [err,Data] =  await Catcherr(model.forge({id:id}).fetch())
        if(Data != null){
            Data =  Data.toJSON()
        }
        let isowner = false
        if(Data != null && Users != null){
            isowner = (Users.id == Data.users)?true:false
        }
        if(isowner){
            next()
        }
        else{
            let response  =  ResponseController.authResponse(null,false,-1)
            res.status(response.code)
            res.json(response)
            res.end()   
        }
    }

    /**
     * this midleware to check user owner or supper users
     * this midleware can use after 
     * users core role midleware Roles.getusersid
     * @param {Object} req 
     * @param {Object} res 
     * @param {function} next 
     */
    async checkIsOwnerOrSuperUsers(req,res,next){
        let id =  req.query.id
        let Users  = req.headers.users
        const model  =  require(req.headers.modelpath ).default        
        let Data ,err        
        [err,Data] =  await Catcherr(model.forge({id:id}).fetch())
        if(Data != null){
            Data =  Data.toJSON()
        }
        let isowner = false
        if(Data != null && Users != null){
            isowner = (Users.id == Data.users)?true:false
        }
        if(isowner || Users.roles){
            next()
        }
        else{
            let response  =  ResponseController.authResponse(null,false,-1)
            res.status(response.code)
            res.json(response)
            res.end()   
        }
    }

}