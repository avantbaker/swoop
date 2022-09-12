import { DualPathSection, DualSection } from 'components/app-cards';
import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { motion } from 'framer-motion';
import { rem } from 'polished';
import { useRef } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

export const FloatingAppContainer = styled(DualPathSection)`
	background: ${({ theme }) => theme.colors.black};
	border-top: none !important;
	position: relative;
	.mobile-section--desktop {
		display: none;
	}
	.fixed {
		max-height: ${rem(340)};
		z-index: 10;
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-height: unset;
		}
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		.mobile-section--desktop {
			display: flex;
			grid-column: 5 / 7;
			align-self: center;
		}
		.mobile-section {
			display: none !important;
		}
	}
`;
export const MainFloatingHero = styled(DualPathSection)`
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
	}
`;
export const CustomSection = styled(Section)`
	background: ${({ theme }) => theme.colors.black};
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-left: 2px solid ${({ theme }) => theme.colors.orange};
		border-right: 2px solid ${({ theme }) => theme.colors.orange};
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		width: 100%;
		justify-items: center;
		.section-details {
			grid-column: 4 / 9;
		}
		.mobile-section--desktop {
			grid-column: 9 / 12;
			align-self: center;
		}
		.mobile-section {
			display: none !important;
		}
	}
`;
export const SectionDetails = styled(DualSection)`
	position: relative;

	img {
		transform: translateY(${rem(20)});
		max-height: ${rem(340)};
		@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
			max-height: unset;
		}
	}
	.hidden {
		visibility: hidden;
	}
	.fixed {
		position: fixed;
		z-index: 10;
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		border-left: none;
	}
`;
export const MobileSection = styled(Section)`
	position: relative;
	text-align: right;
`;
export const ValueSectionContainer = styled(Section)`
	// min-height: 100vh;
`;
export const ContentContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto 1fr;
	column-gap: 20px;
	z-index: 10000000000000;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-rows: 1fr;
	}
`;

const TextContent = styled(Box)`
	grid-column: 1 / 10;
	grid-row: 1 / 2;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 9 / 13;
		align-self: center;
	}
`;
const ImgContent = styled(Flex)`
	grid-column: 1 / 13;
	grid-row: 2 / 3;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-row: 1 / 2;
		grid-column: 1 / 9;
	}
`;
export const MainImage = styled(motion.img)`
	max-width: 300px;
`;
export const ValueImageContainer = styled(motion.div)`
	position: relative;

	.hidden {
		visibility: hidden;
	}
`;
const NewSpiritIcon = styled(motion.img)`
	position: absolute;
	top: ${rem(-10)};
	left: ${rem(-20)};
	max-width: ${rem(130)};
	z-index: 5;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		top: ${rem(30)};
		left: ${rem(-110)};
		max-width: ${rem(190)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: ${rem(60)};
		top: ${rem(-100)};
		max-width: ${rem(180)};
	}
`;
const NewWrapIcon = styled(motion.img)`
	position: absolute;
	top: ${rem(160)};
	right: ${rem(-25)};
	max-width: ${rem(130)};
	z-index: 1;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		right: ${rem(-110)};
		top: ${rem(260)};
		max-width: ${rem(190)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		right: ${rem(80)};
		top: ${rem(140)};
		max-width: ${rem(180)};
	}
`;
const FairwayPicture = styled(motion.img)`
	position: absolute;
	bottom: ${rem(-40)};
	left: ${rem(-20)};
	max-height: ${rem(270)};
	z-index: 0;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		max-height: ${rem(420)};
		left: ${rem(-120)};
		bottom: ${rem(-260)};
	}
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		max-height: ${rem(380)};
		left: ${rem(-190)};
		bottom: ${rem(-30)};
	}
`;

export const ValueSectionWrapper = styled('div')`
	position: relative;
`;
export const ValueSection = ({
	anchorRef = null,
	onEnter = () => {},
	topOffset = '0',
	children = null,
	title = '',
	body = '',
	...rest
}) => {
	const DEFAULT_REF = useRef(null);
	return (
		<ValueSectionWrapper>
			<Waypoint onEnter={onEnter} bottomOffset={topOffset}>
				<ValueSectionContainer
					{...rest}
					position="relative"
					flexDirection="column"
					mt={[]}
				>
					<ContentContainer
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						transition={{ duration: 1.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						{/* <Flex flexDirection={['column']}> */}
						<TextContent flex={[1, 1]} mb={7}>
							<Text variant="h1" mb={5} maxWidth={rem(400)}>
								{title}
							</Text>
							<Text variant="h2" maxWidth={rem(500)}>
								{body}
							</Text>
						</TextContent>
						<ImgContent flex={[1, 'auto']} justifyContent="center">
							<ValueImageContainer>
								<MainImage
									className="hidden"
									ref={anchorRef || DEFAULT_REF}
									src="/elements/hello-john.png"
									alt=""
								/>
								<NewSpiritIcon
									src="/elements/spirits.png"
									alt="golfer holding whiskey drink"
								/>
								<NewWrapIcon
									src="/elements/wraps-icon.png"
									alt="golfer holding whiskey drink"
								/>
								<FairwayPicture
									src="/elements/fairway.png"
									alt="golfer holding whiskey drink"
								/>
							</ValueImageContainer>
						</ImgContent>
						{/* </Flex> */}
					</ContentContainer>
				</ValueSectionContainer>
			</Waypoint>
			{children}
		</ValueSectionWrapper>
	);
};
