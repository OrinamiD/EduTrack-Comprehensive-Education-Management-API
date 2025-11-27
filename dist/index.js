import express, {} from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import multer from "multer";
import { connectedDB, PORT } from "./config/db.config.js";
import router from "./routes/index.route.js";
import { initSocket } from "./socket.js";
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && "body" in err) {
        return res
            .status(400)
            .json({ success: false, message: "Invalid JSON format." });
    }
    next(err);
});
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
            success: false,
            message: "File too large. Max size is 5 MB.",
        });
    }
    return res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
const server = http.createServer(app);
initSocket(server);
connectedDB()
    .then(() => {
    server.listen(PORT, () => {
        console.log(`Server running on port`, PORT);
    });
})
    .catch((err) => {
    console.error(err);
});
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});
app.use("/api", router);
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});
//# sourceMappingURL=index.js.map