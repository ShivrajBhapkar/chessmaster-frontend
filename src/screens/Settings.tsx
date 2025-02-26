import { Link, Outlet } from "react-router-dom"

export const Settings = () => {
    return (
        <div className="max-w-full mt-0">
            <h2 className="font-bold text-2xl p-2">Settings</h2>
            <div className="flex mt-3 gap-12">
                <div className="ml-8">
                    <Link to="themes">
                        <img src="/theme.svg" alt="icon" />
                        <span>Themes</span>
                    </Link>
                </div>
                <div className="flex-1"><Outlet /></div>
            </div>
        </div>
    )
}