import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(s.Wrapper, {}, [className])}>
    <div className={s.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>
        Главную
      </AppLink>
      <AppLink theme={AppLinkTheme.RED} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
