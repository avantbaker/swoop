import { Section } from 'components/common/container';
import { NewsletterSection } from 'components/newsletter';
import { TextBanner } from 'components/text-banner';
import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { MenuButton } from 'components/common/menu-item';
import { LeftControl, RightControl } from 'components/testimonials';

const PressGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, auto);
	row-gap: ${rem(60)};

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(4, auto);
		row-gap: ${rem(80)};
		column-gap: ${rem(80)};
	}
`;

const FeaturedPressCardContainer = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: ${rem(320)} 1fr;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-column: 1 / 3;
		column-gap: ${rem(80)};

		.content {
			align-self: end;
		}
	}
`;

const FeaturedImageWrapper = styled(Box)`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

const PressCard = styled(Box)`
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-template-rows: repeat(2, auto);
	row-gap: ${rem(40)};
	column-gap: ${rem(30)};

	.button-wrapper {
		grid-column: 1 / 3;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		${FeaturedImageWrapper} {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
		}

		.content {
			grid-row: 1 / 2;
			grid-column: 2 / 3;
		}

		.button-wrapper {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			align-self: end;
		}
	}
`;

const FeaturedPressCard = () => {
	return (
		<FeaturedPressCardContainer>
			<FeaturedImageWrapper mx={[rem(-20), 0]}>
				<img src="/elements/get-in-the-whole.png" alt="Putting on the Green" />
			</FeaturedImageWrapper>
			<Flex
				className="content"
				flexDirection="column"
				maxHeight={[, rem(500)]}
				maxWidth={[, rem(400)]}
				justifyContent="space-between"
				pt={[6]}
			>
				<Flex flexDirection="column" mb={[6]} maxWidth={['90%']}>
					<Text variant="featuredPressTitle" mb={4}>
						Golf Magazine
					</Text>
					<Text variant="featuredPressMeta">
						DATE 01, 2022 | Edition Platform or Outlet
					</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text variant="featuredPressBody" pr={4} mb={[5]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sit
						amet velit tristique tempor at eu dui. Phasellus efficitur sapien a urna
						tristique suscipit. Praesent et commodo lectus, quis.
					</Text>
					<MenuButton maxWidth={[, , rem(200)]} title="Read More" color="orange" />
				</Flex>
			</Flex>
		</FeaturedPressCardContainer>
	);
};

const Pagination = () => {
	return (
		<Flex>
			<Flex alignItems="flex-end" mr={[2]}>
				<a href="#">
					<Text color="black">1</Text>
				</a>
				<Text color="black">,</Text>
			</Flex>
			<Flex alignItems="flex-end" mr={[2]}>
				<a href="#">
					<Text color="black">2</Text>
				</a>
				<Text color="black">,</Text>
			</Flex>
			<Flex alignItems="flex-end" mr={[2]}>
				<a href="#">
					<Text color="black">3</Text>
				</a>
				<Text color="black">,</Text>
			</Flex>
			<Flex alignItems="flex-end" mr={[2]}>
				<a href="#">
					<Text color="black">4</Text>
				</a>
				<Text color="black">,</Text>
			</Flex>
			<Flex alignItems="flex-end" mr={[2]}>
				<a href="#">
					<Text color="black">5</Text>
				</a>
				<Text color="black">,</Text>
			</Flex>
		</Flex>
	);
};
const PressItem = () => {
	return (
		<PressCard mx={[rem(-20), 0]}>
			<FeaturedImageWrapper maxHeight={[rem(340), 'unset']}>
				<img src="/elements/chip-it-in.png" alt="Guy chipping" />
			</FeaturedImageWrapper>
			<Flex flexDirection="column" justifyContent="space-between" className="content">
				<Flex flexDirection="column" mb={[6]} pr={4}>
					<Text variant="pressTitle" mb={4}>
						Golf Magazine
					</Text>
					<Text variant="featuredPressMeta">
						DATE 01, 2022 | Edition Platform or Outlet
					</Text>
				</Flex>
				<Flex flexDirection="column">
					<Text variant="featuredPressBody" pr={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sit
						amet velit tristique tempor at eu dui. Phasellus efficitur sapien a urna
						tristique suscipit. Praesent et commodo lectus, quis.
					</Text>
				</Flex>
			</Flex>
			<Box className="button-wrapper" maxWidth={[, , rem(200)]} px={[4, 0]}>
				<MenuButton title="Read More" color="orange" px={4} />
			</Box>
		</PressCard>
	);
};
function Press() {
	return (
		<>
			<TextBanner pt={[7, 8]} isLight title="Swoop in the Press" />
			<Section mb={[6]} flexDirection="column">
				<PressGrid mb={[6, 7]}>
					<FeaturedPressCard />
					<PressItem />
					<PressItem />
					<PressItem />
					<PressItem />
					<PressItem />
					<PressItem />
				</PressGrid>
				<Flex justifyContent="space-between">
					<Pagination />
					<Flex>
						<LeftControl />
						<RightControl />
					</Flex>
				</Flex>
			</Section>
			<NewsletterSection
				title="Press Inquiries."
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sit amet velit tristique tempor at eu dui. Phasellus efficitur sapien a urna tristique suscipit."
				imgSrc="/elements/hand-on-drink.png"
				hasCTA={true}
			/>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			theme: 'light',
		},
	};
}
export default Press;
