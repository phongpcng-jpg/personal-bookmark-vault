import {authService} from '../services/authService.js'; import {authSchemas} from '../schemas.js';
const regenerate=async session=>new Promise((resolve,reject)=>session.regenerate(e=>e?reject(e):resolve()));
export async function authRoutes(app){
 app.post('/register',{schema:authSchemas.register},async(req,reply)=>{const user=await authService.register(req.body);await regenerate(req.session);req.session.userId=user.id;return reply.code(201).send({success:true,data:user});});
 app.post('/login',{schema:authSchemas.login},async(req,reply)=>{const user=await authService.authenticate(req.body);if(!user)return reply.code(401).send({success:false,error:{code:'INVALID_CREDENTIALS',message:'Invalid credentials'}});await regenerate(req.session);req.session.userId=user.id;return {success:true,data:user};});
 app.post('/logout',async(req,reply)=>{await new Promise((resolve,reject)=>req.session.destroy(e=>e?reject(e):resolve()));return {success:true,data:null};});
 app.get('/me',async(req,reply)=>{if(!req.session.userId)return reply.code(401).send({success:false,error:{code:'UNAUTHENTICATED',message:'Authentication required'}});const user=await authService.me(req.session.userId);if(!user)return reply.code(401).send({success:false,error:{code:'UNAUTHENTICATED',message:'Session user no longer exists'}});return {success:true,data:user};});
}
