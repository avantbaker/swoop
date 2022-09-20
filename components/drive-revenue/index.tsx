import { Section } from 'components/common/container';
import Text from 'components/common/text';
import { MenuButton } from 'components/common/menu-item';
import { Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import { useTheme } from 'styled-components';
import Cocktails from 'components/common/icons/badges/cocktails';
import Sandwhiches from 'components/common/icons/badges/sandwiches';

const Circle = styled(Box)`
	position: relative;
	height: ${rem(225)};
	width: ${rem(225)};
	border-radius: 50%;
	display: block;
	background-color: transparent;
	border-color: ${({ theme }) => theme.colors.calcite};
	border-width: 0.5px;
	border-style: solid;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: none !important;
	}
`;
const LittleCircle = styled('div')`
	position: absolute;
	height: 36px;
	width: 36px;
	border-radius: 50%;
	display: block;
	background-color: transparent;
	border-color: ${({ theme }) => theme.colors.orange};
	border-width: 0.5px;
	border-style: solid;
	left: 33px;
`;
const SolidCircle = styled('div')`
	position: relative;
	height: 12px;
	width: 12px;
	border-radius: 50%;
	display: block;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.colors.orange};
`;
const SandwichIcon = styled(Sandwhiches)`
	position: absolute;
	right: 0;
	top: -35px;
`;
export const LittleCircleWithDot = ({ ...rest }) => {
	return (
		<LittleCircle {...rest}>
			<SolidCircle />
		</LittleCircle>
	);
};
const WhiskeyImageWrapper = styled(Box)`
	position: absolute;
	right: -30%;
	bottom: -40%;
	max-width: 60%;
	img {
		max-width: 100%;
	}
`;
const PhoneImageWrapper = styled(Box)`
	position: absolute;
	left: -20%;
	bottom: -85%;
	img {
		max-width: 100%;
		height: 351px;
	}
`;
const CocktailIcon = styled(Cocktails)`
	position: absolute;
	top: 35%;
	left: -22%;
`;
export const MobileRevenueGallery = ({ ...rest }) => {
	return (
		<Circle {...rest}>
			<LittleCircleWithDot />
			<SandwichIcon />
			<WhiskeyImageWrapper>
				<img src="/elements/hp-whiskey-drink.png" alt="golfer holding whiskey drink" />
			</WhiskeyImageWrapper>
			<PhoneImageWrapper>
				<img src="/swoop/home/home-mobile-phone.png" alt="Image of the Swoop App" />
				<CocktailIcon />
			</PhoneImageWrapper>
		</Circle>
	);
};
const DesktopMockupGalleryContainer = styled(Box)`
	position: relative;
	width: 100%;
	height: 100%;
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		display: block !important;
	}
`;
const DesktopPhoneImage = styled('img')`
	position: absolute;
	flex-shrink: 0;
	top: -60px;
	right: -92px;
`;
export const SpiritsImage = styled('img')`
	position: absolute;
	top: -120px;
	left: 85px;
`;
export const WrapsImage = styled('img')`
	position: absolute;
	top: 160px;
	left: 240px;
`;
const RectangleFlagImage = styled('img')`
	position: absolute;
	top: 240px;
	left: 40px;
`;

const CustomSection = styled(Section)`
	flex-direction: column;
	@media screen and (min-width: ${rem(900)}) {
		flex-direction: row;
	}
	& > *:first-child {
		flex: 1;
	}
	& > *:last-child {
		flex: 1;
	}
	@media screen and (min-width: ${rem(1024)}) {
		& > *:last-child {
			flex: 2;
		}
	}
	@media screen and (min-width: ${rem(1200)}) {
		& > *:first-child {
			flex: 1.5;
		}
	}
`;
const DesktopMockupGallery = ({ ...rest }) => {
	return (
		<DesktopMockupGalleryContainer position="relative" {...rest}>
			<DesktopPhoneImage
				src="/elements/hello-john.png"
				alt="golfer holding whiskey drink"
			/>
			<SpiritsImage src="/elements/spirits.png" alt="golfer holding whiskey drink" />
			<WrapsImage src="/elements/wraps-icon.png" alt="golfer holding whiskey drink" />
			<RectangleFlagImage
				src="/elements/rectangle-flag.png"
				alt="golfer holding whiskey drink"
			/>
		</DesktopMockupGalleryContainer>
	);
};
export const DriveRevenue = () => {
	const { space } = useTheme();
	return (
		<CustomSection mt={[space[4], space[6], space[7]]} mb={[space[5], space[5]]}>
			<Flex flexDirection="column" pl={2} pr={2} mb={[6]}>
				<Text maxWidth={['60%']} variant="h1" mb={[5, 5, 6]}>
					Drive Revenue
				</Text>
				<Text maxWidth={['70%', '70%', '50%']} variant="h2" mb={[5]}>
					Have your next course, on the course.
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={4}>
					<Text color="orange" display="inline-block">
						Boost
					</Text>{' '}
					Revenue
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={4}>
					<Text color="orange" display="inline-block">
						Increase
					</Text>{' '}
					Margins
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={4}>
					<Text color="orange" display="inline-block">
						Enhance
					</Text>{' '}
					Experience
				</Text>
				<Text maxWidth={['80%']} variant="h4" mb={6}>
					<Text color="orange" display="inline-block">
						Integrate
					</Text>{' '}
					Seamlessly
				</Text>
				<MenuButton
					href="/app/courses"
					title="Learn More"
					color="orange"
					textAlign="center"
					maxWidth={['100%', '70%']}
				/>
			</Flex>
			<Flex
				pt={[rem(space[6]), rem(space[6]), 0]}
				pb={rem(space[7])}
				justifyContent="center"
			>
				<MobileRevenueGallery />
				<DesktopMockupGallery />
			</Flex>
		</CustomSection>
	);
};
