import { cn } from '../lib/utils';
import { useSidebar } from '../store/hooks/useSidebar';
import { SideNav } from './side-nav';
import { useThemeContext } from '../store/hooks/useThemes';
import { UpperNavItems, LowerNavItems } from '../components/constants/side-nav';

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const { theme } = useThemeContext();
    const { isOpen, toggle } = useSidebar();

    return (
        <nav
            className={cn(
                `z-50 h-screen pt-4 fixed lg:sticky top-0 text-white transition-transform duration-300 ease-in-out`,
                isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                'w-2/6 lg:w-24 xl:w-36', // Takes 3/4 of screen on mobile, original width on desktop
                className,
                `${theme === 'shadow' ? 'bg-black' : 'bg-slate-950'}`
            )}
        >
            {/* Close button for mobile */}
            <button
                onClick={toggle}
                className="absolute right-4 top-0 lg:hidden text-white text-2xl hover:text-gray-300"
            >
                &times;
            </button>

            <div className="flex flex-col mt-5 h-full justify-between">
                <div className="flex flex-col justify-start">
                    <SideNav
                        className="opacity-0 transition-all duration-300 group-hover:z-50 group-hover:rounded group-hover:bg-black p-1 group-hover:opacity-100"
                        items={UpperNavItems}
                    />
                </div>

                <div className="flex flex-col justify-end mb-2">
                    <SideNav
                        className="opacity-0 transition-all duration-300 group-hover:z-50 group-hover:rounded group-hover:bg-black p-1 group-hover:opacity-100"
                        items={LowerNavItems}
                    />
                </div>
            </div>
        </nav>
    );
}