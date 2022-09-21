const express=require('express');
const checkauth=require('../middleware/checkauth')
const companycontroller=require('../controllers/company.controller')


const companyroutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      company:
 *        type: object
 *        required:
 *          - name
 *          - address
 *          - fblink
 *          - instalink
 *          - linkedin
 *          - openingtime
 *          - closingtime
 *        properties:
 *          name:
 *           type: string
 *           description: copmany's Name
 *          address:
 *           type: string
 *           description: company's address
 *          fblink:
 *           type: string
 *           description: company's fblink
 *          instalink:
 *           type: string
 *           description: company's instalink
 *          linkedin:
 *           type: string
 *           description: company's linkedin
 *          openingtime:
 *           type: string
 *           description: company's opening time
 *          closingtime:
 *           type: string
 *           description: company's closing time
 */



/**
 * @swagger
 * tags:
 *     name: Company
 *     description: The company managing API endpoint
 */

/**
 * @swagger
 * /api/company:
 *   post:
 *     summary: Create new Company
 *     security:
 *       - jwt: []
 *     tags: [Company]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/company'    
 *     responses:
 *       200:
 *         description: Created Company successfully
 *       500:
 *         description: Some Server Error
 */

companyroutes.post('/',checkauth,companycontroller.create);


/**
 * @swagger
 * /api/company:
 *   get:
 *     summary: List of all company
 *     security:
 *       - jwt: []
 *     tags: [Company]
 *     responses:
 *      200:
 *          description: company List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

companyroutes.get('/',companycontroller.showall);

/**
 * @swagger
 * /api/company/{id}:
 *   get:
 *     summary: Retrieve company
 *     security:
 *       - jwt: []
 *     tags: [Company]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: company's id
 *     responses:
 *      200:
 *          description: company retrieved successfully
 *      500:
 *          description: Some Server Error
 */

companyroutes.get('/:id',companycontroller.findbyid);

/**
 * @swagger
 * /api/company/{id}:
 *   patch:
 *     summary: Update company
 *     security:
 *       - jwt: []
 *     tags: [Company]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: company's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/company'
 *     responses:
 *      200:
 *          description: company updated successfully
 *      500:
 *          description: Some Server Error
 */

companyroutes.patch('/:id',checkauth,companycontroller.update)

/**
 * @swagger
 * /api/company/{id}:
 *   delete:
 *     summary: delete company
 *     security:
 *       - jwt: []
 *     tags: [Company]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: company's id
 *     responses:
 *      200:
 *          description: company deleted successfully
 *      500:
 *          description: Some Server Error
 */

companyroutes.delete('/:id',companycontroller.destroy)


module.exports=companyroutes