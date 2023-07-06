import express from 'express';
import  path from 'path';

const api =express();
// console.log(path)
// console.log("cwd  ",process.cwd())
api.use(express.static(path.join(process.cwd(),'public')))

export default api;

