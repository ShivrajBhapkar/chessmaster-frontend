import { THEME_DATA } from "../constants/thems";
import { useThemeContext } from "../store/hooks/useThemes";
export function Themes() {
    const { updateTheme } = useThemeContext();
    return (
        <div>
            <div className="flex-1 bg-bgAuxiliary1 py-12 px-10">
                <div className="grid grid-cols-1 gap-8">
                {THEME_DATA.map(theme => {
                    return (
                        <div className="flex cursor-pointer justify-between items-center p-4" key={theme.id} style={{ backgroundColor: theme.background }} onClick={() => { updateTheme(theme.name) }}>
                            <div>
                                <h2 className="text-white capitalize" >{theme.name}</h2>

                            </div>
                            <div className="grid grid-cols-2">
                                <img className="w-16 h-16" style={{ backgroundColor: theme['dark-color'] }} src="/bk.png" />
                                <img className="w-16 h-16" style={{ backgroundColor: theme['light-color'] }} src="/wn.png" />
                                <img className="w-16 h-16" style={{ backgroundColor: theme['light-color'] }}  src="/br.png" />
                                <img className="w-16 h-16" style={{ backgroundColor: theme['dark-color'] }} src="/wp.png" />
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}