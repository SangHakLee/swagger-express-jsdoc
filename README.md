# swagger-express-jsdoc

Example of [Express][1] with [swagger-jsdoc][2]

## Install
### git
```bash
$ git clone https://github.com/SangHakLee/swagger-express-jsdoc.git
```

### NPM
```bash
$ npm i swagger-express-jsdoc
$ cd node_modules
```

## How to use
### Start Server
```bash
$ cd swagger-express-jsdoc
$ npm install
$ npm start
```
### Use swagger-jsdoc
http://localhost:3000/api-docs/

## How to add api-docs
This application is based on [Swagger][3], [swagger-jsdoc][4] and [swagger-ui-express][5]
### app.js
```javascript
// ...
var swaggerUi = require('swagger-ui-express'); // line 7
var swaggerJSDoc = require('swagger-jsdoc'); // line 8

// ...
var options = { // line 27
  swaggerDefinition: {
    info: {
      title: 'swagger-express-jsdoc', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  apis: ['./routes/*'], // Path to the API docs
};
var swaggerSpec = swaggerJSDoc(options); // line 36

// ...
app.get('/api-docs.json', function(req, res) { // line 41
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// ...
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // line 45
```
#### var options (line 27)
 Your Swagger docs information here.
[swagger-jsdoc][6]

##### swaggerDefinition.info
[specification][7]

```json
{
  "title": "Swagger Sample App",
  "description": "This is a sample server Petstore server.",
  "termsOfService": "http://swagger.io/terms/",
  "contact": {
    "name": "API Support",
    "url": "http://www.swagger.io/support",
    "email": "support@swagger.io"
  },
  "license": {
    "name": "Apache 2.0",
    "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
  },
  "version": "1.0.1"
}
```
##### apis
Your routing files path.
If your routing file path like this, 
- /controllers/users.js
- /controllers/stores.js

Set your `apis` value like this, **apis: ['./controllers/*']**

#### var swaggerSpec (line 36)
It will be json object.
Your `option` value and `apis` value are combined.

#### /api-docs.json (line 41)
This returns a simple json document.
http://localhost:3000/api-docs.json

#### /api-docs (line 45)
This will convert the json document to Swagger-ui.
So when you connect with http://localhost:3000/api-docs, it will make you see beautiful documents.

  [1]: http://expressjs.com/
  [2]: https://github.com/Surnet/swagger-jsdoc
  [3]: http://swagger.io/
  [4]: https://github.com/Surnet/swagger-jsdoc
  [5]: https://github.com/scottie1984/swagger-ui-express
  [6]: https://github.com/Surnet/swagger-jsdoc
  [7]: http://swagger.io/specification/