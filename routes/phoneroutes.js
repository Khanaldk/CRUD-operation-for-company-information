const express=require('express');
const checkauth=require('../middleware/checkauth')
const phonecontroller=require('../controllers/phone.controller')

const phoneroutes=express.Router();



/**
 * @swagger
 *  components:
 *    schemas:
 *      phone:
 *        type: object
 *        required:
 *          - phoneno
 *          - companyid
 *        properties:
 *          phoneno:
 *           type: string
 *           description: phone's phoneno
 *          companyid:
 *           type: integer
 *           description: phone's phoneno
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Phone
 *     description: The phone managing API endpoint
 */


/**
 * @swagger
 * /api/phone:
 *   post:
 *     summary: Create new phone
 *     security:
 *       - jwt: []
 *     tags: [Phone]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/phone'    
 *     responses:
 *       200:
 *         description: Created phone successfully
 *       500:
 *         description: Some Server Error
 */

phoneroutes.post('/',checkauth,phonecontroller.create);

/**
 * @swagger
 * /api/phone:
 *   get:
 *     summary: List of all phone
 *     security:
 *       - jwt: []
 *     tags: [Phone]
 *     responses:
 *      200:
 *          description: phone List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

phoneroutes.get('/',phonecontroller.showall);


/**
 * @swagger
 * /api/phone/{id}:
 *   get:
 *     summary: Retrieve phone
 *     security:
 *       - jwt: []
 *     tags: [Phone]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: phone's id
 *     responses:
 *      200:
 *          description: phone retrieved successfully
 *      500:
 *          description: Some Server Error
 */


phoneroutes.get('/:id',phonecontroller.findbyid);

/**
 * @swagger
 * /api/phone/{id}:
 *   patch:
 *     summary: Update phone
 *     security:
 *       - jwt: []
 *     tags: [Phone]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: phone's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/phone'
 *     responses:
 *      200:
 *          description: phone updated successfully
 *      500:
 *          description: Some Server Error
 */

phoneroutes.patch('/:id',checkauth,phonecontroller.update);


/**
 * @swagger
 * /api/phone/{id}:
 *   delete:
 *     summary: delete phone
 *     security:
 *       - jwt: []
 *     tags: [Phone]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: phone's id
 *     responses:
 *      200:
 *          description: phone deleted successfully
 *      500:
 *          description: Some Server Error
 */

phoneroutes.delete('/:id',phonecontroller.destroy)


module.exports=phoneroutes
