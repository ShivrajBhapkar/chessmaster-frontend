import { useEffect, useState } from "react";
const WS_URL = "ws://chesspro.xyz:8081";
import { useUser } from "./useUser";
export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const user = useUser();

    useEffect(() => {
        if (!user) return;
        const ws = new WebSocket(`${WS_URL}?token=${user.token}`);

        ws.onopen = () => {
            setSocket(ws);
        };

        ws.onclose = () => {
            setSocket(null);
        };

        return () => {
            ws.close();
        };
    }, [user]);

    return socket;
};

