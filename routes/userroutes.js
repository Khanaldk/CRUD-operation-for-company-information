const express=require('express');
const usercontroller=require('../controllers/usercontroller')
const userroutes=express.Router();


/**
 * @swagger
 *  components:
 *    schemas:
 *      userSignup:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          name:
 *           type: string
 *           description: User's Name
 *          email:
 *           type: string
 *           description: User's email
 *          password:
 *           type: string
 *           description: User's password
 *         
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      userLogin:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          email:
 *           type: string
 *           description: User's email
 *          password:
 *           type: string
 *           description: User's password
 *         
 */



/**
 * @swagger
 * tags:
 *     name: User
 *     description: The user managing API endpoint
 */



/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userSignup'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
 */

userroutes.post('/signup',usercontroller.signup);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: login user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/userLogin'    
 *     responses:
 *       200:
 *         description: Login User successfully
 *       500:
 *         description: Some Server Error
 */

userroutes.post('/login',usercontroller.login)


module.exports=userroutes