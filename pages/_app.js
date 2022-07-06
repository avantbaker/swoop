import { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalStylesLight } from 'styles/globalStyles';
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

	if (isLight) {
		theme.type = 'light';
	}

	return (
		<ThemeProvider theme={theme}>
			<MenuProvider>
				{isLight ? <GlobalStylesLight /> : <GlobalStyles />}
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
