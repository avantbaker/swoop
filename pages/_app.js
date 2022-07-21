import { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalStylesLight, GlobalStyles404 } from 'styles/globalStyles';
import theme from 'styles/theme';
import themeLight from 'styles/theme.light';
import styled from 'styled-components';
import { Header } from 'components/header';
import Footer from 'components/footer';
import { MenuProvider, MobileMenu } from 'components/mobile-menu';

import 'styles/scss/styles.scss';

const PageWrapper = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
`;

function MyApp({ Component, pageProps }) {
	const { theme: pageTheme } = pageProps;
	const isLight = pageTheme === 'light';
	const isOrange = pageTheme === 'orange';

	if (isLight) {
		theme.type = 'light';
	} else if (isOrange) {
		theme.type = 'orange';
	}

	return (
		<ThemeProvider theme={theme}>
			<MenuProvider>
				{isLight && <GlobalStylesLight />}
				{!isOrange && !isLight && <GlobalStyles />}
				{isOrange && <GlobalStyles404 />}
				<PageWrapper>
					<Header />
					<Component {...pageProps} />
					<Footer />
					<MobileMenu />
				</PageWrapper>
			</MenuProvider>
		</ThemeProvider>
	);
}

export default MyApp;
