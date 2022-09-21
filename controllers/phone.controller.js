const models=require('../models');
const Validator=require('fastest-validator');
const company = require('../models/company');
const companyController = require('./company.controller');

function create(req,res)
{
    const newphone=
    {
        phoneno:req.body.phoneno,
        companyid:req.body.companyid
    }

    const schema=
    {
        phoneno:{type:"string",require:true,max:"1000"},
        companyid:{type:"number",require:true}
    }
    
    const v=new Validator();
    const validationresponse=v.validate(newphone,schema);

    if(validationresponse!==true)
    {
        res.status(200).json({
            message:"Validation Failed!!",
            error:validationresponse
        })
    }

    models.phone.create(newphone).then(result=>{
        res.status(200).json({
            message:"Successfully created phonedetails!!",
            result:result
        })
    }).catch(error=>
        {
            res.status(500).json({
                message:"Something went wrong!!",
                error:error
            })
        })
}



function showall(req,res)
{
    models.phone.findAll().then(result=>
        {
            res.status(200).json({
                message:"Successfully showed all details of phone!!",
                result:result

            })
        }).catch(error=>
            {
                res.status(500).json({
                    message:"Something went wrong!!",
                    error:error
                })
            })
}



function findbyid(req,res){

    const companyid=req.params.id;

    models.phone.findAll({where:{companyid:companyid}}).then(result=>
        {
            if(result)
            {
                res.status(200).json({
                    message:"Successfully found that id details of phone!!",
                    result:result
                })
            }else{
                res.status(404).json({
                    message:"phone not found!!"
                })
            }
            
            
        }).catch(error=>
            {
                res.status(500).json({
                    message:"Something went wrong!!",
                    error:error
                })
               
            })
}

function update(req,res){

    const id=req.params.id;

    const updatephone=
    {
        phoneno:req.body.phoneno
    }

    const schema=
    {
        phoneno:{type:"string",require:true,max:"1000"}
    }

    const v= new Validator();
    const validationresponse=v.validate(updatephone,schema);

    if(validationresponse!==true)
    {
        res.status(404).json({
            message:"Validation Failed!!",
            error:validationresponse
        })
    }

    models.phone.update(updatephone,{where:{id:id}}).then(result=>
        {
            res.status(200).json({
                message:"Successfully updated phone!!",
                result:updatephone
            })
        }).catch(error=>
            {
                res.status(500).json({
                    message:"Something went wrong!!",
                    error:error
                })
            })
}

function destroy(req,res)
{
    const id=req.params.id;

    models.phone.destroy({where:{id:id}}).then(result=>
        {
            if(result)
            {
                res.status(200).json({
                    message:"Successfully deleted!!",
                    result:result
                })
            }else{
                res.status(404).json({
                    message:"Phone not found!!"
                })
            }
            
        }).catch(error=>
            {
                res.status(500).json({
                    message:"Something went wrong!!",
                    error:error
                })
            })
}

module.exports=
{
    create:create,
    showall:showall,
    findbyid:findbyid,
    update:update,
    destroy:destroy
}
