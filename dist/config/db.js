import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shine:9ReOnqkSUMCXsCcz@cluster0.anom7ch.mongodb.net/?appName=Cluster0");
        // await mongoose.connect(process.env.MONGO_URI!)
        console.log("✅ MongoDB Connected");
    }
    catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map