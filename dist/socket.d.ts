import { Server } from "socket.io";
interface ServerToClientEvents {
    "user-status": (data: {
        userId: string;
        isOnline: boolean;
    }) => void;
}
interface ClientToDerverEvents {
    "user-online": (userId: string) => void;
    "user-logout": (userId: string) => void;
}
interface InterServerEvents {
}
interface SocketData {
    userId?: string;
}
export declare const initSocket: (server: any) => Server<ClientToDerverEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export declare const getOnlineUsers: () => string[];
export {};
//# sourceMappingURL=socket.d.ts.map