import { useRouter } from 'next/dist/client/router';
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
export default function PageWrapper({ children }) {
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
			<PageContainer>{children}</PageContainer>
		</>
	);
}
