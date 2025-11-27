import { Server, Socket } from "socket.io";
import User from "./models/auth.model.js";
const onlineUsers = new Map();
export const initSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    });
    io.on("connection", (socket) => {
        console.log("Socket connected:", socket.id);
        // User comes online
        socket.on("user-online", async (userId) => {
            socket.data.userId = userId;
            onlineUsers.set(userId, socket.id);
            await User.findByIdAndUpdate(userId, {
                isOnline: true,
            });
            io.emit("user-status", {
                userId,
                isOnline: true,
            });
        });
        // Manual logout
        socket.on("user-logout", async (userId) => {
            onlineUsers.delete(userId);
            await User.findByIdAndUpdate(userId, {
                isOnline: false,
                lastSeen: new Date(), // update last seen
            });
            io.emit("user-status", {
                userId,
                isOnline: false,
            });
        });
        // Disconnect (browser closed)
        socket.on("disconnect", async () => {
            console.log("socket disconnected:", socket.id);
            const userId = socket.data.userId;
            if (!userId)
                return;
            onlineUsers.delete(userId);
            await User.findByIdAndUpdate(userId, {
                isOnline: false,
                lastSeen: new Date(), // update last seen
            });
            io.emit("user-status", {
                userId,
                isOnline: false,
            });
        });
    });
    return io;
};
export const getOnlineUsers = () => Array.from(onlineUsers.keys());
//# sourceMappingURL=socket.js.map