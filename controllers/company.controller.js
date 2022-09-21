const models=require('../models');
const {company,phone}=models
const Validator=require('fastest-validator');


function create(req,res)
{
   
    const newcompany=
    {
        
        name: req.body.name,
        address:req.body.address,
        fblink:req.body.fblink,
        instalink:req.body.instalink,
        linkedin:req.body.linkedin,
        openingtime:req.body.openingtime,
        closingtime:req.body.closingtime

    }


    let schema=
    {
        name:{type:"string",require:true,max:"100"},
        address:{type:"string",require:true,max:"1000"},
        fblink:{type:"string",require:true},
        instalink:{type:"string",require:true},
        linkedin:{type:"string",require:true},
        openingtime:{type:"string",require:true},
        closingtime:{type:"string",require:true}
    }

    let v= new Validator();
    const validationresponse=v.validate(newcompany,schema);

    if(validationresponse!==true)
    {
        res.status(404).json({
            message:"Validation Failed!!",
            result:validationresponse
        })
    }

    models.company.create(newcompany).then(result=>
        {
            res.status(200).json({
                message:"Successfully created new company!!",
                result:newcompany
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
    models.company.findAll({
        where:{id:1},
        attributes:
        {
            exclude:['createdAt','updatedAt']
        },
        include:
        {
            model:phone,
            as:'phone',
            attributes:['phoneno']
        }
    }).then(result=>
        {
            res.status(200).json({
                message:"Successfully showing all companydetails!!",
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

function findbyid(req,res)
{
    const id=req.params.id;

    models.company.findByPk(id).then(result=>
        {
            if(result)
            {
                res.status(200).json({
                    message:"Successfully found that company id detail!!",
                    result:result
                })
            }else{
                res.status(404).json({
                    message:"Company not Found!!"
                })
            }
            
        }).catch(error=>{
            res.status(200).json({
                message:"Something went wrong!!",
                error:error
            })
        })
}

function update(req,res)
{
    const id= req.params.id;
    // console.log(id);

    const updatedcompany=
    {
        name: req.body.name,
        address:req.body.address,
        fblink:req.body.fblink,
        instalink:req.body.instalink,
        linkedin:req.body.linkedin,
        openingtime:req.body.openingtime,
        closingtime:req.body.closingtime
    }

    models.company.update(updatedcompany,{where:{id:id}}).then(result=>
        {
        
                res.status(200).json({
                    message:"Successfully updated company!!",
                    result:updatedcompany
                })

        }).catch(error=>
            {
                res.status(500).json({
                    message:"Some error occur!!"
                })
            })
}


function destroy(req,res)
{
    const id =req.params.id;
    models.company.destroy({where:{id:id}}).then(result=>
        {
            if(result)
            {
                res.status(200).json({
                    message:"Successfully deleted from database!!",
                    result:result
                })
            }else{
                res.status(404).json({
                    message:"Company not found!!"
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
