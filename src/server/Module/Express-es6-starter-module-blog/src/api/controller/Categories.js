import {CategoriesModel}  from  "../model/"
import {ModelRoot} from  "../registerpath"
import {ResponseController , BaseController}  from  "baseMvc"

export default new class  Comments extends BaseController { 
    modelpath(req,res,next){
        req.headers.modelpath = ModelRoot+"Categories"
        req.headers.message = "Categories"
        req.headers.related = ["Posts","users"]
        req.headers.privatefield = []
        next();
    }
}

    
