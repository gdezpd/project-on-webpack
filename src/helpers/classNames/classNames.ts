type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []):string {
  return [
    cls,
    ...additional.filter(Boolean),
    // eslint-disable-next-line max-len
    ...Object.entries(mods).filter(([classNames, value]) => Boolean(value)).map(([classNames, value]) => classNames),
  ]
    .join(' ');
}
