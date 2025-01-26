import { THEME } from "../context/themeContext";

type THEME_DATA = {
    id: number;
    name: THEME;
    background: string;
    "light-color": string;
    "dark-color": string;
    "img-url": string;
};

export const THEME_DATA: THEME_DATA[] = [
    {
        id: 1,
        name: "default",
        background: "#302e2b",
        "light-color": "#739552",
        "dark-color": "#EBECD0",
        "img-url":
            "https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png",
    },
    {
        id: 2,
        name: "shadow",
        background: "#171717",
        "light-color": "white",
        "dark-color": "black",
        "img-url":
            "https://res.cloudinary.com/dcugqfvvg/image/upload/e_improve,e_sharpen/v1718047051/screenshot-localhost_5173-2024.06.11-00_44_01_pxwr43.png",
    },
];
