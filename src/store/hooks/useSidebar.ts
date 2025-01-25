import { atom, useRecoilState } from "recoil";

const sidebarState = atom({
    key: "sidebarState",
    default: { isOpen: false },
});

export const useSidebar = () => {
    const [state, setState] = useRecoilState(sidebarState);

    const toggle = () => setState((prev) => ({ isOpen: !prev.isOpen }));

    return {
        isOpen: state.isOpen,
        toggle,
    };
};
