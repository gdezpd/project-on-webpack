declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.svg' {
    // eslint-disable-next-line no-undef
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
