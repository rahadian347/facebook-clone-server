const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const user = require('../models').users

router.post('/', (req,res,next) => {
    let identity = {
        username: req.body.username
    }
    
    user.findOne({
        where: identity
    })
        .then(data => {
            if(!(data)) {
                res.status(403).json({
                    message: 'authentication failed',
                    status: 403
                })
            } else {
                payload = data.dataValues
                password = payload.password

                delete payload.password
                delete payload.createdAt
                delete payload.updatedAt

                bcrypt.hash(password, saltRounds, (err, hash) =>{
                    if(err) {
                        
                        res.status(403).json({
                            message: 'authentication failed',
                            status: 403
                        })
                    } else {
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '2h'})
                        res.status(200).json({
                            data: payload,
                            token: token,
                            status: 200
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).send('Internal Server Error coy')
        })
})

module.exports = router;
