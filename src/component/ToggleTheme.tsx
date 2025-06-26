"use client"

import { useTheme } from "@/context/ThemeContext";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

export default function ToggleTheme() {

    const { theme, toggleTheme } = useTheme()!;

    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" onChange={toggleTheme} checked={theme === "dark"} value="synthwave" />

            {/* sun icon */}
            <RiSunLine className="swap-off fill-current" />

            {/* moon icon */}
            <RiMoonLine className="swap-on fill-current" />
        </label>
    )
}