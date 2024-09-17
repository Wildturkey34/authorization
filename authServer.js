import express from  'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

let refreshToken = [];


app.post('/token', (req,res) =>{
    const refreshToken = req.body.token;

})

app.post('/login', (req,res) =>{
    const username = req.body.username;
    const user = {user: username}

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.json({accessToken: accessToken, refreshToken: refreshToken});
});


function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET), {expiresIn: '15s'};
}




app.listen(4000, () => {
    console.log("Server is running on port 4000!")
})