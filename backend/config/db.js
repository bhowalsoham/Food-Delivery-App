import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhowalsoham:teer47mongo@cluster0.6cesz.mongodb.net/?').then(() => console.log("DB connected"));
}