module.exports=
{
        swaggerDefinition: {
          openapi: '3.0.1',
          info: {
            version: '1.0.0',
            title: 'First Project About Company Information',
            description: 'Here we saw the different methods such as get,post,put,patch,delete etc',
            servers: ['http://localhost:7000'],
          },
          components: {
            securitySchemes: {
              jwt: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              },
            },
          },
        },
        apis: ['routes/*.js'],
      };
      
