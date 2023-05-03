import { classNames } from 'helpers/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProveder';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './ThemSwither.module.scss';

interface ThemSwitcherProps {
    className?: string
}

export const ThemSwitcher = ({ className }: ThemSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
  // eslint-disable-next-line max-len
    <Button theme={ThemeButton.CLEAR} className={classNames(s.ThemSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
