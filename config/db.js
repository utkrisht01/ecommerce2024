import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log(`connected to MongoDB database ${conn.connection.host}`.bgMagenta.white);
    } catch(error){
        console.log(`error in mongoDB ${error}`.bgRed.white)
    }
}

export default connectDB;