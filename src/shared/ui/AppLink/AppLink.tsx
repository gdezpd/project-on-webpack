import {classNames} from "helpers/classNames/classNames";
import s from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...OtherProps
    } = props
    return (
        <Link to={to}
              className={classNames(s.AppLink, {}, [className, s[theme]])}
              {...OtherProps}
        >
            {children}
        </Link>
    );
};