const jwt=require('jsonwebtoken');

function checkauth(req,res,next)
{
    try {
        const token=req.headers.authorization;
        if(!token)
        {
            res.status(500).json({
                message:"Token not found.."
            })
        }else{
            const decodedtoken=token.split(' ')[1]; //Bearer $hghg$hgh$
            const accesstoken=jwt.sign(decodedtoken,process.env.JWT_SECRET_TOKEN)
            if(!accesstoken)
            {
                res.status(500).json({
                    message:"Failed to authenticate.."
                })
            }
            req.user=accesstoken;
            next();
        }
    } catch (error) {
        res.status(404).json({
            message:"Invalid operation"
        })
    }
}

module.exports=checkauth