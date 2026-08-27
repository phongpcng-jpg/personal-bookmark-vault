import {db} from '../db/index.js';
export const bookmarkRepository={
 list(userId,search){let q=db('bookmarks').where({user_id:userId}).orderBy('created_at','desc');if(search)q=q.where(b=>b.whereILike('title',`%${search}%`).orWhereILike('description',`%${search}%`));return q;},
 findOwned(id,userId){return db('bookmarks').where({id,user_id:userId}).first();},
 async create(userId,data){const [b]=await db('bookmarks').insert({...data,user_id:userId}).returning('*');return b;},
 async update(id,userId,data){const [b]=await db('bookmarks').where({id,user_id:userId}).update({...data,updated_at:db.fn.now()}).returning('*');return b;},
 async remove(id,userId){return db('bookmarks').where({id,user_id:userId}).del();}
};
