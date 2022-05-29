import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import styled from 'styled-components';
import { Header } from 'components/header';
import Footer from 'components/footer';
import Text from 'components/common/text';
import { MenuProvider, MobileMenu } from 'components/mobile-menu';

const PageWrapper = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<MenuProvider>
				<GlobalStyles />
				<PageWrapper>
					<Header />
					<Component {...pageProps} />
					<Footer />
					<MobileMenu>
						<Text color="black">Yurrr</Text>
					</MobileMenu>
				</PageWrapper>
			</MenuProvider>
		</ThemeProvider>
	);
}

export default MyApp;
