const express= require('express');
const routes=require('./routes/index.routes')
const swaggeruiexpress=require('swagger-ui-express');
const swaggerjsdocs=require('swagger-jsdoc');
const swaggerDocs=require('./docs/swagger.docs');
const bodyparser=require('body-parser');
const dotenv=require('dotenv');
dotenv.config();


const app=express();

app.use(bodyparser.json());

app.use('/api-docs/',swaggeruiexpress.serve,swaggeruiexpress.setup(swaggerjsdocs(swaggerDocs)));

const port=process.env.PORT

app.use('/api',routes)

app.listen(port,(req,res)=>
{
    console.log(`Listening to port ${port}`);
})

