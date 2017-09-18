import {TagsModel}  from  "../model/"
import {ModelRoot} from  "../registerpath"
import {ResponseController , BaseController}  from  "baseMvc"

export default new class  Tags extends BaseController { 
    modelpath(req,res,next){
        req.headers.modelpath = ModelRoot+"Tags"
        req.headers.message = "Tags"
        req.headers.related = ["users","Posts"]
        req.headers.privatefield = []
        next();
    }
}

    
