import {bookmarkRepository} from '../repositories/bookmarkRepository.js';
export const bookmarkService={
 list(userId,search){return bookmarkRepository.list(userId,search);},
 get(id,userId){return bookmarkRepository.findOwned(id,userId);},
 create(userId,data){return bookmarkRepository.create(userId,data);},
 update(id,userId,data){return bookmarkRepository.update(id,userId,data);},
 remove(id,userId){return bookmarkRepository.remove(id,userId);}
};
