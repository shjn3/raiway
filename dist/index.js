import cors from 'cors';
import dotenv from "dotenv";
import Express from "express";
import connectDB from "./config/db.js";
import router from "./routes/index.js";
dotenv.config({ path: '@/.env' });
connectDB().then(() => {
    const app = Express();
    app.use(cors());
    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));
    const port = process.env.PORT || 3000;
    app.use("/api", router);
    // validateEnv();
    app.listen(port, () => {
        console.log(`App listening on ${port}`);
    });
});
//# sourceMappingURL=index.js.map