import mongoose from "mongoose";

export const connectToDB = async () => {
    try{
        const con=await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB : "+con.connection.host);
    }catch(err){
        console.log("Error: "+err);
    }
}