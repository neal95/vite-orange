export const isDark = useDark({ selector: 'html', attribute: 'class', valueDark: 'dark', valueLight: 'light' });
export const toggleDark = useToggle(isDark);
