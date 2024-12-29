//creating and exporting a function that creates a jwt token and send to aut.controller.js
import jwt from 'jsonwebtoken';
export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('jwt', token,
        {
            maxAge: 7*24*60*60*1000  , //MS
            httpOnly: true, //prevent XSS xcross-site attacks
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',//prevent CSRF attacks
        });
    return token;
}