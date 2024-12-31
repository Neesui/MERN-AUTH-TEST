import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connection Succesfully")
})
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.listen(4000, () => {
    console.log("Server Listening on port 4000")
});