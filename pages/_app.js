import Footer from 'components/footer';
import { Header } from 'components/header';
import { MenuProvider, MobileMenu } from 'components/mobile-menu';
import { useCurrentTheme } from 'hooks/useCurrentTheme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalStyles404, GlobalStylesLight } from 'styles/globalStyles';
import 'styles/scss/styles.scss';

const PageWrapper = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
`;

function MyApp({ Component, pageProps }) {
	const { isLight, isOrange, currentTheme } = useCurrentTheme(pageProps);

	return (
		<ThemeProvider theme={currentTheme}>
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
