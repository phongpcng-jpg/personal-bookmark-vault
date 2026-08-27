import bcrypt from 'bcrypt';
import {userRepository} from '../repositories/userRepository.js';
export const authService={
 async register({username,password}){const normalized=username.trim().toLowerCase();if(await userRepository.findByUsername(normalized))throw Object.assign(new Error('Username already exists'),{statusCode:409});const hash=await bcrypt.hash(password,12);return userRepository.create({username:normalized,passwordHash:hash});},
 async authenticate({username,password}){const u=await userRepository.findByUsername(username.trim().toLowerCase());if(!u||!(await bcrypt.compare(password,u.password_hash)))return null;return {id:u.id,username:u.username};},
 async me(id){const u=await userRepository.findById(id);return u&&{id:u.id,username:u.username};}
};
