import {PostsModel}  from  "../model/"
import {ModelRoot} from  "../registerpath"
import {ResponseController , BaseController}  from  "baseMvc"

export default new class  Post extends BaseController { 
    modelpath(req,res,next){
        req.headers.modelpath = ModelRoot+"Posts"
        req.headers.message = "Posts"
        req.headers.related = ["category","comments","users","tags"]
        req.headers.privatefield = [""]
        next();
    }
}

    
