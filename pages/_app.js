import Footer from 'components/footer';
import { Header } from 'components/header';
import { MenuProvider, MobileMenu, useMobileMenu } from 'components/mobile-menu';
import { useCurrentTheme } from 'hooks/useCurrentTheme';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalStyles404, GlobalStylesLight } from 'styles/globalStyles';
import 'styles/scss/styles.scss';
import { ViewportProvider } from 'use-viewport';
import PageWrapper from 'components/page-wrapper';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	const { isLight, isOrange, currentTheme } = useCurrentTheme(pageProps);
	return (
		<ThemeProvider theme={currentTheme}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
			</Head>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-Z3F9YVCEKR"
			></script>
			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
        window.dataLayer = window.dataLayer || [];
	
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			
				gtag('config', 'G-Z3F9YVCEKR');
      `}
			</Script>
			<ViewportProvider>
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
			</ViewportProvider>
		</ThemeProvider>
	);
}

export default MyApp;
