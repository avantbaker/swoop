import { useEffect, useState, useMemo } from 'react';
import theme from 'styles/theme';

export const useCurrentTheme = (pageProps) => {
	const { theme: pageTheme } = pageProps;
	const [currentTheme, setCurrentTheme] = useState(theme);

	const isLight = useMemo(() => currentTheme.type === 'light', [currentTheme]);
	const isOrange = useMemo(() => currentTheme.type === 'orange', [currentTheme]);

	useEffect(() => {
		let nextTheme = { ...currentTheme };
		const currentPageTheme = pageTheme ? pageTheme : 'dark';
		const isLight = currentPageTheme === 'light';
		const isOrange = currentPageTheme === 'orange';
		if (currentTheme.type !== currentPageTheme) {
			if (isLight) {
				nextTheme.type = 'light';
				setCurrentTheme(nextTheme);
			} else if (isOrange) {
				nextTheme.type = 'orange';
				setCurrentTheme(nextTheme);
			} else {
				nextTheme.type = 'dark';
				setCurrentTheme(nextTheme);
			}
		}
	}, [pageTheme, setCurrentTheme, currentTheme]);

	return {
		isLight,
		isOrange,
		currentTheme,
	};
};
