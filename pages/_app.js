import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import styled from 'styled-components';
import { Header } from '../components/header';

const PageWrapper = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
`;

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<PageWrapper>
				<Header />
				<Component {...pageProps} />
			</PageWrapper>
		</ThemeProvider>
	);
}

export default MyApp;
