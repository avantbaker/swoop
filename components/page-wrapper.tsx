import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled('div')`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	min-width: 100%;
`;

export default function PageWrapper({ children }) {
	const router = useRouter();
	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const body = document.getElementsByTagName('body')[0];
		router.events.on('routeChangeComplete', () => {
			html.style.overflow = 'unset';
			body.style.overflow = 'unset';
		});
		return () => {};
	}, []);
	return <PageContainer>{children}</PageContainer>;
}
