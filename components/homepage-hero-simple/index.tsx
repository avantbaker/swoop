import { MOBILE_HEADER_HEIGHT } from 'components/homepage-hero';
import styled from 'styled-components';
import { rem } from 'polished';
import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import { Pin } from 'components/common/icons/pin';
import { Circles } from 'components/common/circles';
import { MenuButton } from 'components/common/menu-item';
import { useMobileMenu } from 'components/mobile-menu';

const StyledHero = styled('div')`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: ${({ theme }) => rem(theme.space[6])}};
	@media screen and (min-width: ${({ theme }) => rem(1220)}) {
		display: grid;
		height: 100vh;
		grid-template-rows: repeat(8, 1fr);
		grid-template-columns: repeat(16, 1fr);
	}
`;

const Foreground = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: ${({ theme }) => rem(theme.space[4])}};
	z-index: 1000;
	@media screen and (min-width: ${({ theme }) => rem(1200)}) {
		justify-content: flex-end;
		grid-row: 2 / 9;
		grid-column: 9 / 16;
		margin-bottom: ${({ theme }) => rem(theme.space[5])}};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
		justify-content: flex-end;
		grid-row: 3 / 8;
		grid-column: 9 / 15;
		margin-bottom: unset;
	}
`;

const HeroBackground = styled('div')`
	margin-top: ${rem(MOBILE_HEADER_HEIGHT)};
	height: 100%;
	width: 100%;
	background: url(${({ src }) => `${src}`});
	background-size: cover;
	background-position: center;
	margin-bottom: -60px;
	height: 350px;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		height: 450px;
	}
	@media screen and (min-width: ${({ theme }) => rem(1200)}) {
		height: unset;
		margin-bottom: unset;
		margin-top: unset;
		grid-row: 1 / 9;
		grid-column: 1 / 10;
		z-index: 100;
	}
	@media screen and (min-width: ${({ theme }) => rem(1200)}) {
		grid-column: 1 / 11;
	}
`;

const ModalButton = styled(MenuButton)`
	width: 100%;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		width: auto;
	}
`;
const HeroForeground = ({
	title,
	subtitle,
	body,
	hasCta,
	hasPin = true,
	titleWidths,
	hasModal = false,
	bodyWidths = ['90%', '80%', '100%'],
	handleClick = () => {},
}) => {
	const { goToPage } = useMobileMenu();

	return (
		<Foreground>
			{hasPin && (
				<Box mb={4}>
					<Pin />
				</Box>
			)}
			<Text maxWidth={titleWidths} variant="h1" textAlign="right" mb={[5, 5, 6]}>
				{title}
			</Text>
			{subtitle && (
				<Text
					maxWidth={['80%', '70%', '80%']}
					variant="h2"
					textAlign="right"
					mb={[4, 4, 5]}
				>
					{subtitle}
				</Text>
			)}
			{body && (
				<Text maxWidth={bodyWidths} variant="h4" textAlign="right" mb={6}>
					{body}
				</Text>
			)}
			{hasModal && (
				<ModalButton
					textAlign={'center'}
					mr={['0 !important']}
					color="orange"
					title="Integrate With Swoop"
					onClick={handleClick}
				/>
			)}
			{hasCta && (
				<Flex width="100%" justifyContent="flex-end">
					<Box mr={4}>
						<a href="https://apps.apple.com/us/app/swoop-golf-concierge/id1633105217">
							<img src="/elements/apple-store.svg" />
						</a>
					</Box>
					<Box>
						<a href="https://play.google.com/store/apps/details?id=io.swoop">
							<img src="/elements/google-play.svg" />
						</a>
					</Box>
				</Flex>
			)}
		</Foreground>
	);
};

export const Hero = ({
	src = '/swoop/home/home-phones.png',
	title = 'Keep Playing',
	subtitle = 'Worry about the speed of your greens, not the speed of your club cart.',
	body = `The boom of on-demand delivery, swipe-enabled service, and remotely-accessible
	accommodation has reached the golf course, and Swoop is here to help.`,
	hasCta = true,
	hasCircles = true,
	hasModal = false,
	hasPin = true,
	titleWidths = ['70%', '60%', '70%'],
	bodyWidths = ['90%', '80%', '80%'],
	handleClick = () => {},
	...rest
}) => {
	return (
		<>
			<StyledHero {...rest}>
				<HeroBackground src={src} />
				<HeroForeground
					title={title}
					subtitle={subtitle}
					body={body}
					hasCta={hasCta}
					hasPin={hasPin}
					titleWidths={titleWidths}
					hasModal={hasModal}
					bodyWidths={bodyWidths}
					handleClick={handleClick}
				/>
				{hasCircles && <Circles />}
			</StyledHero>
		</>
	);
};
