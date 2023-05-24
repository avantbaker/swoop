import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
`;

export const PageSectionContainer = styled('div')`
	width: 100%;
	position: relative;
	overflow: hidden;
	padding-top: 250px;
	margin-top: -250px;
`;

function getUrlLastWord(url) {
	// Get the last slash in the URL.
	var lastSlashIndex = url.lastIndexOf('/');

	// If there is no slash in the URL, return an empty string.
	if (lastSlashIndex === -1) {
		return '';
	}

	// Get the last word in the URL.
	var lastWord = url.substring(lastSlashIndex + 1);

	// Capitalize the first letter of the last word.
	lastWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);

	// Return the capitalized last word.
	return lastWord;
}

export default function PageWrapper({ children, pageName }) {
	const router = useRouter();
	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const body = document.getElementsByTagName('body')[0];
		router.events.on('routeChangeComplete', () => {
			html.style.overflow = 'initial';
			body.style.overflow = 'initial';
		});
		return () => {};
	}, []);

	return (
		<>
			<Head>
				<title>Swoop Golf | {getUrlLastWord(router.pathname) || 'Home'}</title>
				<meta property="og:image" content="/logos/Swoop-Logo-Black.png" key="ogimage" />
				<meta
					property="og:description"
					content="Swoop Golf | Keep Playing"
					key="ogdesc"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<PageContainer>{children}</PageContainer>
		</>
	);
}
