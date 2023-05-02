import {classNames} from "helpers/classNames/classNames";
import s from "./Sidebar.module.scss"
import React, {useState} from "react";
import {ThemSwitcher} from "widgets/ThemSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>TOGGLE</button>
            <div className={s.switcher}>
                <ThemSwitcher/>
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    );

};
