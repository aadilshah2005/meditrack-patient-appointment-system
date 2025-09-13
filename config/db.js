const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
const connect = async (req , res) =>{
    try {
        await mongoose.connect(MONGO_URI).then(
            console.log("✅ Database connected successfully...")
        )
    } catch (error) {
         console.error("❌ Database connection failed:", error.message);
    }
}
module.exports = {connect}