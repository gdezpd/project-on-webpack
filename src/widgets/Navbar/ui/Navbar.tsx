import React from 'react';
import {classNames} from "helpers/classNames/classNames";
import s from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemSwitcher} from "widgets/ThemSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(s.Wrapper, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={s.mainLink}>
                    Главную
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};





