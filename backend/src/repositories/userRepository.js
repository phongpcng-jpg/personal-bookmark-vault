import {db} from '../db/index.js';
export const userRepository={
 async findByUsername(username){return db('users').where({username}).first();},
 async findById(id){return db('users').where({id}).first();},
 async create({username,passwordHash}){const [u]=await db('users').insert({username,password_hash:passwordHash}).returning(['id','username','created_at','updated_at']);return u;}
};
