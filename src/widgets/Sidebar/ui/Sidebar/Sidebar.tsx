import { classNames } from 'helpers/classNames/classNames';
import React, { useState } from 'react';
import { ThemSwitcher } from 'widgets/ThemSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>TOGGLE</Button>
      <div className={s.switcher}>
        <ThemSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
