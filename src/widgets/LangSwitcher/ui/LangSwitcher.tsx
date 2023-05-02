import {classNames} from "helpers/classNames/classNames";
import React from "react";
import s from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ThemSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: ThemSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
};
