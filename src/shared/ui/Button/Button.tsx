import { classNames } from 'helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR= 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className? : string
    theme?: ThemeButton
}
export const Button:FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
  // eslint-disable-next-line react/button-has-type
    <button
      className={classNames(s.Button, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
