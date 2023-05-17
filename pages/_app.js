import Footer from 'components/footer';
import { Header } from 'components/header';
import { MenuProvider, MobileMenu } from 'components/mobile-menu';
import PageWrapper from 'components/page-wrapper';
import { useCurrentTheme } from 'hooks/useCurrentTheme';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalStyles404, GlobalStylesLight } from 'styles/globalStyles';
import { ViewportProvider } from 'use-viewport';
import '@reach/dialog/styles.css';
import 'styles/scss/styles.scss';

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
			<Script
				id="meta-tag"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
        !function(f,b,e,v,n,t,s)
				{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t,s)}(window, document,'script',
				'https://connect.facebook.net/en_US/fbevents.js');
				fbq('init', '5544902168929152');
				fbq('track', 'PageView');
      `,
				}}
			/>
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<img
					height="1"
					width="1"
					style="display:none"
					src="https://www.facebook.com/tr?id=5544902168929152&ev=PageView&noscript=1"
				/>`,
				}}
			/>
			<ViewportProvider>
				<MenuProvider>
					{isLight && <GlobalStylesLight />}
					{!isOrange && !isLight && <GlobalStyles />}
					{isOrange && <GlobalStyles404 />}
					<PageWrapper pageName={Component.name}>
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
