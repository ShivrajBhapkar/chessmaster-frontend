import React, { useState, createContext, useContext } from "react";
import { cn } from "../lib/utils";

// Context to manage accordion state
const AccordionContext = createContext<{ openItem: string | null; setOpenItem: (id: string | null) => void } | null>(null);

const Accordion: React.FC<{ children: React.ReactNode; defaultOpen?: string }> = ({ children, defaultOpen }) => {
    const [openItem, setOpenItem] = useState<string | null>(defaultOpen || null);

    return (
        <AccordionContext.Provider value={{ openItem, setOpenItem }}>
            <div className="border">{children}</div>
        </AccordionContext.Provider>
    );
};

const AccordionItem: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className }) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionItem must be used within an Accordion");

    const isOpen = context.openItem === id;

    return (
        <div className={cn("border-b", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { isOpen, id })
                    : child
            )}
        </div>
    );
};

const AccordionTrigger: React.FC<{
    id: string;
    isOpen?: boolean;
    children: React.ReactNode;
    className?: string;
}> = ({ id, isOpen, children, className }) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within an Accordion");

    const toggle = () => context.setOpenItem(isOpen ? null : id);

    return (
        <button
            onClick={toggle}
            className={cn(
                "flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
                className
            )}
        >
            {children}
            <svg
                className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    );
};

const AccordionContent: React.FC<{
    isOpen?: boolean;
    children: React.ReactNode;
    className?: string;
}> = ({ isOpen, children, className }) => {
    return (
        <div
            className={cn(
                "overflow-hidden transition-all",
                isOpen ? "max-h-screen py-4" : "max-h-0"
            )}
        >
            <div className={cn("text-sm", className)}>{children}</div>
        </div>
    );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
