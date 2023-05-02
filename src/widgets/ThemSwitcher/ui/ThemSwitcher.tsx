import {classNames} from "helpers/classNames/classNames";
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProveder";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import s from './ThemSwither.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemSwitcherProps {
    className?: string
}

export const ThemSwitcher = ({className}: ThemSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(s.ThemSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
