import mongoose from "mongoose"


const dbConnection = async () => {
    const DB_URL = "mongodb+srv://user:Passwordforjob@cluster0.w4glrxq.mongodb.net/";
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true
        });
        console.log("Database connected successfully ")
    }
    catch (error) {
        console.log("Error while connecting with database", error.message)
    }
}
export default dbConnection;