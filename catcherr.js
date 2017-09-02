export default function Catcherr(promise) {  
   return promise.then(data => {
      return [null, data];
   })
   .catch(err => [err]);
}


