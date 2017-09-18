import {CommentsModel}  from  "../model/"
import {ModelRoot} from  "../registerpath"
import {ResponseController , BaseController}  from  "baseMvc"

export default new class  Comments extends BaseController { 
    modelpath(req,res,next){
        req.headers.modelpath = ModelRoot+"Comment"
        req.headers.message = "Comment"
        req.headers.related = ["Posts","users"]
        req.headers.privatefield = []
        next();
    }
}

    
