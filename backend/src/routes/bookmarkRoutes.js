import {bookmarkService} from '../services/bookmarkService.js'; import {bookmarkSchema} from '../schemas.js'; import {requireSession} from '../auth/session.js';
export async function bookmarkRoutes(app){
 const opts={preHandler:requireSession};
 app.get('/',opts,async req=>({success:true,data:await bookmarkService.list(req.user.id,req.query?.search)}));
 app.get('/:id',opts,async(req,reply)=>{const b=await bookmarkService.get(req.params.id,req.user.id);if(!b)return reply.code(404).send({success:false,error:{code:'NOT_FOUND',message:'Bookmark not found'}});return {success:true,data:b};});
 app.post('/',{...opts,schema:bookmarkSchema},async req=>({success:true,data:await bookmarkService.create(req.user.id,req.body)}));
 app.put('/:id',{...opts,schema:bookmarkSchema},async(req,reply)=>{const b=await bookmarkService.update(req.params.id,req.user.id,req.body);if(!b)return reply.code(404).send({success:false,error:{code:'NOT_FOUND',message:'Bookmark not found'}});return {success:true,data:b};});
 app.delete('/:id',opts,async(req,reply)=>{const n=await bookmarkService.remove(req.params.id,req.user.id);if(!n)return reply.code(404).send({success:false,error:{code:'NOT_FOUND',message:'Bookmark not found'}});return {success:true,data:null};});
}
