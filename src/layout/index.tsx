import React from 'react';
import Sidebar from '../components/sidebar';
import { useSidebar } from '../store/hooks/useSidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { toggle } = useSidebar();

    return (
        <div className="min-h-screen flex border-collapse">
            <Sidebar />
            <main className="flex-1 pt-[2rem] pb-1 mx-auto max-w-[1000px] text-center ">
                <button
                    onClick={toggle}
                    className="lg:hidden fixed left-4 top-4 z-40 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                    ☰
                </button>
                <div>
                    <h3 className="text-center text-4xl mb-4 font-bold tracking-tighter ">
                        ChessPro
                    </h3>
                    {children}
                </div>
            </main>
        </div>
    );
};