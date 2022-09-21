const express=require('express');

const companyroutes=require('./companyroutes')
const phoneroutes=require('./phoneroutes')
const userroutes=require('./userroutes');



const routes=express.Router();

routes.use('/company',companyroutes);
routes.use('/phone',phoneroutes);
routes.use('/user',userroutes)

module.exports=routes

