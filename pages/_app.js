import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import styled from 'styled-components';
import { Header } from 'components/header';
import Footer from 'components/footer';

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
			<GlobalStyles />
			<PageWrapper>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</PageWrapper>
		</ThemeProvider>
	);
}

export default MyApp;
