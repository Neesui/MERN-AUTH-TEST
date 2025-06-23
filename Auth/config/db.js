import mongoose from 'mongoose';

const dbConnect = async () => {
    try{
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Database connected Successfully`)
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default dbConnect;